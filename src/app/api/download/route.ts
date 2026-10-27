
import { createClient } from "@supabase/supabase-js";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";

export async function GET() {
	// chemin du fichier à télécharger
	const filePath = path.join(
		process.cwd(),
		"downloads",
		"kapsule.exe"
	);

	// Vérifier si le fichier existe
	if (!existsSync(filePath)) {
		return NextResponse.json(
			{ error: "Download file not found" },
			{ status: 404 }
		);
	}

	// Récupérer les variables d'environnement pour Supabase
	const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

	// Vérifier si les variables d'environnement sont définies
	if (!url || !key) {
		return NextResponse.json(
			{ error: "Server configuration missing" },
			{ status: 500 }
		);
	}

	// Créer un client Supabase
	try {
		const supabase = createClient(url, key);

		const { error } = await supabase.rpc(
			"increment_download_count"
		);

		if (error) {
			console.error("Download counter error:", error.message);

			return NextResponse.json(
				{ error: "Could not record download" },
				{ status: 500 }
			);
		}

		const stream = createReadStream(filePath);

		return new Response(
			Readable.toWeb(stream) as ReadableStream,
			{
				headers: {
					"Content-Type": "application/octet-stream",
					"Content-Disposition":
						'attachment; filename="kapsule.exe"',
					"Cache-Control": "no-store",
				},
			}
		);
	} catch (error) {
		console.error("Download error:", error);

		return NextResponse.json(
			{ error: "Download failed" },
			{ status: 500 }
		);
	}
}
