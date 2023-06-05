import { mount } from "@vue/test-utils";

import App from "./App.vue";

describe("App", () => {
	it("renders without throwing", () => {
		expect(() => mount(App)).not.toThrow();
	});
});
