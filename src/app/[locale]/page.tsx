import { MiseEnPage } from "../composants/essentiel/miseEnPage";
import { Hero } from "../composants/section/hero";
import { Demo } from "../composants/section/demo";
import { Fonctionnalite } from "../composants/section/fonctionnalite";
import { FAQ } from "../composants/section/faq";
import { Hero2 } from "../composants/composants/hero";

export default function Home() {
	return (
		<MiseEnPage>
			<Hero />
			<Demo />
			<Fonctionnalite />
			<FAQ />
		</MiseEnPage>
	);
}
