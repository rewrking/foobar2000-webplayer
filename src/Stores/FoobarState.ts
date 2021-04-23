import { BaseState, Action, Optional } from "@andrew-r-king/react-kitchen";
import { Foobar2000AppState, FoobarPlaylistInfo, FoobarPlaylistTrack } from "Data/Foobar2000";
import { UrlParser } from "Utils";

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
	private url: string = "http://localhost:8888/webplayer";

	playlistState: Optional<Foobar2000AppState> = null;
	playlist: Optional<FoobarPlaylistInfo> = null;

	private fetch = (url: string, onLoad: (data: any) => void) => {
		console.log(url);
		var s = document.createElement("script");
		s.setAttribute("src", url);
		s.onload = () => {
			onLoad(window["foobarData"]);
			document.body.removeChild(s);
		};
		document.body.appendChild(s);
	};

	private parseSpecialChars = (data: string): string => {
		data = data.replaceAll(/&#39;/g, "'");
		return data;
	};

	@Action
	private setPlaylistState = (data: any) => {
		this.playlistState = {
			...data,
			prevplayedItem: (data.prevplayedItem as string).length > 0 ? parseInt(data.prevplayedItem, 10) : null,
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
		this.playlist = this.playlistState!.playlists[this.playlistState!.playlistPlaying];
		console.log(this.playlistState);
	};

	private getPlaylistState = (cmd: Optional<FoobarCommands> = null, param1: Optional<string | number> = null) => {
		let url: UrlParser = new UrlParser(this.url);

		if (cmd !== null) url.addParam("cmd", cmd);
		if (param1 !== null) url.addParam("param1", param1);

		url.addParam("param3", "js/state.js");

		this.fetch(url.toString(), this.setPlaylistState);
	};

	getCurrentPlaylist = () => {
		this.getPlaylistState();
	};

	getPlaylist = (index: number) => {
		// Note: this literally switches the playlist too
		this.getPlaylistState(FoobarCommands.SwitchPlaylist, index);
	};
}

export { FoobarState };
