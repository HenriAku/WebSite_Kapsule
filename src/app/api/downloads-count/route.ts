
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
	const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

	if (!url || !key) {
		return NextResponse.json(
			{ error: "Server configuration missing" },
			{ status: 500 }
		);
	}

	const supabase = createClient(url, key);

	const { data, error } = await supabase
		.from("download_stats")
		.select("total")
		.eq("id", true)
		.single();

	if (error || !data) {
		console.error("Counter read error:", error?.message);

		return NextResponse.json(
			{ error: "Could not read download count" },
			{ status: 500 }
		);
	}

	return NextResponse.json(
		{ total: Number(data.total) },
		{
			headers: {
				"Cache-Control": "no-store, max-age=0",
			},
		}
	);
}
