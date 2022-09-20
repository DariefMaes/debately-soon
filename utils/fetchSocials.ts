import { Social } from "../typings";

export const fetchSocials = async () => {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL;
  const Url = "/api/getSocials";

  const res = await fetch(new URL(Url, baseURL));

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
