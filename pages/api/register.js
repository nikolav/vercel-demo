// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dir } from "../../utils";

const handler = (req, res) => {
  return res.status(200).json({ status: 200, data: req.body });
};

export default handler;
