// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from "../../sessions/get-session";
export default async function handler(req, res) {
  const session = await getSession(req, res);
  session.myData = req.body;
  console.log(req.body);

  res.status(200).json({ saved: "Data saved in session" });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
