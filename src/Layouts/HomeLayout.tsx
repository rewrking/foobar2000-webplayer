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
			<Styles>
				<h1>Home</h1>
				<hr />
				<>{!!state ? <PlayingView state={state} /> : null}</>
				<hr />
				{/* <div className="stuff">{JSON.stringify(state)}</div> */}
			</Styles>
		</Page>
	);
};

const Styles = styled.div`
	hr {
		color: darkmagenta;
		margin-top: 2rem;
		margin-bottom: 2rem;
		max-width: 30rem;
	}
`;

export { HomeLayout };
