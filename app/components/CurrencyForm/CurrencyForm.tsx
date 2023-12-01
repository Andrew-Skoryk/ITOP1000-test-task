"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import debounce from "lodash/debounce";

import { cn } from "../../lib/utils";
import { IFormData } from "../../types/IFormData";
import { currenciesList } from "../../config/currenciesList";
import { OverlayPlacement } from "../../types/OverlayPlacement";

import { Select, SelectItem, Input, Tooltip } from "@nextui-org/react";

type Props = {
  onSubmit: (data: IFormData) => void;
  value?: number;
  reverse?: boolean;
};

function CurrencyForm({ reverse, onSubmit, value }: Props) {
  const [localAmount, setLocalAmount] = useState(value);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IFormData>();

  useEffect(() => {
    setValue("amount", value);
    setLocalAmount(value);
  }, [value, setValue]);

  const debouncedSubmit = useMemo(
    () =>
      debounce((formData: IFormData) => {
        handleSubmit(() => onSubmit(formData))();
      }, 400),
    [handleSubmit, onSubmit]
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as "currency" | "amount";
    const value = e.target.value;

    if (name === "amount") {
      setLocalAmount(Number(value));
    }

    setValue(name, value);
    debouncedSubmit({ ...watch(), [name]: value });
  };

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
          onChange={handleInputChange}
          label="Валюта"
          labelPlacement="outside"
          color="secondary"
          size="lg"
          radius="md"
          className="w-52"
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
        {...register("amount")}
        value={localAmount?.toString()}
        onChange={handleInputChange}
        type="number"
        label="Кількість"
        labelPlacement="outside"
        color="secondary"
        size="lg"
        radius="md"
      />

      <button type="submit" />
    </form>
  );
}

export default CurrencyForm;
