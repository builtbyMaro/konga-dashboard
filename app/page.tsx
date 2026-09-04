"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loadingDashboard";
import WelcomeCard from "@/components/welcomeCard";
import { Data } from "@/types/transaction";

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

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        <button>Retry</button>
      </div>
    );
  }

  return (
    <main>
      <WelcomeCard balance={data?.accountBalance} />
      <h2>Summary Cards</h2>
      <h2>Chart</h2>
      <h2>Recent Transactions</h2>
    </main>
  );
};

export default Home;
