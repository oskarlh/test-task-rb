import gb from "./flags/gb.png";
import ie from "./flags/ie.png";

const icons = {
	GB: gb,
	IE: ie,
};

export function flagIconForCountryCode(
	countryCode: string | undefined
): string | undefined {
	if (countryCode && countryCode in icons) {
		return icons[countryCode as keyof typeof icons];
	}
}
