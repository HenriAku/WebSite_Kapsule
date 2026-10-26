import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContenaireProvider } from "./context/contenaire";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Kapsule",
		template: "%s | Kapsule",
	},
	description:
		"Kapsule est un logiciel de gestion d'espaces de travail. Il vous permet de créer des Kapsules, d'organiser vos applications et de lancer vos espaces de travail plus rapidement.",
	keywords: [
		"Kapsule",
		"logiciel",
		"gestion d'espaces de travail",
		"applications",
		"productivité",
		"efficacité",
		"organisation",
		"productivité",
		"efficacité",
		"Development",
		"Web",
		"Applications",
		"Outils",
		"Utilitaires",
		"Logiciel de productivité",
		"Logiciel de développement",
		"Logiciel de gestion d'applications",
		"Logiciel de gestion d'espaces de travail",
		"Logiciel de gestion de projets",
		"Logiciel de gestion de tâches",
		"Logiciel de gestion de temps",
	],
	authors: [{ name: "Henri" }],
	creator: "Henri",
	publisher: "Henri",

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://software-kapsule.netlify.app",
		siteName: "Kapsule",
		title: "Kapsule | Gestion d'espaces de travail",
		description:
			"Kapsule est un logiciel de gestion d'espaces de travail. Il vous permet de créer des Kapsules, d'organiser vos applications et de lancer vos espaces de travail plus rapidement.",
		images: [
			{
				url: "https://software-kapsule.netlify.app",
				width: 1200,
				height: 630,
				alt: "Kapsule | Gestion d'espaces de travail",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Kapsule | Gestion d'espaces de travail",
		description:
			"Kapsule est un logiciel de gestion d'espaces de travail. Il vous permet de créer des Kapsules, d'organiser vos applications et de lancer vos espaces de travail plus rapidement.",
		images: ["https://software-kapsule.netlify.app"],
	},

	alternates: {
		canonical: "https://software-kapsule.netlify.app",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en fr"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ContenaireProvider>{children}</ContenaireProvider>
			</body>
		</html>
	);
}
