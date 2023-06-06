<script setup lang="ts">
	import { useLocalStorage } from "@vueuse/core";

	import {
		defaultEnabledRaceTypes,
		enabledRaceTypesStorageKey,
	} from "../constants";
	import { RaceType } from "../types";
	import NextRace from "./NextRace.vue";
	import RaceTypesFilter from "./RaceTypesFilter.vue";

	const enabledRaceTypes = useLocalStorage<RaceType[]>(
		enabledRaceTypesStorageKey,
		defaultEnabledRaceTypes
	);
</script>

<template>
	<div class="app">
		<RaceTypesFilter v-model="enabledRaceTypes" />
		<NextRace class="nextRace" :enabled-race-types="enabledRaceTypes" />
	</div>
</template>

<style scoped>
	.app {
		font-family: Tahoma, Geneva, Kalimati, sans-serif;
		padding: 20px;
	}
	.nextRace {
		margin: 20px;
	}
</style>
