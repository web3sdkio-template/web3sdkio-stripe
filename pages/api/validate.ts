import type { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../../auth.config";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const web3sdkioUser = await getUser(req);

    if (web3sdkioUser?.address) {
      return res.status(200).json({
        message: `You are signed in as ${web3sdkioUser.address}`,
      });
    }
    return res.status(401).json({ message: "Account not validated" });
  }
  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
