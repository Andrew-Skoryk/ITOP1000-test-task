"use client";

import { useState } from "react";

import { IFormData } from "../../types/IFormData";

import CurrencyForm from "../../components/CurrencyForm";
import { Equal } from "lucide-react";
import { IConversionRates } from "@/app/types/IConversionRates";
import { getConversionRate } from "@/app/lib/getConversionRate";

type Props = {
  conversionRates: IConversionRates;
};

function CurrencyConverter({ conversionRates }: Props) {
  const [leftForm, setLeftForm] = useState<IFormData>({ currency: "" });
  const [rightForm, setRightForm] = useState<IFormData>({ currency: "" });

  const handleLeftFormSubmit = (data: IFormData) => {
    setLeftForm(data);

    if (!rightForm.currency || !data.currency || !data.amount) return;

    const conversionRate = getConversionRate(
      data.currency,
      rightForm.currency,
      conversionRates
    );

    const newAmount = data.amount * conversionRate;

    setRightForm((prev) => ({
      ...prev,
      amount: newAmount,
    }));
  };

  const handleRightFormSubmit = (data: IFormData) => {
    setRightForm(data);

    if (!leftForm.currency || !data.currency || !data.amount) return;

    const conversionRate = getConversionRate(
      data.currency,
      leftForm.currency,
      conversionRates
    );

    const newAmount = data.amount * conversionRate;

    setLeftForm((prev) => ({
      ...prev,
      amount: newAmount,
    }));
  };

  return (
    <section className="flex items-center max-w-3xl gap-2 ">
      <CurrencyForm onSubmit={handleLeftFormSubmit} value={leftForm.amount} />

      <Equal className="self-end pb-1" size={45} color="#6b21a8" />

      <CurrencyForm
        onSubmit={handleRightFormSubmit}
        value={rightForm.amount}
        reverse
      />
    </section>
  );
}

export default CurrencyConverter;
