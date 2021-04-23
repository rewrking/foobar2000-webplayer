import React, { useEffect } from "react";

import { Page } from "Components";
import { useFoobarStore } from "Stores";

type Props = {
	children?: React.ReactNode;
};

const HomeLayout = (props: Props) => {
	const { getStuff, data } = useFoobarStore();

	useEffect(getStuff, [getStuff]);

	return (
		<Page title="Home">
			<h1>Home</h1>
			{!data ? (
				<>Loading...</>
			) : data ? (
				<>
					<div className="stuff">{JSON.stringify(data)}</div>
				</>
			) : null}
		</Page>
	);
};

export { HomeLayout };
