type Props = { value: number; text: string; symbol?: boolean };

const SummaryCard = ({ value, text, symbol }: Props) => {
  return (
    <div>
      <h2>
        {symbol && "₦"}
        {value.toLocaleString()}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default SummaryCard;
