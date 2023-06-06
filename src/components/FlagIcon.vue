<script setup lang="ts">
	import { computed } from "vue";

	import { flagIconForCountryCode } from "../assets/flags";
	const props = defineProps<{
		countryCode?: string;
	}>();

	const src = computed(() => flagIconForCountryCode(props.countryCode));
</script>

<template>
	<img v-if="src" :alt="countryCode" :src="src" />
</template>

<style scoped></style>
