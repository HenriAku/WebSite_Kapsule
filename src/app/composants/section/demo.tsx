"use client";

import { Video } from "@/app/composants/composants/video";
import { Tag } from "../composants/tag";
import { useParams } from "next/dist/client/components/navigation";

export const Demo = () => {
	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";
	const texts = {
		en: {
			tag: "DEMO",
			h2: "Discover Kapsule in action",
			p: "Explore Kapsule's features through this video demonstration. Learn how to create Kapsules, organize your applications, and optimize your workspace.",
			video1: {
				titre: "Quick Kapsule Creation",
				description: "Create your Kapsules in just a few clicks and organize your applications according to your needs.",
			},
			video2: {
				titre: "Application Search",
				description: "Easily find the applications you need.",
			},
			video3: {
				titre: "Add to Favorites",
				description: "Add your favorite Kapsules to your favorites list for quick access.",
			},
			video4: {
				titre: "Simple Settings",
				description: "Customize the appearance, theme, and language of the application.",
			},
		},
		fr: {
			tag: "DÉMO",
			h2: "Découvrez Kapsule en action",
			p: "Explorez les fonctionnalités de Kapsule à travers cette démonstration vidéo. Apprenez comment créer des Kapsules, organiser vos applications et optimiser votre espace de travail.",
			video1: {
				titre: "Création rapide de Kapsules",
				description: "Créez vos Kapsules en quelques clics et organisez vos applications selon vos besoins.",
			},
			video2: {
				titre: "Recherche d'applications",
				description: "Trouvez facilement les applications dont vous avez besoin.",
			},
			video3: {
				titre: "Ajout aux favoris",
				description: "Ajoutez vos Kapsules préférées à votre liste de favoris pour y accéder rapidement.",
			},
			video4: {
				titre: "Paramètres simples",
				description: "Personnalisez l'apparance, le thème et la langue de l'application.",
			},
		},
	};

	return (
		<div id="demo" className="flex flex-col items-center justify-center bg-white p-15">
			<Tag texte={texts[locale].tag} />
			<h2 className="text-4xl font-bold text-center mb-10 text_bleu_nuit">{texts[locale].h2}</h2>
			<p className="text-lg text-center mb-7 text-black w-1/2">
				{texts[locale].p}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-10 p-5">
				<Video
					src="/video/lancement.mp4"
					titre={texts[locale].video1.titre}
					description={texts[locale].video1.description}
				/>
				<Video
					src="/video/recherche.mp4"
					titre={texts[locale].video2.titre}
					description={texts[locale].video2.description}
				/>
                <Video
					src="/video/fav.mp4"
					titre={texts[locale].video3.titre}
					description={texts[locale].video3.description}
				/>
                <Video
					src="/video/settings.mp4"
					titre={texts[locale].video4.titre}
					description={texts[locale].video4.description}
				/>
			</div>
		</div>
	);
};
