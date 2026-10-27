"use client";
import { useParams } from "next/dist/client/components/navigation";
import { Button } from "../composants/button";
import { useCallback, useEffect, useState } from "react";

export const Hero = () => {	
	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";
	const texts = {
		en: {
			titre: "Launch your workspaces faster with",
			kapsule: "Kapsule.",
			telecharger: "Download",
		},
		fr: {
			titre: "Lancez vos espaces de travail plus vite avec",
			kapsule: "Kapsule.",
			telecharger: "Télécharger",
		},
	};

	const [downloadCount, setDownloadCount] = useState(0);
	const refreshCount = useCallback(async () => {
		try {
			const response = await fetch("/api/downloads-count", {
				cache: "no-store",
			});

			if (!response.ok) {
				throw new Error("Impossible de récupérer le compteur");
			}

			const data: { total: number } = await response.json();
			setDownloadCount(data.total);
		} catch (error) {
			console.error("Erreur du compteur :", error);
		}
	}, []);

	useEffect(() => {
        void refreshCount();
    }, [refreshCount]);

    const handleDownload = () => {
        // Actualise le compteur après l'enregistrement du téléchargement.
        window.setTimeout(() => {
            void refreshCount();
        }, 1200);
    };

	return (
		/* h-screen + w-screen forcent le composant à occuper 100% du viewport */
		<section id="hero" className="h-screen w-screen overflow-hidden flex flex-col justify-between p-6 sm:p-12
				bg-gradient-to-b from-[#0B0F39] to-[#262378]">
			{/* logo et nom en haut a gauche */}
			<div className="inset-0 flex-row hidden xl:block">
				<img
					src="./image/Kapsule.png"
					alt="Image de fond"
					className="w-15 h-15 object-cover opacity-50 absolute top-5 left-15"
				/>
				<h2 className="absolute top-7 left-30 text-3xl font-bold text-white">
					KAPSULE
				</h2>
			</div>

			{/* Contenu aligné au centre vertical et horizontal */}
			<div className="flex flex-col lg:flex-row items-center justify-center h-full p-20 gap-5">
				<div className="font-bold text-white mb-4 w-full max-w-3xl">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl md font-bold text-white mb-4">
						 <span className="text-violet-500">{texts[locale].titre}</span> {texts[locale].kapsule}
					</h1>
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<Button texte={texts[locale].telecharger} onClick={handleDownload} />
						<p className="text-white text-sm sm:text-base">
							{downloadCount} {locale === "en" ? "downloads" : "téléchargements"}
						</p>
					</div>

				</div>

				<div className="w-full max-w-3xl hidden xl:block perspective-container">
					<div className="video-3d">
						<video
							src="/video/hero.mp4"
							autoPlay
							loop
							muted
							playsInline
							className="w-full rounded-2xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};