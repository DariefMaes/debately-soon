import { Info } from "../typings";

export const fetchInfo = async () => {

  const res = await fetch('https://debately-soon-5wljr35tr-dariefmaes.vercel.app');

  const data = await res.json();
  const info: Info[] = data.info;

  return info;
};
