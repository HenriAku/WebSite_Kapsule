"use client";
import { useParams } from "next/dist/client/components/navigation";
import { Button } from "../composants/button";

export const Hero = () => {	
	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";
	const isEnglish = locale === "en";
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

	return (
		/* h-screen + w-screen forcent le composant à occuper 100% du viewport */
		<section id="hero" className="h-screen w-screen overflow-hidden flex flex-col justify-between p-6 sm:p-12
				bg-gradient-to-b from-[#0B0F39] to-[#262378]">
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
				<div className="font-bold text-white mb-4 w-1/2">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl md font-bold text-white mb-4">
						 <span className="text-violet-500">{texts[locale].titre}</span> {texts[locale].kapsule}
					</h1>
					<Button texte={texts[locale].telecharger} lien="/vscode-survival-kit.zip" />
				</div>

				<div className="w-full max-w-4xl hidden xl:block perspective-container">
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