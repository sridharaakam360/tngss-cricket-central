import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface LiveMatchBrief {
  id: string;
  title: string;
  teams: { a: string; b: string };
  scoreline?: string;
  status: "LIVE" | "UPCOMING" | "COMPLETED";
  venue?: string;
  category?: "STARTUP" | "PROFESSIONAL";
  currentBatsmen?: string;
  currentBowler?: string;
  lastBall?: string;
  runRate?: number;
}

const LiveMatchCard = ({ id, title, teams, scoreline, status, venue, category, currentBatsmen, currentBowler, lastBall, runRate }: LiveMatchBrief) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-l-4 border-l-red-500">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
            {category && (
              <Badge variant={category === "STARTUP" ? "default" : "secondary"}>
                {category}
              </Badge>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{venue}</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {teams.a} vs {teams.b}
        </p>
      </CardHeader>
      <CardContent>
        {scoreline && (
          <div className="mb-4">
            <div className="text-2xl font-bold text-primary mb-2">{scoreline}</div>
            {runRate && (
              <div className="text-sm text-muted-foreground">
                Run Rate: <span className="font-semibold">{runRate}</span>
              </div>
            )}
          </div>
        )}

        {/* Live Match Details */}
        {status === "LIVE" && (
          <div className="space-y-2 mb-4 p-3 bg-muted/50 rounded-lg">
            {currentBatsmen && (
              <div className="text-sm">
                <span className="font-semibold text-foreground">Batsmen:</span>
                <span className="text-muted-foreground ml-2">{currentBatsmen}</span>
              </div>
            )}
            {currentBowler && (
              <div className="text-sm">
                <span className="font-semibold text-foreground">Bowler:</span>
                <span className="text-muted-foreground ml-2">{currentBowler}</span>
              </div>
            )}
            {lastBall && (
              <div className="text-sm">
                <span className="font-semibold text-foreground">Last Ball:</span>
                <span className="text-muted-foreground ml-2">{lastBall}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <Link
            to={`/live/${id}`}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors font-medium"
          >
            Watch Live
          </Link>
          <Link
            to={`/live/${id}`}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md border border-border bg-background text-foreground hover:bg-card transition-colors font-medium"
          >
            Scorecard
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveMatchCard;
