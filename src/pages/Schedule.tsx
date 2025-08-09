import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import ScheduleFilters, { Filters } from "@/components/schedule/ScheduleFilters";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MatchRow {
  id: string;
  datetime: string; // ISO
  category: "STARTUP" | "PROFESSIONAL";
  venue: string;
  type: "LEAGUE" | "KNOCKOUT" | "SEMI" | "FINAL";
  teams: { a: string; b: string };
  status: "UPCOMING" | "LIVE" | "COMPLETED";
}

const demo: MatchRow[] = [
  {
    id: "m1",
    datetime: "2025-02-10T10:00:00+05:30",
    category: "STARTUP",
    venue: "Chennai",
    type: "LEAGUE",
    teams: { a: "Alpha Startups", b: "Beta Builders" },
    status: "UPCOMING",
  },
  {
    id: "m2",
    datetime: "2025-02-10T14:00:00+05:30",
    category: "PROFESSIONAL",
    venue: "Salem",
    type: "LEAGUE",
    teams: { a: "Pro Warriors", b: "Tech Titans" },
    status: "LIVE",
  },
];

const Schedule = () => {
  const [filters, setFilters] = useState<Filters>({ category: "ALL", date: undefined, teamQuery: "" });

  const rows = useMemo(() => {
    return demo.filter((m) => {
      const matchesCategory = filters.category === "ALL" || m.category === filters.category;
      const matchesTeam = `${m.teams.a} ${m.teams.b}`.toLowerCase().includes(filters.teamQuery.toLowerCase());
      const matchesDate = !filters.date || new Date(m.datetime).toDateString() === filters.date.toDateString();
      return matchesCategory && matchesTeam && matchesDate;
    });
  }, [filters]);

  return (
    <main>
      <SEO
        title="Match Schedule"
        description="Browse the TNGSS Startup Cricket League match schedule by category and date."
        canonical="/schedule"
      />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Match Schedule</h1>

        <ScheduleFilters value={filters} onChange={setFilters} />

        <div className="mt-6 bg-card border border-border rounded-lg shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date & Time</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Teams</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((m) => (
                <TableRow key={m.id}>
                  <TableCell>{new Date(m.datetime).toLocaleString()}</TableCell>
                  <TableCell>{m.category}</TableCell>
                  <TableCell>{m.venue}</TableCell>
                  <TableCell>{m.type}</TableCell>
                  <TableCell>
                    {m.teams.a} vs {m.teams.b}
                  </TableCell>
                  <TableCell>{m.status}</TableCell>
                  <TableCell className="text-right">
                    <Link to={`/live/${m.id}`} className="text-primary hover:underline">
                      {m.status === "LIVE" ? "Watch Live" : "Details"}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
};

export default Schedule;
