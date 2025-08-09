import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const Teams = () => {
  const demoTeams = [
    { id: "startup-1", name: "Alpha Startups", category: "Startup" },
    { id: "pro-1", name: "Pro Warriors", category: "Professional" },
  ];
  return (
    <main>
      <SEO title="Teams" description="Explore Startup and Professional teams in the league." canonical="/teams" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Teams</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {demoTeams.map((t) => (
            <Link key={t.id} to={`/teams/${t.id}`} className="block bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-foreground">{t.name}</h2>
              <p className="text-sm text-muted-foreground">{t.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Teams;
