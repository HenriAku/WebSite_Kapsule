import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const MiseEnPage = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Navbar />
			<main className="flex flex-col min-h-screen">
				{children}
			</main>
			<Footer />
		</div>
	);
};
