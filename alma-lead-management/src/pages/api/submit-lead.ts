import type { NextApiRequest, NextApiResponse } from "next";
import { LeadEntry } from "@/pages/api/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const data = req.body;
    const now = new Date().toLocaleString();
    const randomCountries = [
      "USA",
      "Canada",
      "Mexico",
      "UK",
      "Germany",
      "India",
    ];
    const country =
      randomCountries[Math.floor(Math.random() * randomCountries.length)];

    const entry: LeadEntry & { formData: any } = {
      name:
        `${data.firstName || ""} ${data.lastName || ""}`.trim() || "Unknown",
      submitted: now,
      status: "Pending",
      country,
      formData: data,
    };

    try {
      console.log("Lead Submitted:", data);
      res
        .status(200)
        .json({
          message: "Lead submitted successfully.",
          status: 200,
          data: entry,
        });
    } catch (error) {
      console.error("Error submitting lead:", error);
      res.status(500).json({ error: "Internal server error", status: 500 });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
