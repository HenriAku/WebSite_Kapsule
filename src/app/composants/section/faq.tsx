import { Tag } from "@/app/composants/composants/tag";
import { Question } from "@/app/composants/composants/question";

export const FAQ = () => {
	return (
		<div id="faq" className="flex flex-col bg-white p-15 gap-15 justify-center">
			<div className="flex flex-col items-center justify-center text-center">
				<Tag texte="FAQ" />
				<h2 className="font-bold mb-5 text_bleu_nuit
					sm:text-2xl md:text-3xl lg:text-4xl text-2xl">
					Quesitions fréquentes
				</h2>
				<p className="mb-7 text-black">
					Vous avez des questions sur Kapsule ? Voici les réponses aux questions les plus fréquemment posées.
				</p>
			</div>
			<div className="flex flex-col xl:flex-row w-full gap-5">
				<div className="flex flex-col w-full xl:w-1/2 gap-5">
					<Question 
						question="Qu'est-ce que Kapsule et à quoi sert cette application ?" 
						reponse="Kapsule vous permet de lancer plusieurs applications en un seul clic et de passer
						rapidement d'un espace de travail à un autre, pour organiser votre travail plus efficacement."
					/>
					<Question 
						question="Avec quelles applications Kapsule est-il compatible ?" 
						reponse="Kapsule détecte les applications présentes dans les dossiers du menu Démarrer de Windows. À l'avenir, 
						il sera possible d'ajouter manuellement les applications de votre choix afin de personnaliser davantage vos espaces de travail."
					/>
					<Question
						question="Les espaces de travail sont-ils sauvegardés ?"
						reponse="Oui, vos espaces de travail sont enregistrés et peuvent être réutilisés à tout moment. 
						Vous pouvez ainsi retrouver facilement vos configurations et relancer vos applications sans avoir à tout reconfigurer."
					/>
				</div>
				<div className="flex flex-col w-full xl:w-1/2 gap-5">
					<Question 
						question="Sur quel système d’exploitation Kapsule fonctionne-t-il ?" 
						reponse="Kapsule est actuellement disponible sur Windows. Nous prévoyons de développer des versions pour d'autres systèmes d'exploitation à l'avenir."
					/>
					<Question 
						question="Faut-il installer Kapsule pour l’utiliser ?" 
						reponse="Il faut télécharger Kapsule via les boutons de téléchargement et l’extraire dans un dossier de votre choix. 
						Ensuite, vous pouvez lancer l’application directement depuis le fichier exécutable."
					/>
					<Question
						question="Peut-on lancer plusieurs applications en même temps avec Kapsule ?"
						reponse="Oui, Kapsule permet de lancer toutes les applications d'un espace de travail en un seul clic."
					/>
				</div>
			</div>
		</div>
	);
} 