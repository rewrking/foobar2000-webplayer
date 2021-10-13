import React, { useEffect } from "react";
import styled from "styled-components";

import { Page, PlayingView } from "Components";
import { useFoobarStore } from "Stores";

type Props = {
	children?: React.ReactNode;
};

const HomeLayout = (props: Props) => {
	const { state, getCurrentPlaylist, getPlaylist, timer, startTimer, endTimer } = useFoobarStore();

	// const [state, loading, error, cache] = useAsyncEffect(getCurrentPlaylist, [getCurrentPlaylist, timer]);

	// useEffect(() => cache.remove, [cache]);

	useEffect(() => {
		startTimer();

		return () => {
			// cache.remove();
			endTimer();
		};
	}, [startTimer, endTimer]);

	return (
		<Page title="Home">
			<h1>Home</h1>
			<hr />
			{/* {!!error ? (
				<>Error... {error}</>
			) : loading ? (
				<>Loading...</>
			) : ( */}
			<>{!!state ? <PlayingView state={state} /> : null}</>
			{/* )} */}
		</Page>
	);
};

export { HomeLayout };
