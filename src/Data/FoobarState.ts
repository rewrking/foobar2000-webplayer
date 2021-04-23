export type FoobarPlaylistInfo = {
	name: string;
	count: number;
};

export type FoobarPlaylistTrack = {
	album: string;
	artist: string;
	date: string;
	index: number;
	length: string;
	lengthSeconds: number;
	title: string;
};

export type FoobarState = {
	playlist: FoobarPlaylistTrack[];
	playlists: FoobarPlaylistInfo[];
	playbackOrder: number;
	volume: number;
	volumedb: number;
	SAC: string;
	SAQ: string;
	isPlaying: number;
	isPaused: number;
	isEnqueueing: number;
	playingItem: number;
	focusedItem: number;
	prevplayedItem: number;
	itemPlayingPos: number;
	itemPlayingLen: number;
	playlistPage: number;
	playlistItemsPerPage: number;
	playlistItemsCount: number;
	playlistActive: number;
	playlistPlaying: number;
	playlistPlayingItemsCount: number;
	playlistTotalTime: string;
	queueTotalTime: string;
	isUndoAvailable: number;
	isRedoAvailable: number;
	helper1: string;
	helper2: string;
	helper3: string;
	albumArt: string;
};
