import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import LiveMatchCard from "@/components/live/LiveMatchCard";
import { Badge } from "@/components/ui/badge";

const Live = () => {
  const demoMatches = [
    {
      id: "m1",
      title: "Startup League — Match 1",
      teams: { a: "Alpha Startups", b: "Beta Builders" },
      status: "LIVE" as const,
      scoreline: "ALP 135/4 (17.3)",
      venue: "Sri Shanmugha College Ground",
      category: "STARTUP",
      currentBatsmen: "A. Kumar 45* (32), R. Iyer 28* (18)",
      currentBowler: "S. Khan 2/24 (3.3)",
      lastBall: "1 run",
      runRate: 7.8,
    },
    {
      id: "m2",
      title: "Professional League — Match 3",
      teams: { a: "Pro Warriors", b: "Tech Titans" },
      status: "LIVE" as const,
      scoreline: "PW 89/2 (12.1)",
      venue: "Sri Shanmugha College Ground",
      category: "PROFESSIONAL",
      currentBatsmen: "S. Kumar 32* (25), R. Sharma 18* (12)",
      currentBowler: "M. Patel 1/18 (2.1)",
      lastBall: "4 runs",
      runRate: 7.3,
    },
  ];

  return (
    <main>
      <SEO title="Live Matches" description="Watch live matches and follow real-time scores in the TNGSS Startup Cricket League." canonical="/live" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Live Matches</h1>
            <p className="text-muted-foreground">Watch live matches and follow real-time scores</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
            <span className="text-sm text-muted-foreground">{demoMatches.length} active matches</span>
          </div>
        </div>

        {demoMatches.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm text-center">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏏</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No Live Matches</h3>
              <p className="text-muted-foreground mb-4">There are no live matches at the moment. Check the schedule for upcoming fixtures.</p>
            </div>
            <Link to="/schedule" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors">
              View Schedule
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoMatches.map((match) => (
              <LiveMatchCard key={match.id} {...match} />
            ))}
          </div>
        )}

        {/* Quick Stats */}
        {demoMatches.length > 0 && (
          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">Live Match Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{demoMatches.length}</div>
                <div className="text-sm text-muted-foreground">Active Matches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{demoMatches.filter(m => m.category === "STARTUP").length}</div>
                <div className="text-sm text-muted-foreground">Startup Category</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{demoMatches.filter(m => m.category === "PROFESSIONAL").length}</div>
                <div className="text-sm text-muted-foreground">Professional Category</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{demoMatches.reduce((sum, m) => sum + (m.runRate || 0), 0) / demoMatches.length}</div>
                <div className="text-sm text-muted-foreground">Avg Run Rate</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Live;
