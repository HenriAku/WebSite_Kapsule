"use client";

import { useParams } from "next/dist/client/components/navigation";
import Link from "next/link";

export const Footer = () => {
	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";
	const isEnglish = locale === "en";

	const links = [
		{
			label: isEnglish ? "Home" : "Accueil",
			href: "#hero",
			id: "hero",
		},
		{
			label: isEnglish ? "Demo" : "Démo",
			href: "#demo",
			id: "demo",
		},
		{
			label: isEnglish ? "Features" : "Fonctionnalités",
			href: "#fonctionnalites",
			id: "fonctionnalites",
		},
		{
			label: "FAQ",
			href: "#faq",
			id: "faq",
		},
	];

	const texts = {
		en: {
			quickLinks: "Quick Links:",
			socials: "Socials:",
			droits: "© 2026 Designed by Henri — All rights reserved.",
		},
		fr: {
			quickLinks: "Liens rapides:",
			socials: "Réseaux:",
			droits: "© 2026 Conçu par Henri — Tous droits réservés.",
		},
	};

	return (
		<footer className="bg-gradient-to-b from-[#0B0F39] to-[#262378] p-4 flex flex-col items-center justify-center">
			<div className="md:text-left mb-4 font 
					grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
				<div className="pb-5 md:mt-5 text-lg flex">
					<img
						src="./image/Kapsule.png"
						alt="Image de fond"
						className="w-15 h-15 object-cover opacity-50"
					/>
					<h2 className="mt-3 text-3xl font-bold text-white">
						KAPSULE
					</h2>
				</div>

				<div className="md:ml-15">		
					<ul>
						<li>{texts[locale].quickLinks}</li>
						{links.map((link) => (
							<li key={link.id} className="hover_violet">
								<Link
									href={link.href}
								>
									&times; {link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="md:ml-15">		
					<ul>
						<li>{texts[locale].socials}</li>
						<li className="hover_bleu">
							<Link href="https://github.com/HenriAku" target="_blank" rel="noopener noreferrer">&times; GitHub</Link>
						</li>
						<li className="hover_bleu">
							<Link href="https://portfolio-henri-dev.netlify.app/" target="_blank" rel="noopener noreferrer">&times; Portfolio</Link>
						</li>
					</ul>
				</div>
			</div>

			<p className="text-center">
				{texts[locale].droits}
			</p>
		</footer>
	);
};