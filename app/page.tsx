import GamesClient from "@/app/components/GamesClient";

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
      // Open smart link in new window
        const smartLink = 'https://otieu.com/4/10544601'
        window.open(smartLink, '_blank', 'noopener,noreferrer'); 
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🎮 Online Games</h1>
      <GamesClient games={games} />
    </main>
  );
}
