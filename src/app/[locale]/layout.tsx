import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { ContenaireProvider } from "../context/contenaire";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const languages = {
	en: {
		title: "Kapsule - Application & Workspace launcher",
		description:
            "Organize your applications into workspaces and launch them faster with Kapsule, a productivity tool for Windows.",		
		keywords: [
			"Kapsule",
			"workspace management",
			"application launcher",
			"windows productivity",
			"application organization",
			"desktop management",
			"workspace organization",
			"application productivity",
			"desktop productivity",
			"workspace productivity",
			"application efficiency",
			"desktop efficiency",
			"workspace efficiency",
			"productivity",
			"efficiency",
			"organization",
			"productivity",
			"efficiency",
			"Development",
			"Web",
			"Applications",
			"Tools",
			"Utilities",
			"Productivity software",
			"Development software",
			"Application management software",
			"Workspace management software",
			"Project management software",
			"Task management software",
			"Time management software",
		],
		ogLocale: "en_US",
	},
	fr: {
		title: "Kapsule - Lanceur d'applications et d'espaces de travail",
		description:
			"Organisez vos applications en espaces de travail et lancez-les plus rapidement avec Kapsule, un outil de productivité pour Windows.",
		keywords: [
			"Kapsule",
			"logiciel",
			"gestion d'espaces de travail",
			"windows productivité",
			"organisation d'applications",
			"gestion de bureau",
			"organisation d'espaces de travail",
			"productivité des applications",
			"productivité du bureau",
			"productivité des espaces de travail",
			"efficacité des applications",
			"efficacité du bureau",
			"efficacité des espaces de travail",
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
		ogLocale: "fr_FR",
	},
} as const;

type Locale = keyof typeof languages;

type LayoutProps = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({
	params,
}: LayoutProps): Promise<Metadata> {
	const { locale } = await params;

	if (!(locale in languages)) {
		notFound();
	}

	const lang = locale as Locale;
	const content = languages[lang];

	return {
		metadataBase: new URL("https://software-kapsule.netlify.app"),
		title: content.title,
		description: content.description,
		applicationName: "Kapsule",
		category: "technology",
		keywords: [...content.keywords],
		authors: [{ name: "Henri" }],
		creator: "Henri",
		publisher: "Kapsule",
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		alternates: {
			canonical: `/${lang}`,
			languages: {
				en: "/en",
				fr: "/fr",
			},
		},
		openGraph: {
			type: "website",
			locale: content.ogLocale,
			url: `/${lang}`,
			siteName: "Kapsule",
			title: content.title,
			description: content.description,
		},
		twitter: {
			card: "summary",
			title: content.title,
			description: content.description,
		},
	};
}

export default async function RootLayout({
	children,
	params,
}: LayoutProps) {
	const { locale } = await params;

	if (!(locale in languages)) {
		notFound();
	}

	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ContenaireProvider>{children}</ContenaireProvider>
			</body>
		</html>
	);
}