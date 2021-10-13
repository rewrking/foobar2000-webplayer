import { BodyStyles } from "Components";
import React from "react";
import styled from "styled-components";
// import { mediaUrl } from "Utils";

// import { Header } from "./Header";
// import { Navigation } from "./Navigation";

type Props = {
	children?: React.ReactNode;
	title?: string;
};

const Page = (props: Props) => {
	return (
		<Styles>
			<BodyStyles />
			<Main id="main">{props.children}</Main>
		</Styles>
	);
};

export { Page };

const Styles = styled.div`
	display: block;
	position: absolute;
	min-height: 100vh;
	top: 0;
	right: 0;
	bottom: auto;
	left: 0;
	background-color: #222222;
	color: #fafafa;
	z-index: 1;
`;

const Main = styled.div`
	display: block;
	max-width: 60rem;
	margin: 0 auto;
	z-index: 1;
`;
