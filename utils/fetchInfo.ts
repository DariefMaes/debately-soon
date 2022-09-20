import { Info } from "../typings";

export const fetchInfo = async () => {
  const res = await fetch("/api/getInfo");

  const data = await res.json();
  const info: Info[] = data.info;

  return info;
};
