import { BaseState, Action, Optional } from "@rewrking/react-kitchen";
import { Foobar2000StateResult, FoobarPlaylistInfo, FoobarPlaylistTrack } from "Data/Foobar2000";
import { foobarApi } from "Api/FoobarApi";

type ExpectedPlaylistInfo = {
	name: string;
	count: string;
};

type ExpectedPlaylistTrack = {
	album: string;
	artist: string;
	date: string;
	index: string;
	length: string;
	lengthSeconds: number;
	title: string;
};

export enum FoobarCommands {
	SwitchPlaylist = "SwitchPlaylist",
}

// Note: The foobar2000 server has no CORS controls, so we just needs to fetch it as raw js

class FoobarState extends BaseState {
	private url: string = "http://localhost:8888";

	private parseSpecialChars = (data: string): string => {
		data = data.replaceAll(/&#39;/g, "'");
		return data;
	};

	state: Optional<Foobar2000StateResult> = null;

	@Action
	private setPlaylistState = (data: any): Optional<Foobar2000StateResult> => {
		if (!data) return null;

		let state = {
			...data,
			albumArt: data.albumArt.length > 0 ? `${this.url}${data.albumArt}` : data.albumArt,
			playingItem: (data.playingItem as string).length > 0 ? parseInt(data.playingItem, 10) : -1,
			prevplayedItem: (data.prevplayedItem as string).length > 0 ? parseInt(data.prevplayedItem, 10) : -1,
			playlistPlaying: (data.playlistPlaying as string).length > 0 ? parseInt(data.playlistPlaying, 10) : -1,
			playlistPlayingItemsCount:
				(data.playlistPlayingItemsCount as string).length > 0
					? parseInt(data.playlistPlayingItemsCount, 10)
					: -1,
			isPlaying: !!data.isPlaying,
			isPaused: !!data.isPaused,
			isEnqueueing: !!data.isEnqueueing,
			isUndoAvailable: !!data.isUndoAvailable,
			isRedoAvailable: !!data.isRedoAvailable,
			playlist: data.playlist.map((track: ExpectedPlaylistTrack) => {
				return {
					...track,
					artist: this.parseSpecialChars(track.artist),
					title: this.parseSpecialChars(track.title),
					album: this.parseSpecialChars(track.album),
					index: parseInt(track.index, 10),
				} as FoobarPlaylistTrack;
			}),
			playlists: data.playlists.map((list: ExpectedPlaylistInfo) => {
				return {
					name: this.parseSpecialChars(list.name),
					count: parseInt(list.count, 10),
				} as FoobarPlaylistInfo;
			}),
		};

		// console.log(state);
		return state;
	};

	getCurrentPlaylist = async () => {
		try {
			const result = await foobarApi.getPlaylistState();
			return this.setPlaylistState(result);
		} catch (err) {
			throw err;
		}
	};

	getPlaylist = async (index: number) => {
		try {
			// Note: this literally switches the playlist too
			const result = await foobarApi.getPlaylistState(FoobarCommands.SwitchPlaylist, index);
			return this.setPlaylistState(result);
		} catch (err) {
			throw err;
		}
	};

	timer: number = -1;
	private interval: Optional<NodeJS.Timeout> = null;

	@Action
	private setTimerValue = (val: number) => {
		if (val > 1000) {
			this.timer = 0;
		} else {
			this.timer = val;
		}
	};

	startTimer = async (interval: number = 2) => {
		try {
			this.setTimerValue(0);
			this.state = await this.getCurrentPlaylist();
			this.interval = setInterval(async () => {
				try {
					this.setTimerValue(this.timer + 1);
					this.state = await this.getCurrentPlaylist();
				} catch (err) {
					throw err;
				}
			}, interval * 1000);
		} catch (err) {
			throw err;
		}
	};

	endTimer = () => {
		this.setTimerValue(-1);
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}
	};
}

export { FoobarState };
