// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from "../../sessions/get-session";
export default async function handler(req, res) {

  const session = await getSession(req, res);
  const data = JSON.parse(req.body)

  session.text = data.theText;
  session.person = data.person;

  res.status(200).json({ saved: "Data saved in session" });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
