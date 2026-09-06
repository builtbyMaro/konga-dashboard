import { Transaction } from "@/types/transaction";

const TransactionRow = ({ transaction }: { transaction: Transaction }) => {
  return (
    <div className="flex items-center text-[0.8em] p-0.5 border-b last:border-b-0 border-[#c5cbd3]">
      <span className="w-[40%] font-bold sm:w-[30%]">
        <p>{transaction.description}</p>
      </span>
      <span className="flex justify-end w-[30%] sm:w-[25%]">
        <p
          className={`${transaction.type === "income" ? "text-[#4285f5]" : "text-[#ef4444]"}`}
        >
          {transaction.type === "income" ? "+ " : "- "}
          {transaction.amount.toLocaleString()}
        </p>
      </span>
      <span className="w-[30%] hidden p-0.5 sm:flex justify-end sm:w-[20%]">
        <p className="rounded-[8px] p-1 bg-[#505050] text-white">
          {transaction.category}
        </p>
      </span>
      <span className="flex justify-end w-[30%] sm:w-[25%]">
        <p>{transaction.date}</p>
      </span>
    </div>
  );
};

export default TransactionRow;
