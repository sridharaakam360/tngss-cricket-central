import { Link } from "react-router-dom";

export interface LiveMatchBrief {
  id: string;
  title: string;
  teams: { a: string; b: string };
  scoreline?: string;
  status: "LIVE" | "UPCOMING" | "COMPLETED";
}

const LiveMatchCard = ({ id, title, teams, scoreline, status }: LiveMatchBrief) => {
  return (
    <article className="bg-card border border-border rounded-lg p-5 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="inline-flex items-center text-xs px-2 py-0.5 rounded border border-border text-foreground">
          {status}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {teams.a} vs {teams.b}
      </p>
      {scoreline && (
        <p className="text-foreground font-medium mb-4">{scoreline}</p>
      )}
      <div className="flex gap-3">
        <Link
          to={`/live/${id}`}
          className="inline-flex px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors"
        >
          Watch Live
        </Link>
        <Link
          to={`/live/${id}`}
          className="inline-flex px-4 py-2 rounded-md border border-border bg-background text-foreground hover:bg-card transition-colors"
        >
          Scorecard
        </Link>
      </div>
    </article>
  );
};

export default LiveMatchCard;
