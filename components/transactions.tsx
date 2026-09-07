import { Transaction } from "@/types/transaction";
import TransactionRow from "./transactionRow";

const Transactions = ({
  transactions,
}: {
  transactions: Transaction[] | undefined;
}) => {
  return (
    <div className="p-1">
      <div className="flex items-center text-[0.8em] p-0.5 border-b last:border-b-0 border-[#c5cbd3]">
        <span className="w-[40%] font-bold sm:w-[30%]">
          <p className="font-bold text-[1.3em]">Description</p>
        </span>
        <span className="flex justify-end w-[30%] sm:w-[25%]">
          <p className="font-bold text-[1.3em]">Amount</p>
        </span>
        <span className="w-[30%] hidden p-0.5 sm:flex justify-end sm:w-[20%]">
          <p className="font-bold text-[1.3em]">Category</p>
        </span>
        <span className="flex justify-end w-[30%] sm:w-[25%]">
          <p className="font-bold text-[1.3em]">Date</p>
        </span>
      </div>
      <div className="flex flex-col gap-1 p-1 border-[1.5px] border-[#ed017f] rounded bg-white">
        {transactions?.map((transaction) => (
          <TransactionRow transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
