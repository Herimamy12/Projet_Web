import Signin from "./signin";
import Header from "../Header/header"
import BackgroungImg from "../bg/background"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
		  <BackgroungImg />
		  <Header />
		  <Signin />
		</main>
	);
}