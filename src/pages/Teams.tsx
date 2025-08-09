import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Team {
  id: string;
  name: string;
  category: "Startup" | "Professional";
}

const data: Team[] = [
  { id: "startup-1", name: "Alpha Startups", category: "Startup" },
  { id: "startup-2", name: "Beta Builders", category: "Startup" },
  { id: "startup-3", name: "Code Ninjas", category: "Startup" },
  { id: "pro-1", name: "Pro Warriors", category: "Professional" },
  { id: "pro-2", name: "Tech Titans", category: "Professional" },
  { id: "pro-3", name: "Data Devils", category: "Professional" },
];

const Teams = () => {
  const [cat, setCat] = useState<"ALL" | "Startup" | "Professional">("ALL");

  const teams = useMemo(() => {
    return data.filter((t) => (cat === "ALL" ? true : t.category === cat));
  }, [cat]);

  return (
    <main>
      <SEO title="Teams" description="Explore Startup and Professional teams in the league." canonical="/teams" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-foreground">Teams</h1>
          <Select value={cat} onValueChange={(v) => setCat(v as any)}>
            <SelectTrigger className="w-[190px]"><SelectValue placeholder="Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All</SelectItem>
              <SelectItem value="Startup">Startup</SelectItem>
              <SelectItem value="Professional">Professional</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teams.map((t) => (
            <Link key={t.id} to={`/teams/${t.id}`} className="block bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-foreground/80 font-semibold">
                  {t.name.split(" ").map((x) => x[0]).join("")}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{t.name}</h2>
                  <p className="text-sm text-muted-foreground">{t.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Teams;
