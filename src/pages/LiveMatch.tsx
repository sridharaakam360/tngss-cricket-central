import { useParams } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LiveMatch = () => {
  const { matchId } = useParams();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `Live Match ${matchId}`,
    sport: "Cricket",
    eventStatus: "LiveActionInProgress",
    url: `/live/${matchId ?? ""}`,
  };

  return (
    <main>
      <SEO title="Live Match" description="Live match stream and overlay." canonical={`/live/${matchId ?? ''}`} jsonLd={jsonLd} />
      <section className="container max-w-[1200px] mx-auto py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Live Match</h1>
        <p className="text-muted-foreground mb-4">Match ID: {matchId}</p>

        <div className="bg-card border border-border rounded-lg shadow-sm">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Live Stream"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>

          <div className="border-t border-border p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-foreground">Scoreline</div>
                <div className="text-muted-foreground">ALP 102/3 (12.4)</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Batting Pair</div>
                <div className="text-muted-foreground">A. Kumar 33 (21) • R. Iyer 12 (10)</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Bowler</div>
                <div className="text-muted-foreground">S. Khan 2.4-0-14-1</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Last ball: 1</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 bg-card border border-border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-3">Ball-by-ball</h2>
            <ol className="space-y-2">
              {["12.4 1", "12.3 4", "12.2 0", "12.1 W", "11.6 1", "11.5 2"].map((e) => (
                <li key={e} className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">{e.split(" ")[0]}</span>
                  <span className="font-medium text-foreground">{e.split(" ")[1]}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="bg-card border border-border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-3">Stats</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>CRR: 8.2</li>
              <li>Partnership: 22 (16)</li>
              <li>Extras: 5</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default LiveMatch;
