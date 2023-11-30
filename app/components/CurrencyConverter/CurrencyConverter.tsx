"use client";

import { useState } from "react";

import { IFormData } from "../../types/IFormData";

import CurrencyForm from "../../components/CurrencyForm";
import { Equal } from "lucide-react";

function CurrencyConverter() {
  const [leftForm, setLeftForm] = useState<IFormData>({ currency: "" });
  const [rightForm, setRightForm] = useState<IFormData>({ currency: "" });

  const handleLeftFormSubmit = (data: IFormData) => {
    setLeftForm(data);

    if (!rightForm.currency || !leftForm.currency || !leftForm.amount) return;

    const rate = 30;

    const newAmount = leftForm.amount * rate;

    setRightForm({
      currency: rightForm.currency,
      amount: newAmount,
    });
  };

  const handleRightFormSubmit = (data: IFormData) => {
    setRightForm(data);

    if (!leftForm.currency || !rightForm.currency || !rightForm.amount) return;

    const rate = 30;

    const newAmount = rightForm.amount * rate;

    setLeftForm({
      currency: leftForm.currency,
      amount: newAmount,
    });
  };

  return (
    <section className="flex items-center gap-2">
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
