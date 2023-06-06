import { mount } from "@vue/test-utils";

import { Race, RaceType } from "../types";
import UpcomingRace from "./UpcomingRace.vue";

const silkFilename = "1.png";
const runnerName = "Horsey McHorseface";

const exampleRace: Race = {
	id_race: 1647215,

	distance: 1780,
	event: {
		title: "Redcliffe",
		country: "IE",
	},
	num_runners: 9,
	post_time: 1439970900,
	purse: {
		amount: 250,
		currency: "GBP",
	},
	race_type: RaceType.Trot,
	runners: [
		{
			id_runner: 15717421,
			name: "Triumphant Knight",
			odds: 4.7,
			silk: silkFilename,
		},
		{
			id_runner: 15717423,
			name: "My Aliyana",
			odds: 3,
			silk: "",
		},
		{
			id_runner: 15717425,
			name: runnerName,
			odds: 4,
			silk: "",
		},
	],
};

describe("UpcomingRace", () => {
	it("renders runner names", () => {
		const mounted = mount(UpcomingRace, {
			props: {
				race: exampleRace,
			},
		});

		expect(mounted.text()).toContain(runnerName);
	});

	it("renders silks", () => {
		const mounted = mount(UpcomingRace, {
			props: {
				race: exampleRace,
			},
		});

		expect(mounted.find("img[src~='" + silkFilename + "']")).toBeTruthy();
	});
});
