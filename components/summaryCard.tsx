type Props = { value: number; text: string; symbol?: boolean };

const SummaryCard = ({ value, text, symbol }: Props) => {
  return (
    <div className="col-span-1 flex flex-col align-middle justify-end border-[1.5px] border-[#ed017f] w-full h-20 rounded p-2 bg-white">
      <h2 className="font-bold text-2xl">
        {symbol && "₦"} {value.toLocaleString()}
      </h2>
      <p className="text-[#535D6C]">{text}</p>
    </div>
  );
};

export default SummaryCard;
