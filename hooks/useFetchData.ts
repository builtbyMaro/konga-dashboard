import { Data } from "@/types/transaction";
import { useState, useEffect } from "react";

const useFetchData = () => {
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
    setLoading(true);
    setError("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, retryFetch, data };
};

export default useFetchData;
