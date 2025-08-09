import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import ScheduleFilters, { Filters } from "@/components/schedule/ScheduleFilters";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MatchRow {
  id: string;
  datetime: string; // ISO
  category: "STARTUP" | "PROFESSIONAL";
  venue: string;
  type: "LEAGUE" | "KNOCKOUT" | "SEMI" | "FINAL";
  teams: { 
    a: { name: string; logo?: string }; 
    b: { name: string; logo?: string } 
  };
  status: "UPCOMING" | "LIVE" | "COMPLETED";
}

const demo: MatchRow[] = [
  {
    id: "m1",
    datetime: "2025-08-22T16:00:00+05:30",
    category: "STARTUP",
    venue: "Sri Shanmugha College Ground",
    type: "LEAGUE",
    teams: { 
      a: { name: "Alpha Startups", logo: "AS" }, 
      b: { name: "Beta Builders", logo: "BB" } 
    },
    status: "UPCOMING",
  },
  {
    id: "m2",
    datetime: "2025-08-22T14:00:00+05:30",
    category: "PROFESSIONAL",
    venue: "Sri Shanmugha College Ground",
    type: "LEAGUE",
    teams: { 
      a: { name: "Pro Warriors", logo: "PW" }, 
      b: { name: "Tech Titans", logo: "TT" } 
    },
    status: "LIVE",
  },
  {
    id: "m3",
    datetime: "2025-08-21T10:00:00+05:30",
    category: "STARTUP",
    venue: "Sri Shanmugha College Ground",
    type: "LEAGUE",
    teams: { 
      a: { name: "Code Ninjas", logo: "CN" }, 
      b: { name: "Data Devils", logo: "DD" } 
    },
    status: "COMPLETED",
  },
  {
    id: "m4",
    datetime: "2025-08-23T16:00:00+05:30",
    category: "PROFESSIONAL",
    venue: "Sri Shanmugha College Ground",
    type: "KNOCKOUT",
    teams: { 
      a: { name: "Elite Eagles", logo: "EE" }, 
      b: { name: "Speed Demons", logo: "SD" } 
    },
    status: "UPCOMING",
  },
];

const Schedule = () => {
  const [filters, setFilters] = useState<Filters>({ category: "ALL", date: undefined, teamQuery: "" });
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  const rows = useMemo(() => {
    return demo.filter((m) => {
      const matchesCategory = filters.category === "ALL" || m.category === filters.category;
      const matchesTeam = `${m.teams.a.name} ${m.teams.b.name}`.toLowerCase().includes(filters.teamQuery.toLowerCase());
      const matchesDate = !filters.date || new Date(m.datetime).toDateString() === filters.date.toDateString();
      return matchesCategory && matchesTeam && matchesDate;
    });
  }, [filters]);

  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }) + ', ' + date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      UPCOMING: "secondary",
      LIVE: "destructive",
      COMPLETED: "default"
    } as const;
    return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>;
  };

  const getTypeBadge = (type: string) => {
    const variants = {
      LEAGUE: "outline",
      KNOCKOUT: "secondary",
      SEMI: "default",
      FINAL: "destructive"
    } as const;
    return <Badge variant={variants[type as keyof typeof variants]}>{type}</Badge>;
  };

  return (
    <main>
      <SEO
        title="Match Schedule"
        description="Browse the TNGSS Startup Cricket League match schedule by category and date."
        canonical="/schedule"
      />
      <section className="container max-w-[1200px] mx-auto py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-foreground">Match Schedule</h1>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "table" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("table")}
            >
              Table View
            </Button>
            <Button
              variant={viewMode === "card" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("card")}
            >
              Card View
            </Button>
          </div>
        </div>

        <ScheduleFilters value={filters} onChange={setFilters} />

        {viewMode === "table" ? (
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
                    <TableCell className="font-medium">{formatDateTime(m.datetime)}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{m.category}</Badge>
                    </TableCell>
                    <TableCell>{m.venue}</TableCell>
                    <TableCell>{getTypeBadge(m.type)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                            {m.teams.a.logo || m.teams.a.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium">{m.teams.a.name}</span>
                        </div>
                        <span className="text-muted-foreground">vs</span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                            {m.teams.b.logo || m.teams.b.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium">{m.teams.b.name}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(m.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        {m.status === "LIVE" && (
                          <Link to={`/live/${m.id}`}>
                            <Button size="sm" variant="destructive">Watch Live</Button>
                          </Link>
                        )}
                        <Link to={`/live/${m.id}`}>
                          <Button size="sm" variant="outline">
                            {m.status === "COMPLETED" ? "View Scorecard" : "Details"}
                          </Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rows.map((m) => (
              <Card key={m.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{formatDateTime(m.datetime)}</CardTitle>
                    {getStatusBadge(m.status)}
                  </div>
                  <div className="flex items-center gap-2">
                    {getTypeBadge(m.type)}
                    <Badge variant="outline">{m.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <strong>Venue:</strong> {m.venue}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                          {m.teams.a.logo || m.teams.a.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium">{m.teams.a.name}</span>
                      </div>
                      <span className="text-muted-foreground font-medium">vs</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{m.teams.b.name}</span>
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                          {m.teams.b.logo || m.teams.b.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      {m.status === "LIVE" && (
                        <Link to={`/live/${m.id}`} className="flex-1">
                          <Button size="sm" variant="destructive" className="w-full">Watch Live</Button>
                        </Link>
                      )}
                      <Link to={`/live/${m.id}`} className="flex-1">
                        <Button size="sm" variant="outline" className="w-full">
                          {m.status === "COMPLETED" ? "View Scorecard" : "Details"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Schedule;
