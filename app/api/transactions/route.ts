import { data } from "@/data/data";
import { Data } from "@/types/transaction";

export async function GET(request: Request) {
  const transactions: Data = data;

  return new Response(JSON.stringify(transactions), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
