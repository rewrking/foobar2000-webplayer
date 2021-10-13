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
	const track: FoobarPlaylistTrack = isPlaying && playingItem >= 0 ? playlist[playingItem] : defaultTrack;
	return (
		<Styles>
			<Image src={isPlaying ? albumArt : "/img/nocover.png"} alt="art" />
			<div className="track-info">
				<p>{track.title}</p>
				<p>{track.artist}</p>
				<p>{track.album}</p>
				<p>{track.date}</p>
				<p>{track.length}</p>
				<p>{state.helper3}</p>
			</div>
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
	border: 2px solid #555555;
`;

const Styles = styled.div`
	display: block;

	p {
		margin: 0;
		padding-bottom: 0.25rem;
	}

	.track-info {
		padding-top: 1.5rem;
	}
`;
