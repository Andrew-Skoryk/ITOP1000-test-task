"use client";

import { Select, SelectItem, Input } from "@nextui-org/react";
import { currenciesList } from "../../config/currenciesList";

function CurrencyForm() {
  return (
    <form className="flex gap-1.5">
      <Select
        label="Валюта"
        labelPlacement="outside"
        color="secondary"
        size="lg"
        radius="md"
      >
        {currenciesList.map((currency) => (
          <SelectItem
            key={currency}
            variant="flat"
            color="secondary"
            className="text-center"
          >
            {currency}
          </SelectItem>
        ))}
      </Select>

      <Input
        type="number"
        label="Кількість"
        labelPlacement="outside"
        color="secondary"
        size="lg"
        radius="md"
        className="self-end"
      />
    </form>
  );
}

export default CurrencyForm;
