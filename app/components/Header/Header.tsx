import { fetchExchangeRate } from "@/app/lib/fetchExchangeRate";

import HeaderCurrencyBlock from "../HeaderCurrencyBlock";

async function Header() {
  const { conversion_rates } = await fetchExchangeRate();

  const usdRate = (1 / conversion_rates["USD"]).toFixed(4);
  const eurRate = (1 / conversion_rates["EUR"]).toFixed(4);

  return (
    <div className="w-full bg-purple-600 text-slate-50">
      <div className="container relative flex p-8 mx-auto">
        <h1 className="text-3xl font-bold tracking-wide">Курси валют</h1>

        <div className="absolute flex self-end text-lg font-medium -translate-x-1/2 gap-14 left-1/2">
          <HeaderCurrencyBlock rate={usdRate} currency={"USD"} />

          <HeaderCurrencyBlock rate={eurRate} currency={"EUR"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
