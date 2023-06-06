import { useIntervalFn } from "@vueuse/shared";
import { MaybeRefOrGetter, Ref, ref, toRef, toValue, watch } from "vue";

import { raceIsDueLabel } from "../labels";
import { Race } from "../types";

// Generates a text like "8 minutes" or "Due"
export function useTimeUntilRace(race: MaybeRefOrGetter<Race>): Ref<string> {
	const timeUntilRace = ref<string>("");

	const update = () => {
		const then = toValue(race).post_time;

		const minutesRemaining = Math.ceil((then * 1_000 - Date.now()) / 60);
		if (minutesRemaining < 0) {
			timeUntilRace.value = raceIsDueLabel;
		} else {
			timeUntilRace.value = new Intl.NumberFormat(undefined, {
				style: "unit",
				unit: "minute",
				unitDisplay: "long",
			}).format(minutesRemaining);
		}
	};

	// Update when the race changes...
	watch(toRef(race), update, { immediate: true });

	// ... and every second
	useIntervalFn(() => update, 1_000);

	return timeUntilRace;
}
