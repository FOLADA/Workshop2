import $client from "../axios";

export default async function FetchCntr() {
  const res = await $client.get("/v3.1/all");
  return res.data
}