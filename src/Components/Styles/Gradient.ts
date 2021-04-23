import { css } from "styled-components";

const backgroundGradient = (from: string, to: string) => {
	return css`
		background: ${from};
		background: -moz-linear-gradient(top, ${from} 0, ${to} 100%);
		background: -webkit-gradient(left top, left bottom, color-stop(0, ${from}), color-stop(100%, ${to}));
		background: -webkit-linear-gradient(top, ${from} 0, ${to} 100%);
		background: -o-linear-gradient(top, ${from} 0, ${to} 100%);
		background: -ms-linear-gradient(top, ${from} 0, ${to} 100%);
		background: linear-gradient(to bottom, ${from} 0, ${to} 100%);
	`;
};

export { backgroundGradient };
