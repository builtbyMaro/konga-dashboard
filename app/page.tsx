"use client";
import { Data, Transaction } from "@/types/transaction";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loadingDashboard";
import WelcomeCard from "@/components/welcomeCard";
import ErrorPage from "@/components/error";
import SummaryCard from "@/components/summaryCard";
import Chart from "@/components/chart";
import RecentTransactions from "@/components/recentTransactions";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<Data>();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/transactions");

      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}`) as any;
        error.status = response.status;
        throw error;
      }

      const data: Data = await response.json();

      setData(data);
    } catch (error: any) {
      if (error.status) {
        setError("Something went wrong");
        console.error(error.status);
      } else {
        setError(
          "Please check your connection and try again or Try refreshing your browser",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const retryFetch = () => {
    setError("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorPage error={error} retry={retryFetch} />;
  }

  let totalExpenses = 0;
  let totalIncome = 0;
  let numOfTransactions = 0;

  if (data) {
    data.transactions.map((transaction) => {
      if (transaction.type == "income") {
        totalIncome += transaction.amount;
      }

      if (transaction.type == "expense") {
        totalExpenses += transaction.amount;
      }
    });

    numOfTransactions = data.transactions.length;
  }

  ("#ed017f");
  ("#4285f5");
  ("#ff0000");

  return (
    <main>
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 p-4 gap-4">
        <WelcomeCard balance={data?.accountBalance} />
        <SummaryCard value={totalIncome} text="Total Income" symbol={true} />
        <SummaryCard
          value={totalExpenses}
          text="Total Expenses"
          symbol={true}
        />
        <SummaryCard value={numOfTransactions} text="No. of Transactions" />
      </section>
      <section className="p-4">
        <RecentTransactions transactions={data!.transactions.slice(0, 10)} />
      </section>
      <section>
        <Chart income={totalIncome} expense={totalExpenses} />
      </section>
    </main>
  );
};

export default Home;
