import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Info } from "../../typings";

const query = groq`*[_type == "info"]`;

type data = {
  info: Info[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<data>
) {
  const info: Info[] = await sanityClient.fetch(query);

  res.status(200).json({ info });
}
