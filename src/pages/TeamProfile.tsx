import { useParams } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const roster = Array.from({ length: 11 }).map((_, i) => ({
  name: `Player ${i + 1}`,
  role: ["BAT", "BWL", "AR", "WK"][i % 4],
}));

const TeamProfile = () => {
  const { teamId } = useParams();
  const name = (teamId ?? "").replace(/-/g, " ").toUpperCase() || "Team";

  return (
    <main>
      <SEO title="Team Profile" description="Team details and player roster." canonical={`/teams/${teamId ?? ''}`} />
      <section className="container max-w-[1200px] mx-auto py-10">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">{name}</h1>
          <p className="text-muted-foreground">Category: {teamId?.includes("pro") ? "Professional" : "Startup"}</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="md:col-span-2 bg-card border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">Players</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roster.map((p) => (
                <div key={p.name} className="flex items-center justify-between border border-border rounded-md p-3">
                  <div>
                    <div className="font-medium text-foreground">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.role}</div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded border border-border text-foreground">{p.role}</span>
                </div>
              ))}
            </div>
          </article>
          <aside className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-3">Team Staff</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Coach: TBD</li>
              <li>Captain: TBD</li>
              <li>Manager: TBD</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default TeamProfile;
