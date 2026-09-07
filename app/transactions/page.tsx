"use client";
import { useState, useEffect } from "react";
import useFetchData from "@/hooks/useFetchData";

const Transactions = () => {
  const { loading, error, retryFetch, data } = useFetchData();

  return (
    <section>
      {data?.transactions.map((transaction) => (
        <h2 key={transaction.id}>{transaction.description}</h2>
      ))}
    </section>
  );
};

export default Transactions;
