import { RaceType } from "./types";

export const enabledRaceTypesStorageKey = "enabled-race-types";

export const defaultEnabledRaceTypes: RaceType[] = [
	RaceType.Gallop,
	RaceType.Jumping,
	RaceType.Trot,
];
