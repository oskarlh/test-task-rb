export function buildSilkUrl(filename: string) {
	// https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
	return new URL(`../../public/silks/${filename}`, import.meta.url).href;
}
