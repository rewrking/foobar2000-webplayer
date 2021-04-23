import { createGlobalStyle } from "styled-components";

import { backgroundGradient } from "Components/Styles";

export const BodyStyles = createGlobalStyle`
	body {
		${backgroundGradient("#d2d2d2", "#9b9b9b")}

		color: #fff;
		display: table-cell;
		text-align: center;
		vertical-align: middle;
	}
`;
