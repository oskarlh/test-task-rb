import { computed, MaybeRefOrGetter, Ref, ref, toValue } from "vue";

import { compareMoney } from "../currency";
import { NextRaces, Race, RaceType } from "../types";

// Loads upcoming races and returns the one with the highest purse
export function useNextRace(
	enabledRaceTypes: MaybeRefOrGetter<RaceType[]>
): Ref<Race | undefined> {
	// If there was a real API we would need error handling here,
	// and a way to keep the data up-to-date

	const nextRaces = ref<Race[]>();
	const load = async () => {
		const content = (await import("../data/next_races.json"))
			.default as NextRaces;
		nextRaces.value = content.data.races;
	};
	load();

	return computed(() => {
		const types = new Set(toValue(enabledRaceTypes));
		return nextRaces.value
			?.filter((race) => types.has(race.race_type)) // Only enabled race types
			.sort((a, b) => -compareMoney(a.purse, b.purse))[0]; // Highest purse
	});
}
