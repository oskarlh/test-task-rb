export type Currency = "EUR" | "GBP";

export interface Money {
	amount: number;
	currency: Currency;
}

// Relative to EUR
const conversionRates: Record<Currency, number> = {
	EUR: 1,
	GBP: 1.4,
};

export function toEuro({ amount, currency }: Money): number {
	return amount * conversionRates[currency];
}

export function compareMoney(a: Money, b: Money): number {
	return toEuro(a) - toEuro(b);
}
