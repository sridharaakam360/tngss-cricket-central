import { useParams } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const LiveMatch = () => {
  const { matchId } = useParams();
  return (
    <main>
      <SEO title="Live Match" description="Live match stream and overlay." canonical={`/live/${matchId ?? ''}`} />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-4">Live Match</h1>
        <p className="text-muted-foreground mb-6">Match ID: {matchId}</p>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-foreground">Stream and live overlay will appear here.</p>
        </div>
      </section>
    </main>
  );
};

export default LiveMatch;
