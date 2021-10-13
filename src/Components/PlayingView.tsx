import React from "react";
import styled from "styled-components";
import { Foobar2000StateResult, FoobarPlaylistTrack } from "Data";

type PlayingProps = {
	state: Foobar2000StateResult;
};

const defaultTrack: FoobarPlaylistTrack = {
	album: "",
	artist: "",
	date: "",
	index: -1,
	length: "",
	lengthSeconds: 0,
	title: "",
};

const PlayingView = ({ state }: PlayingProps) => {
	const { albumArt, isPlaying, playingItem, playlist } = state;
	const track: FoobarPlaylistTrack = playingItem >= 0 ? playlist[playingItem] : defaultTrack;
	return (
		<Styles>
			<Image src={isPlaying ? albumArt : "/img/nocover.png"} alt="art" />
			<p>Title: {track.title}</p>
			<p>Artist: {track.artist}</p>
			<p>Album: {track.album}</p>
			<p>Year: {track.date}</p>
			<p>Length: {track.length}</p>
			<p>Info: {state.helper3}</p>
			<hr />
			{/* <div className="stuff">{JSON.stringify(playlist)}</div> */}
		</Styles>
	);
};

export { PlayingView };

const Image = styled.img`
	display: block;
	max-width: 300px;
	max-height: 300px;
	width: auto;
	height: auto;
	margin-left: auto;
	margin-right: auto;
`;

const Styles = styled.div`
	display: block;
`;
