<script setup lang="ts">
	import { iconForRaceType } from "../assets/raceTypeIcons";
	import { raceTypeLabels } from "../labels";
	import { RaceType } from "../types";
	const props = defineProps<{
		raceType?: RaceType;
	}>();
</script>

<template>
	<img
		v-if="raceType"
		:alt="raceTypeLabels[raceType]"
		:src="iconForRaceType(props.raceType)"
		:title="raceTypeLabels[raceType]"
	/>
</template>

<style scoped></style>
