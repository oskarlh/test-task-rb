import { Money } from "./currency";

export interface RaceEvent {
	country: string; // 2-letter country code
	title: string;
}

export enum RaceType {
	Dogs = "D",
	Gallop = "G",
	Jumping = "J",
	Trot = "T",
}

export const allRaceTypes = Object.values(RaceType);

export interface Runner {
	id_runner: number;

	name: string;
	odds: number;
	silk: string; // Filename. Empty string = no silk
}

export interface Race {
	id_race: number;

	distance: number; // In meters
	event: RaceEvent;
	num_runners: number; // Number of runners starting
	post_time: number; // Unix timestamp, full seconds
	purse: Money; // Prize money
	race_type: RaceType;
	runners: Runner[]; // Top runners
}

export interface NextRaces {
	data: {
		races: Race[];
	};
	status: "success";
}
