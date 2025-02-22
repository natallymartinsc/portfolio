import About from "./components/About";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
      <div className="container">
        <HomeSection />

        <About />
      </div>

    </main>
  );
}
