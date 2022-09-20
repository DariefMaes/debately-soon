import { Social } from "../typings";

export const fetchSocials = async () => {
  const dev = process.env.NODE_ENV !== "production";

  const server = dev
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_VERCEL_URL;

  // const res = await fetch(`${server}/api/getSocials`);

  // const data = await res.json();
  // const socials: Social[] = data.socials;

  // return socials;
};
