import { BaseApi, Optional } from "@rewrking/react-kitchen";
import { Foobar2000StateResult } from "Data";
import { FoobarCommands } from "Stores/FoobarState";
import { UrlParser } from "Utils";

class FoobarApi {
	getPlaylistState = (
		cmd: Optional<FoobarCommands> = null,
		param1: Optional<string | number> = null
	): Promise<Foobar2000StateResult> => {
		let url: UrlParser = new UrlParser(process.env.REACT_APP_FOOBAR_SERVER_URL ?? "http://localhost:8888");

		if (cmd !== null) url.addParam("cmd", cmd);
		if (param1 !== null) url.addParam("param1", `${param1}`);

		url.addParam("param3", "js/state.js");

		// console.log(url.toString());

		return new Promise<Foobar2000StateResult>((resolve, reject) => {
			let target = document.getElementsByTagName("script")[0] || document.head;
			if (!!target && !!target.parentNode) {
				let s = document.createElement("script");
				s.onload = (ev) => {
					if (window["foobarData"]) {
						let tmp = JSON.stringify(window["foobarData"]);
						tmp = tmp.replace(/"\?"/g, `"0"`);
						resolve(JSON.parse(tmp));
					} else {
						reject(new Error("Couldn't mount 'foobarData'"));
					}
					if (document.body.contains(s)) {
						document.body.removeChild(s);
					}
				};
				s.src = url.toString();
				target.parentNode.insertBefore(s, target);
			}
		});
	};
}

const foobarApi = new FoobarApi();

export { foobarApi };
