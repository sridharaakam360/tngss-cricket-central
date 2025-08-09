import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const Live = () => {
  return (
    <main>
      <SEO title="Live Matches" description="Watch live matches and follow real-time scores." canonical="/live" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Live Matches</h1>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground mb-4">No live matches at the moment.</p>
          <Link to="/schedule" className="text-primary hover:underline">See upcoming matches</Link>
        </div>
      </section>
    </main>
  );
};

export default Live;
