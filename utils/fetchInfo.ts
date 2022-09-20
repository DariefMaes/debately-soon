import { Info } from "../typings";

export const fetchInfo = async () => {
  const dev = process.env.NODE_ENV !== "production";

  const server = dev
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_VERCEL_URL;

  const res = await fetch(`${server}/api/getInfo`);

  const data = await res.json();
  const info: Info[] = data.info;

  return info;
};
