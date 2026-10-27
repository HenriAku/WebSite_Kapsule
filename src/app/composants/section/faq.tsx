"use client";

import { Tag } from "@/app/composants/composants/tag";
import { Question } from "@/app/composants/composants/question";
import { useParams } from "next/dist/client/components/navigation";

export const FAQ = () => {
	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";

	const texts = {
		en: {
			tag: "FAQ",
			h2: "Frequently Asked Questions",
			p: "Do you have questions about Kapsule? Here are the answers to the most frequently asked questions.",
			questions1: {
				question: "What is Kapsule and what is it used for?",
				answer1: "Kapsule allows you to launch multiple applications with a single click and switch rapidly between workspaces, to organize your work more efficiently.",
			},
			questions2: {
				question: "Which applications is Kapsule compatible with?",
				answer1: "Kapsule detects applications present in the Windows Start menu folders. In the future, it will be possible to manually add applications of your choice to further customize your workspaces.",
			},
			questions3: {
				question: "Are workspaces saved?",
				answer1: "Yes, your workspaces are saved and can be reused at any time. This allows you to easily retrieve your configurations and relaunch your applications without having to reconfigure everything.",
			},
			questions4: {
				question: "On which operating system does Kapsule run?",
				answer1: "Kapsule is currently available on Windows. We plan to develop versions for other operating systems in the future.",
			},
			questions5: {
				question: "Do you need to install Kapsule to use it?",
				answer1: "You need to download Kapsule via the download buttons and extract it into a folder of your choice. Then, you can launch the application directly from the executable file.",
			},
			questions6: {
				question: "Can you launch multiple applications at the same time with Kapsule?",
				answer1: "Yes, Kapsule allows you to launch all applications in a workspace with a single click.",
			},
		},
		fr: {
			tag: "FAQ",
			h2: "Questions fréquentes",
			p: "Vous avez des questions sur Kapsule ? Voici les réponses aux questions les plus fréquemment posées.",
			questions1: {
				question: "Qu'est-ce que Kapsule et à quoi sert cette application ?",
				answer1: "Kapsule vous permet de lancer plusieurs applications en un seul clic et de passer rapidement d'un espace de travail à un autre, pour organiser votre travail plus efficacement.",
			},
			questions2: {
				question: "Avec quelles applications Kapsule est-il compatible ?",
				answer1: "Kapsule détecte les applications présentes dans les dossiers du menu Démarrer de Windows. À l'avenir, il sera possible d'ajouter manuellement les applications de votre choix afin de personnaliser davantage vos espaces de travail.",
			},
			questions3: {
				question: "Les espaces de travail sont-ils sauvegardés ?",
				answer1: "Oui, vos espaces de travail sont enregistrés et peuvent être réutilisés à tout moment. Vous pouvez ainsi retrouver facilement vos configurations et relancer vos applications sans avoir à tout reconfigurer.",
			},
			questions4: {
				question: "Sur quel système d’exploitation Kapsule fonctionne-t-il ?",
				answer1: "Kapsule est actuellement disponible sur Windows. Nous prévoyons de développer des versions pour d'autres systèmes d'exploitation à l'avenir.",
			},
			questions5: {
				question: "Faut-il installer Kapsule pour l’utiliser ?",
				answer1: "Il faut télécharger Kapsule via les boutons de téléchargement et l’extraire dans un dossier de votre choix. Ensuite, vous pouvez lancer l’application directement depuis le fichier exécutable.",
			},
			questions6: {
				question: "Peut-on lancer plusieurs applications en même temps avec Kapsule ?",
				answer1: "Oui, Kapsule permet de lancer toutes les applications d'un espace de travail en un seul clic.",
			},
		},
	};
	return (
		<div id="faq" className="flex flex-col bg-white p-15 gap-15 justify-center">
			<div className="flex flex-col items-center justify-center text-center">
				<Tag texte={texts[locale].tag} />
				<h2 className="font-bold mb-5 text_bleu_nuit
					sm:text-2xl md:text-3xl lg:text-4xl text-2xl">
					{texts[locale].h2}
				</h2>
				<p className="mb-7 text-black">
					{texts[locale].p}
				</p>
			</div>
			<div className="flex flex-col xl:flex-row w-full gap-5">
				<div className="flex flex-col w-full xl:w-1/2 gap-5">
					<Question 
						question={texts[locale].questions1.question}
						reponse={texts[locale].questions1.answer1}
					/>
					<Question 
						question={texts[locale].questions2.question}
						reponse={texts[locale].questions2.answer1}
					/>
					<Question
						question={texts[locale].questions3.question}
						reponse={texts[locale].questions3.answer1}
					/>
				</div>
				<div className="flex flex-col w-full xl:w-1/2 gap-5">
					<Question 
						question={texts[locale].questions4.question}
						reponse={texts[locale].questions4.answer1}
					/>
					<Question 
						question={texts[locale].questions5.question}
						reponse={texts[locale].questions5.answer1}
					/>
					<Question
						question={texts[locale].questions6.question}
						reponse={texts[locale].questions6.answer1}
					/>
				</div>
			</div>
		</div>
	);
} 