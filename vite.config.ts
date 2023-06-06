import vue from "@vitejs/plugin-vue";
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
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolvePath(__dirname, "src"),
		},
	},
	root: resolvePath(__dirname, command === "build" ? "." : "src"), // So addresses don't start with /src when testing
	test: {
		cache: {
			// Without the dir setting, Vitest writes to the src folder
			dir: resolvePath(__dirname, "node_modules/.vitest"),
		},
		environment: "happy-dom",
		globals: true,
	},
}));
