import { BaseState, Action, Optional } from "@andrew-r-king/react-kitchen";
import { FoobarPlaylistInfo } from "Data/FoobarState";

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

class FoobarState extends BaseState {
	private url: string = "http://localhost:8888/webplayer";

	data: Optional<FoobarState> = null;

	private fetch = (path: string, onLoad: (data: any) => void) => {
		var s = document.createElement("script");
		s.setAttribute("src", `${this.url}/${path}`);
		s.onload = () => {
			onLoad(window["foobarState"]);
			document.body.removeChild(s);
		};
		document.body.appendChild(s);
	};

	@Action
	setData = (data: any) => {
		this.data = {
			...data,
			playlist: data.playlist.map((list: ExpectedPlaylistTrack) => {
				return {
					...list,
					index: parseInt(list.index, 10),
				};
			}),
			playlists: data.playlists.map((list: ExpectedPlaylistInfo) => {
				return {
					...list,
					count: parseInt(list.count, 10),
				} as FoobarPlaylistInfo;
			}),
		};
		console.log(this.data);
	};

	getStuff = () => {
		this.fetch(`?param3=js/state.js`, this.setData);
	};
}

export { FoobarState };
