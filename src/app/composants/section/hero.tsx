"use client";
import { useParams } from "next/dist/client/components/navigation";
import { useCallback, useEffect, useState } from "react";
import { Hero2 } from "../composants/hero";
import {initFlowbite} from "flowbite";

export const Hero = () => {	
	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";
	const texts = {
		en: {
			titre: "Launch your workspaces faster with",
			titre2: "New version available! Launch your workspaces faster with a",
			telecharger: "Download",
		},
		fr: {
			titre: "Lancez vos espaces de travail plus vite avec",
			titre2: "Nouvelle version disponible ! Lancez vos espaces de travail plus vite avec un",
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
		initFlowbite();
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
		<div id="default-carousel" className="relative w-full" data-carousel="slide" data-carousel-interval="20000">
			<div className="relative overflow-hidden rounded-lg h-100 sm:h-screen w-screen">
				<div className="hidden duration-900 ease-in-out" data-carousel-item>
					<div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
						<Hero2
							titre={texts[locale].titre}
							Name="Kapsule."
							video="/video/hero.mp4"
							telecharger={texts[locale].telecharger}
						/>
					</div>
				</div>
				<div className="hidden duration-900 ease-in-out" data-carousel-item>
					<div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
						<Hero2
							titre={texts[locale].titre2}
							Name="Shortcuts."
							video="/video/Shortcut.mp4"
							telecharger={texts[locale].telecharger}
						/>
					</div>
				</div>
			</div>	
			<button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor"  d="m15 19-7-7 7-7"/></svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor"  d="m9 5 7 7-7 7"/></svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};