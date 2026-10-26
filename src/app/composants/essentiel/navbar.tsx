"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	const params = useParams();
	const locale = params.locale === "en" ? "en" : "fr";
	const isEnglish = locale === "en";

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const sections = ["hero", "demo", "fonctionnalites", "faq"]
			.map((id) => document.getElementById(id))
			.filter(
				(section): section is HTMLElement => section !== null
			);

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSections = entries
					.filter((entry) => entry.isIntersecting)
					.sort(
						(a, b) =>
							b.intersectionRatio - a.intersectionRatio
					);

				if (visibleSections.length > 0) {
					setActiveSection(visibleSections[0].target.id);
				}
			},
			{
				rootMargin: "-20% 0px -60% 0px",
				threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

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

	return (
		<div className="flex justify-center">
			<nav
				className={`flex flex-col md:flex-row items-center justify-between
					fixed top-0 z-50 transition-all duration-300
					${
						isScrolled
							? "bg-opacity-90 shadow-lg w-full p-2 bg_bleu_nuit"
							: "w-full max-w-7xl md:w-2/3 px-4 py-2 p-4 rounded-b-4xl top-5"
					}`}
			>
				<div className="flex">
					<button
						className="lg:hidden text-3xl"
						onClick={() => setOpen(!open)}
						aria-label={
							isEnglish ? "Open menu" : "Ouvrir le menu"
						}
						aria-expanded={open}
					>
						☰
					</button>
				</div>

				<div
					className={`w-full md:flex md:justify-center
						${open ? "block" : "hidden"} lg:block`}
				>
					<ul
						className={`flex flex-col md:flex-row md:space-x-8
							font justify-center items-center
							${isScrolled ? "text-xl" : "text-2xl"}`}
					>
						{links.map((link) => (
							<li key={link.id} className="hover_violet">
								<Link
									href={link.href}
									onClick={() => {
										setActiveSection(link.id);
										setOpen(false);
									}}
									aria-current={
										activeSection === link.id
											? "location"
											: undefined
									}
									className={`transition-all duration-300 ${
										activeSection === link.id
											? "underline underline-offset-8 decoration-2"
											: ""
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}

						<li className="hover_violet">
							<Link
								href={isEnglish ? "/fr" : "/en"}
								hrefLang={isEnglish ? "fr" : "en"}
								onClick={() => setOpen(false)}
								aria-label={
									isEnglish
										? "Switch to French"
										: "Passer en anglais"
								}
								className="transition-all duration-300"
							>
								{isEnglish ? "FR" : "EN"}
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};