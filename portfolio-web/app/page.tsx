import Header from "./components/Header";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header></Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <HomeSection></HomeSection>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
