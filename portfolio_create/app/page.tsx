import Header from "./Header/header"
import Accueil from "./Accueil/accueil"
import AccueilUser from "./Accueil/accueilUser"
import BackgroungImg from "./bg/background"
import Foot from "./Accueil/footer"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<BackgroungImg />
			<Header />
			<AccueilUser />
			{/* <Accueil /> */}
			<Foot />
		</main>
	);
  }