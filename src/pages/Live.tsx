import React, { useState } from 'react';
import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Using Button for tab controls

// --- MOCK DATA ---
const ALL_MATCHES_DATA = [
  {
    id: "m1",
    title: "Startup League — Final",
    category: "STARTUP",
    teams: { a: { name: "Alpha Startups", score: "135/4 (17.3)" }, b: { name: "Beta Builders", score: "Yet to bat" } },
    venue: "Sri Shanmugha College Ground, Salem",
    status: "LIVE",
    scoreline: "ALP 135/4 (17.3)",
    lastBall: "1 run",
    runRate: 7.8,
  },
  {
    id: "m2",
    title: "Professional League — Match 3",
    category: "PROFESSIONAL",
    teams: { a: { name: "Pro Warriors", score: "89/2 (12.1)" }, b: { name: "Tech Titans", score: "Yet to bat" } },
    venue: "NPR College Ground, Dindigul",
    status: "LIVE",
    scoreline: "PW 89/2 (12.1)",
    lastBall: "4 runs",
    runRate: 7.3,
  },
  {
    id: "m3",
    title: "Corporate Cup — Semi-Final",
    category: "CORPORATE",
    teams: {
      a: { name: "Data Dynamos", score: "168/7 (20.0)" },
      b: { name: "Cloud Crusaders", score: "172/5 (19.2)" },
    },
    venue: "IC-Gurukul Ground, Chennai",
    status: "COMPLETED",
    result: "Cloud Crusaders won by 5 wickets",
  },
  {
    id: "m4",
    title: "Startup League — Match 14",
    category: "STARTUP",
    teams: {
      a: { name: "Pixel Pioneers", score: "195/5 (20.0)" },
      b: { name: "Venture Vikings", score: "150/9 (20.0)" },
    },
    venue: "Sri Shanmugha College Ground, Salem",
    status: "COMPLETED",
    result: "Pixel Pioneers won by 45 runs",
  },
];

// --- TYPE DEFINITIONS ---
interface Team {
  name: string;
  score?: string;
}

interface Match {
  id: string;
  title: string;
  category: string;
  teams: { a: Team; b: Team };
  venue: string;
  status: "LIVE" | "COMPLETED";
  scoreline?: string;
  lastBall?: string;
  runRate?: number;
  result?: string;
}

// --- UI/UX Enhanced Match Card Component ---
const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  const isLive = match.status === "LIVE";

  return (
    <Card className={`flex flex-col justify-between border-2 ${isLive ? 'border-destructive/50 shadow-destructive/10' : 'border-border'} hover:shadow-xl hover:-translate-y-1 transition-all`}>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <Badge variant={isLive ? 'destructive' : 'default'} className={isLive ? 'animate-pulse' : ''}>
              {match.status}
            </Badge>
            <CardTitle className="text-lg font-bold text-foreground mt-2">{match.title}</CardTitle>
          </div>
          <Badge variant="outline">{match.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground pt-1">{match.venue}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        {/* Teams and Scores */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-foreground">{match.teams.a.name}</span>
            <span className="font-bold text-lg text-foreground">{match.teams.a.score}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-foreground">{match.teams.b.name}</span>
            <span className="font-bold text-lg text-foreground">{match.teams.b.score}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4"></div>

        {/* Match Status Details */}
        {isLive ? (
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">Scoreline: <span className="font-semibold text-foreground">{match.scoreline}</span></p>
            <p className="text-muted-foreground">Last Ball: <span className="font-semibold text-foreground">{match.lastBall}</span></p>
            <p className="text-muted-foreground">Run Rate: <span className="font-semibold text-foreground">{match.runRate}</span></p>
          </div>
        ) : (
          <p className="text-base font-semibold text-primary text-center">{match.result}</p>
        )}
      </CardContent>
    </Card>
  );
};


// --- Main Page Component ---
const Live = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'completed'>('live');

  const liveMatches = ALL_MATCHES_DATA.filter((m) => m.status === 'LIVE');
  const completedMatches = ALL_MATCHES_DATA.filter((m) => m.status === 'COMPLETED');
  const matchesToShow = activeTab === 'live' ? liveMatches : completedMatches;

  const TabButton = ({ tabName, title }: { tabName: 'live' | 'completed'; title: string }) => {
    const isActive = activeTab === tabName;
    return (
      <Button
        variant={isActive ? "default" : "ghost"}
        onClick={() => setActiveTab(tabName)}
        className="flex-1"
      >
        {title}
      </Button>
    );
  };

  return (
    <main className="bg-secondary/20 min-h-screen font-sans">
      <SEO title="Match Center" description="Follow live scores and view results from recent games." />
      <section className="container max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Match Center</h1>
          <p className="mt-2 text-lg text-muted-foreground">Follow live scores and view results from recent games.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center gap-2 mb-10 p-1 bg-card border rounded-lg max-w-xs mx-auto shadow-sm">
          <TabButton tabName="live" title="Live" />
          <TabButton tabName="completed" title="Completed" />
        </div>

        {/* Match Grid */}
        {matchesToShow.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchesToShow.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        ) : (
          <Card className="text-center p-12 col-span-full">
            <div className="text-6xl mb-4">🏏</div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">No {activeTab} matches right now</h3>
            <p className="mt-1 text-muted-foreground">Check back later for updates.</p>
          </Card>
        )}
      </section>
    </main>
  );
};

export default Live;
