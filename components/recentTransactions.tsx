import { Transaction } from "@/types/transaction";
import TransactionRow from "./transactionRow";

const RecentTransactions = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3>Recent Transactions</h3>
        <a href="" className="text-[#ed017f]">
          View all
        </a>
      </div>
      <div className="flex flex-col gap-1 p-1 border-[1.5px] border-[#ed017f] rounded bg-white">
        {transactions.map((transaction) => (
          <TransactionRow transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
