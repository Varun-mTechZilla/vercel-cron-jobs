import { NextApiRequest, NextApiResponse } from "next";

const storeSiteActivities = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	console.log("Vercel Cron Job runtime log");

	return res
		.status(200)
		.json({ status: true, message: "Cron Job Schedule for vercel cron" });
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	switch (req.method) {
		case "GET":
			return await storeSiteActivities(req, res);

		default:
			return res
				.status(404)
				.json({ status: false, message: "Path not found" });
	}
}
