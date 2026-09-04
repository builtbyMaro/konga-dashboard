export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: string;
  category: string;
  date: string;
};

export type Data = {
  accountBalance: number;
  transactions: Transaction[];
};
