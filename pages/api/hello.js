// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dir } from "../../utils";

const handler = (req, res) => {
  console.log(dir(res));

  return res.status(200).json({ name: "John Doe" });
};

export default handler;
