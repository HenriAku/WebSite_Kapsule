"use client";

import { useParams } from "next/dist/client/components/navigation";
import { Button } from "../composants/button";
import { Card } from "../composants/card";
import { Tag } from "../composants/tag";

export const Fonctionnalite = () => {
	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";
	
	const texts = {
		en: {
			tag: "FEATURES",
			h2: "An application to simplify your workspaces",
			p: "Kapsule is designed to simplify your daily life by centralizing all your applications in one workspace. An intuitive interface and advanced features allow you to stay focused on what matters.",
			button: "Download",
			card1: {
				titre: "Quick Launch",
				description: "Launch your kapsules in a single click, without wasting time configuring each application individually.",
			},
			card2: {
				titre: "Custom Kapsule",
				description: "Customize your kapsules according to your specific needs, adding the tools and features you need.",
			},
			card3: {
				titre: "Favorites",
				description: "Add your favorite kapsules to your favorites list for quick access.",
			},
			card4: {
				titre: "Simple Settings",
				description: "Customize the appearance, theme, and language of the application.",
			},
			card5: {
				titre: "Automatic Updates",
				description: "Your kapsules are always up to date with the latest features and bug fixes.",
			},
			card6: {
				titre: "Safe and Lightweight",
				description: "Kapsule is designed to be lightweight and fast.",
			},
		},
		fr: {
			tag: "FONCTIONNALITÉS",
			h2: "Une application pour simplifier vos espaces de travail",
			p: "Kapsule est conçu pour simplifier votre quotidien en centralisant toutes vos applications dans un seul espace de travail. Une interface intuitive et des fonctionnalités avancées vous permettent de rester concentré sur l'essentiel.",
			button: "Télécharger",
			card1: {
				titre: "Lancement rapide",
				description: "Lancer vos kapsules en un seul clic, sans perdre de temps à configurer chaque application individuellement.",
			},
			card2: {
				titre: "Kapsule personnalisée",
				description: "Personnalisez vos kapsules selon vos besoins spécifiques, en ajoutant les outils et fonctionnalités dont vous avez besoin.",
			},
			card3: {
				titre: "Favoris",
				description: "Ajoutez vos kapsules préférées à votre liste de favoris pour y accéder rapidement.",
			},
			card4: {
				titre: "Paramètres simples",
				description: "Personnalisez l'apparance, le thème et la langue de l'application.",
			},
			card5: {
				titre: "Mise à jour automatique",
				description: "Vos kapsules sont toujours à jour avec les dernières fonctionnalités et corrections de bugs.",
			},
			card6: {
				titre: "Sur et léger",
				description: "Kapsule est conçu pour être léger et rapide.",
			},
		},
	};
	return (
		<div id="fonctionnalites" className="flex flex-col xl:flex-row p-15 gap-15 
									justify-center bg-gradient-to-b from-[#0B0F39] to-[#5c0cf0ad]">
			<div>
				<Tag texte={texts[locale].tag} />
				<h2 className="font-bold mb-10 text-white md:w-140 sm:w-100
					sm:text-2xl md:text-3xl lg:text-4xl text-2xl">
					{texts[locale].h2}
				</h2>
				<p className="mb-7 text-white md:w-140 sm:w-100">
					{texts[locale].p}
				</p>
				<Button texte={texts[locale].button} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
				xl:grid-cols-2 2xl:grid-cols-3 gap-8 items-stretch">
				<Card 
					titre={texts[locale].card1.titre}
					description={texts[locale].card1.description}
					imageSrc="/image/flash.svg" 
				/>
				<Card 
					titre={texts[locale].card2.titre}
					description={texts[locale].card2.description}
					imageSrc="/image/plus.svg" 
				/>
				<Card 
					titre={texts[locale].card3.titre}
					description={texts[locale].card3.description}
					imageSrc="/image/favorite.svg" 
				/>
				<Card 
					titre={texts[locale].card4.titre}
					description={texts[locale].card4.description}
					imageSrc="/image/settings.svg" 
				/>
				<Card 
					titre={texts[locale].card5.titre}
					description={texts[locale].card5.description}
					imageSrc="/image/update.svg" 
				/>
				<Card 
					titre={texts[locale].card6.titre}
					description={texts[locale].card6.description}
					imageSrc="/image/shield.svg" 
				/>
			</div>
		</div>
	);
};