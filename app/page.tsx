import GamesClient from "@/app/components/GamesClient";
import Script from 'next/script';

async function getGames() {
  const res = await fetch(
    "https://www.onlinegames.io/media/plugins/genGames/embed.json",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return res.json();
}

export default async function HomePage() {
  const games = await getGames();
  return (
    <main className="p-6">
      <Script src="https://pl28619749.effectivegatecpm.com/49/ef/81/49ef81325991859d07a7fb5bdc2ac820.js"
        strategy="afterInteractive"
      />
      <h1 className="text-3xl font-bold mb-6">🎮 Online Games</h1>
      <GamesClient games={games} />
    </main>
  );
}
