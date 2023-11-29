"use client";

import { useEffect, useState } from "react";

import { getExchangeRate } from "@/app/lib/getExchangeRate";
import HeaderCurrencyBlock from "../HeaderCurrencyBlock";

function Header() {
  const [usdRate, setUsdRate] = useState<number | null>(null);
  const [eurRate, setEurRate] = useState<number | null>(null);

  useEffect(() => {
    getExchangeRate("USD", "UAH").then((data) => {
      if (!data.error) {
        setUsdRate(data.conversion_rate);
      }
    });

    getExchangeRate("EUR", "UAH").then((data) => {
      if (!data.error) {
        setEurRate(data.conversion_rate);
      }
    });
  }, []);

  return (
    <div className="w-full bg-violet-600 text-slate-50">
      <div className="container flex p-8">
        <h1 className="text-3xl font-bold">Курси валют</h1>

        <div className="flex self-end mx-auto text-lg font-medium gap-14">
          <HeaderCurrencyBlock rate={usdRate} currency={"USD"} />

          <HeaderCurrencyBlock rate={eurRate} currency={"EUR"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
