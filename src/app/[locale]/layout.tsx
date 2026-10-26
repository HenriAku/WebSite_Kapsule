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
        title: "Kapsule | Workspace management",
        description:
            "Kapsule helps you organize your applications into workspaces and launch them faster.",
        keywords: [
            "Kapsule",
            "workspace management",
            "application launcher",
            "productivity",
        ],
        ogLocale: "en_US",
    },
    fr: {
        title: "Kapsule | Gestion d'espaces de travail",
        description:
            "Kapsule vous permet d'organiser vos applications dans des espaces de travail et de les lancer plus rapidement.",
        keywords: [
            "Kapsule",
            "gestion d'espaces de travail",
            "applications",
            "productivité",
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
        title: {
            default: content.title,
            template: "%s | Kapsule",
        },
        description: content.description,
        keywords: [...content.keywords],
        authors: [{ name: "Henri" }],
        creator: "Henri",
        publisher: "Henri",
        robots: {
            index: true,
            follow: true,
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