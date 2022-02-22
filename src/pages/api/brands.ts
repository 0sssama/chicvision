import { NextApiRequest, NextApiResponse } from "next";
import brands from "@/data/brands.json";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.status(200).json(brands);
};
