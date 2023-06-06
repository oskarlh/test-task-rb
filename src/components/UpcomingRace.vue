<script setup lang="ts">
	import { computed } from "vue";

	import { buildSilkUrl } from "../assets/silkUrls";
	import { useTimeUntilRace } from "../composables/useTimeUntilRace";
	import { Race } from "../types";
	import FlagIcon from "./FlagIcon.vue";
	import RaceTypeIcon from "./RaceTypeIcon.vue";

	const props = defineProps<{
		race: Race;
	}>();

	const timeUntilRace = useTimeUntilRace(() => props.race);

	const infoLineText = computed(() => {
		const race = props.race;
		if (!race) {
			return;
		}

		const distance = new Intl.NumberFormat(undefined, {
			style: "unit",
			unit: "meter",
		}).format(race.distance);

		const purse = new Intl.NumberFormat(undefined, {
			currency: race.purse.currency,
			currencyDisplay: "code",
			style: "currency",
		}).format(race.purse.amount);

		return `${race.num_runners} runners | ${distance} | ${purse}`;
	});

	const betUrl = computed(
		() =>
			`http://www.racebets.com/bet/${encodeURIComponent(props.race.id_race)}`
	);
</script>

<template>
	<div class="nextRace">
		<div class="titleLine">
			<h3 class="title">
				<a class="titleLink" :href="betUrl">
					<FlagIcon class="flag" :country-code="race.event.country" />
					{{ race.event.title }}
				</a>
			</h3>
			<span class="time">{{ timeUntilRace }}</span>
		</div>
		<hr class="divider" />
		<div class="infoLine">
			{{ infoLineText }}
			<RaceTypeIcon class="raceIcon" :race-type="race.race_type" />
		</div>
		<ol class="runners">
			<li v-for="runner in race.runners" :key="runner.id_runner" class="runner">
				<a class="runnerNameLink" :href="betUrl">
					<img
						v-if="runner.silk"
						class="silk"
						:src="buildSilkUrl(runner.silk)"
					/>
					<span class="runnerName">{{ runner.name }}</span>
				</a>
				<a class="oddsButtonLink" :href="betUrl">
					<button class="oddsButton">{{ runner.odds }}</button>
				</a>
			</li>
		</ol>
	</div>
</template>

<style scoped>
	.nextRace {
		background: #333;
		border: 3px solid #333;
		border-radius: 3px;
		color: #fff;
		display: block;
		font-size: 11px;
		width: 238px;
	}
	.title {
		font-weight: bold;
		font-size: 1em;
		display: inline-block;
		margin: 0;
		flex: 1;
	}
	.flag {
		vertical-align: middle;
		margin-right: 1ch;
	}
	.time {
		font-weight: bold;
		display: inline-block;
		height: 100%;
	}
	.titleLine {
		display: flex;
		padding: 8px 5px 5px 5px;
	}
	.divider {
		background: #666;
		height: 1px;
		margin: 8px 5px 0 5px;
		border: none;
	}
	.infoLine {
		padding: 8px 6px 8px 12px;
	}
	.raceIcon {
		float: right;
	}
	.runners {
		background: white;
		color: #444;
		display: block;
		margin: 2px;
		padding: 0;
	}
	.runner {
		display: flex;
		flex-direction: row;
		padding: 5px 8px;
		min-height: 32px;
		align-items: center;
	}
	.runner:not(:last-child) {
		border-bottom: 1px solid #d9d9d9;
	}
	.titleLink,
	.runnerNameLink {
		color: unset;
		text-decoration: unset;
		vertical-align: middle;
	}
	.silk {
		vertical-align: middle;
		height: 20px;
	}
	.runnerName {
		margin-left: 1ch;
		vertical-align: middle;
	}
	.oddsButtonLink {
		margin-left: auto;
	}
	.oddsButton {
		background: linear-gradient(hsl(43, 100%, 69%), hsl(35, 93%, 51%));
		border: 1px solid #f69610;
		border-radius: 3px;
		box-sizing: border-box;
		color: #444;
		cursor: pointer;
		margin: 0;
		min-width: 36px;
		padding: 2px 4px;
	}
	.oddsButton:hover {
		background: linear-gradient(hsl(43, 100%, 64%), hsl(35, 93%, 46%));
	}
</style>
