import { Social } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch('https://debately-soon-5wljr35tr-dariefmaes.vercel.app');

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
