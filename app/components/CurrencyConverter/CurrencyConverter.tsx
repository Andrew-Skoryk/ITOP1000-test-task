"use client";

import { useState } from "react";

import { IFormData } from "../../types/IFormData";

import CurrencyForm from "../../components/CurrencyForm";
import { Equal } from "lucide-react";

function CurrencyConverter() {
  const [leftForm, SetLeftForm] = useState<IFormData>({ currency: "" });
  const [rightForm, SetRightForm] = useState<IFormData>({ currency: "" });

  const handleLeftFormSubmit = (data: IFormData) => {
    SetLeftForm(data);
    console.log(data);
  };

  const handleRightFormSubmit = (data: IFormData) => {
      SetRightForm(data);
      console.log(data);
    };

  return (
    <section className="flex items-center gap-2">
      <CurrencyForm onSubmit={handleLeftFormSubmit} />

      <Equal className="self-end pb-1" size={45} color="#6b21a8" />

      <CurrencyForm onSubmit={handleRightFormSubmit} reverse />
    </section>
  );
}

export default CurrencyConverter;
