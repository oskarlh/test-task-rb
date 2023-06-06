import { RaceType } from "./types";

// In a real app I would use a translation system such as fluent-vue or vue-i18n
// instead of these constants

export const raceTypeLabels = {
	D: "Dog",
	G: "Gallop",
	J: "Jumping",
	T: "Trot",
} satisfies Record<RaceType, string>;

export const raceIsDueLabel = "Due";
