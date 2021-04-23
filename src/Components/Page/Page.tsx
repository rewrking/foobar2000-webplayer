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
	left: auto;
	right: auto;
	top: 0;
	bottom: 0;
	padding: 2rem 0;
	width: 76rem;
	color: #333;
	z-index: 1;
`;

const Main = styled.div`
	display: block;
	position: relative;
	z-index: 1;
`;
