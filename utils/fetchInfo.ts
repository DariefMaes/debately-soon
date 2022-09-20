import { Info } from "../typings";

export const fetchInfo = async () => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
  const res = await fetch(`${process.env.VERCEL_URL}/api/getInfo`);

  const data = await res.json();
  const info: Info[] = data.info;

  return info;
};
