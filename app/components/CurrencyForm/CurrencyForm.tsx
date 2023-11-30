"use client";

import { cn } from "../../lib/utils";
import { useForm } from "react-hook-form";

import { IFormData } from "../../types/IFormData";
import { currenciesList } from "../../config/currenciesList";

import { Select, SelectItem, Input, Tooltip } from "@nextui-org/react";

type Props = {
  reverse?: boolean;
  onSubmit: (data: IFormData) => void;
};

type OverlayPlacement =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";

function CurrencyForm({ reverse, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex gap-1.5 w-full", {
        "flex-row-reverse": reverse,
      })}
    >
      <Tooltip
        content={errors.currency?.message}
        isOpen={!!errors.currency}
        color="danger"
        showArrow
        placement={
          cn({
            left: !reverse,
            right: reverse,
          }) as OverlayPlacement
        }
      >
        <Select
          {...register("currency", { required: "Це поле обов'язкове" })}
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
      </Tooltip>

      <Input
        type="number"
        label="Кількість"
        labelPlacement="outside"
        color="secondary"
        size="lg"
        radius="md"
        className="self-end"
      />

      <button
        type="submit"
        className="text-center bg-purple-300 hover:bg-purple-500"
      >
        Від
      </button>
    </form>
  );
}

export default CurrencyForm;
