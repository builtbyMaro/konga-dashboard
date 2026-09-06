"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loadingDashboard";
import WelcomeCard from "@/components/welcomeCard";
import ErrorPage from "@/components/error";
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
