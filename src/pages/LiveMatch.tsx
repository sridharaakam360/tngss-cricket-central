import { useParams } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LiveMatchData {
  id: string;
  title: string;
  teams: {
    a: { name: string; logo?: string };
    b: { name: string; logo?: string };
  };
  currentScore: string;
  overs: string;
  batsmen: {
    striker: { name: string; runs: number; balls: number; sr: number };
    nonStriker: { name: string; runs: number; balls: number; sr: number };
  };
  bowler: { name: string; overs: number; runs: number; wickets: number };
  lastBall: string;
  runRate: number;
  partnership: { runs: number; balls: number };
  extras: number;
}

const getLiveMatchData = (matchId: string): LiveMatchData => {
  // Mock data - in real app this would come from API
  return {
    id: matchId,
    title: "Alpha Startups vs Beta Builders",
    teams: {
      a: { name: "Alpha Startups", logo: "AS" },
      b: { name: "Beta Builders", logo: "BB" }
    },
    currentScore: "135/4",
    overs: "17.3",
    batsmen: {
      striker: { name: "A. Kumar", runs: 45, balls: 32, sr: 140.6 },
      nonStriker: { name: "R. Iyer", runs: 28, balls: 18, sr: 155.6 }
    },
    bowler: { name: "S. Khan", overs: 3.3, runs: 24, wickets: 2 },
    lastBall: "1 run",
    runRate: 7.8,
    partnership: { runs: 45, balls: 32 },
    extras: 8
  };
};

const LiveMatch = () => {
  const { matchId } = useParams();
  const matchData = matchId ? getLiveMatchData(matchId) : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: matchData?.title || `Live Match ${matchId}`,
    sport: "Cricket",
    eventStatus: "LiveActionInProgress",
    url: `/live/${matchId ?? ""}`,
  };

  if (!matchData) {
    return (
      <main>
        <SEO title="Match Not Found" description="Match not found." canonical={`/live/${matchId ?? ''}`} />
        <section className="container max-w-[1200px] mx-auto py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Match Not Found</h1>
            <p className="text-muted-foreground">The match you're looking for doesn't exist or is not live.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <SEO title={`${matchData.title} - Live Match`} description={`Watch ${matchData.title} live with real-time scores and commentary.`} canonical={`/live/${matchId ?? ''}`} jsonLd={jsonLd} />
      <section className="container max-w-[1200px] mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{matchData.title}</h1>
            <div className="flex items-center gap-4">
              <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
              <span className="text-muted-foreground">Match ID: {matchId}</span>
            </div>
          </div>
        </div>

        {/* Live Stream with Overlay */}
        <div className="bg-card border border-border rounded-lg shadow-sm relative">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1"
              title="Live Stream"
              className="w-full h-full rounded-t-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>

          {/* Live Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Match Title */}
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold mb-2">{matchData.teams.a.name} vs {matchData.teams.b.name}</h2>
                <div className="text-2xl font-bold text-yellow-400">
                  {matchData.currentScore} ({matchData.overs})
                </div>
              </div>

              {/* Batsmen */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-1">Batsmen</h3>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm">{matchData.batsmen.striker.name} *</span>
                    <span className="text-sm font-bold">{matchData.batsmen.striker.runs}({matchData.batsmen.striker.balls})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">{matchData.batsmen.nonStriker.name}</span>
                    <span className="text-sm">{matchData.batsmen.nonStriker.runs}({matchData.batsmen.nonStriker.balls})</span>
                  </div>
                </div>
              </div>

              {/* Bowler */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-1">Bowler</h3>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm">{matchData.bowler.name}</span>
                    <span className="text-sm font-bold">{matchData.bowler.overs}-{matchData.bowler.runs}-{matchData.bowler.wickets}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Ball & Stats */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-sm text-gray-300">Last Ball:</span>
                  <span className="text-sm font-bold ml-2">{matchData.lastBall}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-300">Run Rate:</span>
                  <span className="text-sm font-bold ml-2">{matchData.runRate}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-300">Partnership:</span>
                  <span className="text-sm font-bold ml-2">{matchData.partnership.runs} ({matchData.partnership.balls})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Panels */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* Ball-by-ball Feed */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Ball-by-ball Live Feed</span>
                  <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {[
                    { ball: "17.3", result: "1 run", description: "Single to mid-wicket" },
                    { ball: "17.2", result: "0", description: "Dot ball, defended" },
                    { ball: "17.1", result: "4", description: "FOUR! Beautiful cover drive" },
                    { ball: "16.6", result: "1 run", description: "Single to fine leg" },
                    { ball: "16.5", result: "W", description: "WICKET! Caught behind" },
                    { ball: "16.4", result: "2", description: "Two runs to deep square leg" },
                    { ball: "16.3", result: "0", description: "Dot ball, beaten" },
                    { ball: "16.2", result: "1 run", description: "Single to point" },
                    { ball: "16.1", result: "6", description: "SIX! Massive hit over long-on" },
                    { ball: "15.6", result: "1 run", description: "Single to mid-off" },
                  ].map((ball, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-border/60 pb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-muted-foreground w-12">{ball.ball}</span>
                        <span className="font-medium text-foreground">{ball.result}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{ball.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Panel */}
          <div className="space-y-6">
            {/* Match Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Match Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Current Run Rate</span>
                    <span className="font-semibold">{matchData.runRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Partnership</span>
                    <span className="font-semibold">{matchData.partnership.runs} ({matchData.partnership.balls})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Extras</span>
                    <span className="font-semibold">{matchData.extras}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Required Run Rate</span>
                    <span className="font-semibold">8.5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Player Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Player Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Top Batsmen</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>A. Kumar</span>
                        <span className="font-medium">45 (32)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>R. Iyer</span>
                        <span className="font-medium">28 (18)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Top Bowlers</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>S. Khan</span>
                        <span className="font-medium">2/24</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>M. Patel</span>
                        <span className="font-medium">1/18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commentary */}
            <Card>
              <CardHeader>
                <CardTitle>Live Commentary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {[
                    "17.3: Single to mid-wicket, good running between the wickets.",
                    "17.2: Dot ball, defended solidly by the batsman.",
                    "17.1: FOUR! Beautiful cover drive, that's a boundary!",
                    "16.6: Single to fine leg, rotating the strike.",
                    "16.5: WICKET! Caught behind, that's a big breakthrough!",
                  ].map((comment, index) => (
                    <div key={index} className="text-sm text-muted-foreground border-l-2 border-primary/20 pl-3">
                      {comment}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LiveMatch;
