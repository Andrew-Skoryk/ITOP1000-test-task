"use client";

import { Select, SelectItem, Input } from "@nextui-org/react";
import { currenciesList } from "../../config/currenciesList";
import { cn } from "../../lib/utils";

type Props = {
  reverse?: boolean;
}

function CurrencyForm({ reverse }: Props) {
  return (
    <form className={cn("flex gap-1.5", {
      "flex-row-reverse": reverse
    })}>
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
