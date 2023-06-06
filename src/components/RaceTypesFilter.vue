<script setup lang="ts">
	import { raceTypeLabels } from "../labels";
	import { allRaceTypes, RaceType } from "../types";

	const props = defineProps<{
		modelValue: RaceType[];
	}>();

	const emit = defineEmits<{
		"update:modelValue": [newModelValue: RaceType[]];
	}>();

	function isEnabled(raceType: RaceType) {
		return props.modelValue.includes(raceType);
	}

	function toggle(raceType: RaceType) {
		let newModelValue: RaceType[];
		const disable = isEnabled(raceType);
		if (disable) {
			newModelValue = props.modelValue.filter((rt) => rt !== raceType);
		} else {
			newModelValue = [...props.modelValue, raceType];
		}
		emit("update:modelValue", newModelValue);
	}
</script>

<template>
	<div class="container">
		Filter:
		<template v-for="raceType in allRaceTypes" :key="raceType">
			<p>
				<label>
					<input
						:checked="isEnabled(raceType)"
						type="checkbox"
						@change="toggle(raceType)"
					/>
					{{ raceTypeLabels[raceType] }}
				</label>
			</p>
		</template>
	</div>
</template>

<style scoped>
	.container {
		border: 1px solid #777;
		display: inline-block;
		padding: 10px;
	}
</style>
