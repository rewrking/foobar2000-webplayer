import React, { useEffect } from "react";

import { Page } from "Components";
import { useFoobarStore } from "Stores";

type Props = {
	children?: React.ReactNode;
};

const HomeLayout = (props: Props) => {
	const { getCurrentPlaylist, getPlaylist, playlistState, playlist } = useFoobarStore();

	useEffect(getCurrentPlaylist, [getCurrentPlaylist]);
	// useEffect(getCurrentPlaylist, [getCurrentPlaylist]);

	return (
		<Page title="Home">
			<h1>Home</h1>
			{!playlistState ? (
				<>Loading...</>
			) : (
				<>
					{playlistState ? <div className="stuff">{JSON.stringify(playlistState)}</div> : null}
					{playlist ? <div className="stuff">{JSON.stringify(playlist)}</div> : null}
				</>
			)}
		</Page>
	);
};

export { HomeLayout };
