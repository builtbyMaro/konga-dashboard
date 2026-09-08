"use client";
import { Data } from "@/types/transaction";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<Data> => {
  const response = await fetch("/api/transactions");

  if (!response.ok) {
    const error = new Error(`HTTP ${response.status}`) as Error & {
      status: number;
    };

    error.status = response.status;

    throw error;
  }

  return response.json();
};

const useFetchData = () => {
  const { data, isLoading, error, refetch } = useQuery<
    Data,
    Error & { status?: number }
  >({
    queryKey: ["transactions"],
    queryFn: fetchData,
    refetchInterval: 15 * 60 * 1000,
  });

  let errorMessage = "";

  if (error) {
    if (error.status) {
      errorMessage = "Something went wrong";
      console.error(error.status);
    } else {
      errorMessage =
        "Please check your connection and try again or Try refreshing your browser";
    }
  }

  return {
    loading: isLoading,
    error: errorMessage,
    retryFetch: refetch,
    data,
  };
};

export default useFetchData;
