export class UrlParser {
	private params: string[] = [];

	constructor(private baseUrl: string) {
		this.setBaseUrl(baseUrl);
	}

	setBaseUrl = (url: string) => {
		if (url.endsWith("/")) {
			url = url.substr(0, url.length - 1);
		}
		this.baseUrl = url;
	};

	addParam = (key: string, value: string | number) => {
		this.params.push(`${key}=${value}`);
	};

	toString = (): string => {
		if (this.params.length > 0) {
			return [this.baseUrl, "?", this.params.join("&")].join("");
		}

		return this.baseUrl;
	};
}
