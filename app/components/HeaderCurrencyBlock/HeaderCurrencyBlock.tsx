type Props = {
  rate: string;
  currency: string;
};

function HeaderCurrencyBlock({ rate, currency }: Props) {
  return (
    <p>
      {currency}: {rate}
    </p>
  );
}

export default HeaderCurrencyBlock;
