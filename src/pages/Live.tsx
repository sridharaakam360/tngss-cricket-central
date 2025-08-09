import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import LiveMatchCard from "@/components/live/LiveMatchCard";

const Live = () => {
  const demoMatches = [
    {
      id: "m1",
      title: "Startup League — Match 1",
      teams: { a: "Alpha Startups", b: "Beta Builders" },
      status: "LIVE" as const,
      scoreline: "ALP 85/2 (10.3)",
    },
  ];

  return (
    <main>
      <SEO title="Live Matches" description="Watch live matches and follow real-time scores." canonical="/live" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Live Matches</h1>
        {demoMatches.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-muted-foreground mb-4">No live matches at the moment.</p>
            <Link to="/schedule" className="text-primary hover:underline">See upcoming matches</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoMatches.map((m) => (
              <LiveMatchCard key={m.id} {...m} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Live;
