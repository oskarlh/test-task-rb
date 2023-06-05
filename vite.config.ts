import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve as resolvePath } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
	build: {
		outDir: resolvePath(__dirname, "./dist"),
		rollupOptions: {
			input: {
				"src/index.html": resolvePath(__dirname, "src/index.html"),
			},
		},
		sourcemap: true,
	},
	envDir: resolvePath(__dirname),
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			"@": resolvePath(__dirname, "src"),
		},
	},
	root: resolvePath(__dirname, command === "build" ? "." : "src"), // So addresses don't start with /src when testing
	server: {
		port: 3003,
	},
	test: {
		cache: {
			// Without the dir setting, Vitest writes to the src folder
			dir: resolvePath(__dirname, "node_modules/.vitest"),
		},
		environment: "happy-dom",
		globals: true,
	},
}));
