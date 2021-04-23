import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import { Base } from "Components/GlobalStyles/Base";
import { Providers } from "Stores";

import { Routes } from "./Routes";

import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<Providers>
			<Base />
			<Routes />
		</Providers>
	</React.StrictMode>,
	root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
