import { IConversionRates } from "../types/IConversionRates";

export function getConversionRate(fromCurrency: string, toCurrency: string, conversionRates: IConversionRates) {
  const rateFromBase = conversionRates[fromCurrency];
  const rateToBase = conversionRates[toCurrency];

  if (!rateFromBase || !rateToBase) {
    console.error("Unknown exchange rate");
    return 0;
  }

  return rateToBase / rateFromBase;
}
