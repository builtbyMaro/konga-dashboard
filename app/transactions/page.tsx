"use client";
import { useState, useEffect, type ChangeEvent } from "react";
import useFetchData from "@/hooks/useFetchData";
import Transactions from "@/components/transactions";
import LoadingScreen from "@/components/loadingDashboard";
import ErrorPage from "@/components/error";

const TransactionsPage = () => {
  const { loading, error, retryFetch, data } = useFetchData();
  const [filterMode, setFilterMode] = useState<"all" | "income" | "expense">(
    "all",
  );

  const transactions = data?.transactions.filter((transaction) => {
    if (filterMode === "all") return true;

    return transaction.type === filterMode;
  });

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorPage error={error} retry={retryFetch} />;
  }

  return (
    <main>
      <section className="flex flex-col gap-3 p-4 sm:flex-row sm:justify-between">
        <h2 className="font-bold text-2xl">Transactions</h2>
        <select
          value={filterMode}
          onChange={(e) =>
            setFilterMode(e.target.value as "all" | "income" | "expense")
          }
          className="rounded border-[1.5px] border-[#ed017f] px-1 py-2 w-3xs"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </section>
      <section className="p-4">
        <Transactions transactions={transactions} />
      </section>
    </main>
  );
};

export default TransactionsPage;
