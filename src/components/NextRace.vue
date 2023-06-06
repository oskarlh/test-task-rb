<script setup lang="ts">
	import { useNextRace } from "../composables/useNextRace";
	import { RaceType } from "../types";
	import UpcomingRace from "./UpcomingRace.vue";

	const props = defineProps<{
		enabledRaceTypes: RaceType[];
	}>();

	const nextRace = useNextRace(() => props.enabledRaceTypes);
</script>

<template>
	<UpcomingRace v-if="nextRace" :race="nextRace" />
</template>

<style scoped></style>
