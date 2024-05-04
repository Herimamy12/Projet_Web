import Image from "next/image";
import Header from "./Header/header";
import Bbody from "./Hero/b_body";
import Footer from "./Footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Bbody />
      <Footer />
    </main>
  );
}
