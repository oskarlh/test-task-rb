import { RaceType } from "../types";
import d from "./race-types/race-type-D.svg";
import g from "./race-types/race-type-G.svg";
import j from "./race-types/race-type-J.svg";
import t from "./race-types/race-type-T.svg";

const icons: Record<RaceType, string> = {
	D: d,
	G: g,
	J: j,
	T: t,
};

export function iconForRaceType(
	raceType: RaceType | undefined
): string | undefined {
	return raceType && icons[raceType];
}
