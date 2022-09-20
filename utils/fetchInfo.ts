import { Info } from "../typings";

export const fetchInfo = async () => {
  const dev = process.env.NODE_ENV !== "production";
  
  console.log(process.env.NODE_ENV)

  const server = dev
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_VERCEL_URL;

  const res = await fetch(`https://${server}/api/getInfo`);
  
   
  console.log('test',res)

  const data = await res.json();
  const info: Info[] = data.info;

  return info;
};
