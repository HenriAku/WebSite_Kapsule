"use client";

import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg_bleu_nuit p-4 flex flex-col items-center justify-center">
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
						<li>Liens rapides :</li>
						<li className="hover_bleu"><Link href="#hero">&times; Accueil</Link></li>
						<li className="hover_bleu"><Link href="#demo">&times; Démo</Link></li>
						<li className="hover_bleu"><Link href="#fonctionnalites">&times; Fonctionnalites</Link></li>
						<li className="hover_bleu"><Link href="#faq">&times; FAQ</Link></li>
					</ul>
				</div>

				<div className="md:ml-15">		
					<ul>
						<li>Réseaux :</li>
						<li className="hover_bleu">
							<Link href="https://github.com/HenriAku" target="_blank" rel="noopener noreferrer">&times; GitHub</Link>
						</li>
						<li className="hover_bleu">
							<Link href="https://portfolio-henri-dev.netlify.app/" target="_blank" rel="noopener noreferrer">&times; Portfolio</Link>
						</li>
					</ul>
				</div>
			</div>

			<p className="text-center">&copy; 2026 Conçu par Henri — Tous droits réservés.</p>
		</footer>
	);
};