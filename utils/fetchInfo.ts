import { Info } from "../typings";

export const fetchInfo = async () => {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL;
  const Url = "/api/getInfo";

  const res = await fetch(new URL(Url, baseURL));

  const data = await res.json();
  const info: Info[] = data.info;

  return info;
};
