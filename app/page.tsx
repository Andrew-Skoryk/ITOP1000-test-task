import { fetchExchangeRate } from "./lib/fetchExchangeRate";

import CurrencyConverter from "./components/CurrencyConverter";

async function Home() {
  const { conversion_rates } = await fetchExchangeRate();

  return (
    <main className="container flex flex-col items-center gap-12 p-20 mx-auto grow">
      <h2 className="text-5xl font-bold tracking-wider text-purple-800">
        Конвертер валют
      </h2>

      <CurrencyConverter conversionRates={conversion_rates} />
    </main>
  );
}

export default Home;
