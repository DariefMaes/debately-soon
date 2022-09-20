import { Info } from "../typings";

export const fetchInfo = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/getInfo`);

  const data = await res.json();
  const info: Info[] = data.info;

  return info;
};
