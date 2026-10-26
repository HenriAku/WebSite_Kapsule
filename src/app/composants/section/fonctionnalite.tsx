import { Button } from "../composants/button";
import { Card } from "../composants/card";
import { Tag } from "../composants/tag";

export const Fonctionnalite = () => {
	return (
		<div id="fonctionnalites" className="flex flex-col xl:flex-row p-15 gap-15 
									justify-center bg-gradient-to-b from-[#0B0F39] to-[#5c0cf0ad]">
			<div>
				<Tag texte="Fonctionnalités" />
				<h2 className="font-bold mb-10 text-white md:w-140 sm:w-100
					sm:text-2xl md:text-3xl lg:text-4xl text-2xl">
					Une application pour simplifier vos espace de travail
				</h2>
				<p className="mb-7 text-white md:w-140 sm:w-100">
					Kapsule est conçu pour simplifier votre quotidien en centralisant toutes vos applications
					dans un seul espace de travail. Une interface intuitive et des fonctionnalités 
					avancées vous permettent de rester concentré sur l'essentiel.
				</p>
				<Button texte="Télécharger" lien="/vscode-survival-kit.zip" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
				xl:grid-cols-2 2xl:grid-cols-3 gap-8 items-stretch">
				<Card 
					titre="Lancement rapide" 
					description="Lancer vos kapsules en un seul clic, sans perdre de 
						temps à configurer chaque application individuellement." 
					imageSrc="/image/flash.svg" 
				/>
				<Card 
					titre="Kapsule personnalisée" 
					description="Personnalisez vos kapsules selon vos besoins spécifiques, 
						en ajoutant les outils et fonctionnalités dont vous avez besoin." 
					imageSrc="/image/plus.svg" 
				/>
				<Card 
					titre="Favoris" 
					description="Ajoutez vos kapsules préférées à votre liste de 
						favoris pour y accéder rapidement." 
					imageSrc="/image/favorite.svg" 
				/>
				<Card 
					titre="Paramètres simples" 
					description="Personnalisez l'apparance, le thème et la langue de l'application." 
					imageSrc="/image/settings.svg" 
				/>
				<Card 
					titre="Mise à jour automatique" 
					description="Vos kapsules sont toujours à jour avec les dernières 
						fonctionnalités et corrections de bugs." 
					imageSrc="/image/update.svg" 
				/>
				<Card 
					titre="Sur et léger" 
					description="Kapsule est conçu pour être léger et rapide." 
					imageSrc="/image/shield.svg" 
				/>
			</div>
		</div>
	);
};