import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	console.log("Vercel Cron Job runtime log");

	return res.status(200).send("Cron Job Schedule for vercel cron");
}
