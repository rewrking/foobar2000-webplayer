const publicUrl: string = process.env.PUBLIC_URL ?? "";

export function mediaUrl(path: string) {
	return `${publicUrl}/media/${path}`;
}
