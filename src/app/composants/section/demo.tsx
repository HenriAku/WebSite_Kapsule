import { Video } from "@/app/composants/composants/video";
import { Tag } from "../composants/tag";

export const Demo = () => {
	return (
		<div id="demo" className="flex flex-col items-center justify-center bg-white p-15">
			<Tag texte="DÉMO" />
			<h2 className="text-4xl font-bold text-center mb-10 text_bleu_nuit">Découvrez Kapsule en action</h2>
			<p className="text-lg text-center mb-7 text-black w-1/2">
				Explorez les fonctionnalités de Kapsule à travers cette démonstration vidéo. 
				Apprenez comment créer des Kapsules, organiser vos applications et optimiser votre espace de travail.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-10 p-5">
				<Video
					src="/video/lancement.mp4"
					titre="Creation rapide de Kapsules"
					description="Créez vos Kapsules en quelques clics et organisez vos applications selon vos besoins."
				/>
				<Video
					src="/video/recherche.mp4"
					titre="Recherche d'applications"
					description="Trouvez facilement les applications dont vous avez besoin."
				/>
                <Video
					src="/video/fav.mp4"
					titre="Ajout aux favoris vos Kapsules"
					description="Ajoutez vos Kapsules préférées à votre liste de favoris pour y accéder rapidement."
				/>
                <Video
					src="/video/settings.mp4"
					titre="Paramètres simples"
					description="Personnalisez l'apparance, le thème et la langue de l'application."
				/>
			</div>
		</div>
	);
};
