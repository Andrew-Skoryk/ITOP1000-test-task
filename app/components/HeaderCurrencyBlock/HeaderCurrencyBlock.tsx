"use client";

import { Spinner } from "@nextui-org/react";

type Props = {
  rate: number | null;
  currency: string;
};

function HeaderCurrencyBlock({ rate, currency }: Props) {
  if (!rate) return <Spinner color="white" />;

  return (
    <p>
      {currency} до UAH: {rate}
    </p>
  );
}

export default HeaderCurrencyBlock;
