// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import SEO from "@/components/seo/SEO";
// import ScheduleFilters, { Filters } from "@/components/schedule/ScheduleFilters";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// interface MatchRow {
//   id: string;
//   datetime: string; // ISO
//   category: "STARTUP" | "PROFESSIONAL";
//   venue: string;
//   type: "LEAGUE" | "KNOCKOUT" | "SEMI" | "FINAL";
//   teams: { 
//     a: { name: string; logo?: string }; 
//     b: { name: string; logo?: string } 
//   };
//   status: "UPCOMING" | "LIVE" | "COMPLETED";
// }

// const demo: MatchRow[] = [
//   {
//     id: "m1",
//     datetime: "2025-08-22T16:00:00+05:30",
//     category: "STARTUP",
//     venue: "Sri Shanmugha College Ground",
//     type: "LEAGUE",
//     teams: { 
//       a: { name: "Alpha Startups", logo: "AS" }, 
//       b: { name: "Beta Builders", logo: "BB" } 
//     },
//     status: "UPCOMING",
//   },
//   {
//     id: "m2",
//     datetime: "2025-08-22T14:00:00+05:30",
//     category: "PROFESSIONAL",
//     venue: "Sri Shanmugha College Ground",
//     type: "LEAGUE",
//     teams: { 
//       a: { name: "Pro Warriors", logo: "PW" }, 
//       b: { name: "Tech Titans", logo: "TT" } 
//     },
//     status: "LIVE",
//   },
//   {
//     id: "m3",
//     datetime: "2025-08-21T10:00:00+05:30",
//     category: "STARTUP",
//     venue: "Sri Shanmugha College Ground",
//     type: "LEAGUE",
//     teams: { 
//       a: { name: "Code Ninjas", logo: "CN" }, 
//       b: { name: "Data Devils", logo: "DD" } 
//     },
//     status: "COMPLETED",
//   },
//   {
//     id: "m4",
//     datetime: "2025-08-23T16:00:00+05:30",
//     category: "PROFESSIONAL",
//     venue: "Sri Shanmugha College Ground",
//     type: "KNOCKOUT",
//     teams: { 
//       a: { name: "Elite Eagles", logo: "EE" }, 
//       b: { name: "Speed Demons", logo: "SD" } 
//     },
//     status: "UPCOMING",
//   },
// ];

// const Schedule = () => {
//   const [filters, setFilters] = useState<Filters>({ category: "ALL", date: undefined, teamQuery: "" });
//   const [viewMode, setViewMode] = useState<"table" | "card">("table");

//   const rows = useMemo(() => {
//     return demo.filter((m) => {
//       const matchesCategory = filters.category === "ALL" || m.category === filters.category;
//       const matchesTeam = `${m.teams.a.name} ${m.teams.b.name}`.toLowerCase().includes(filters.teamQuery.toLowerCase());
//       const matchesDate = !filters.date || new Date(m.datetime).toDateString() === filters.date.toDateString();
//       return matchesCategory && matchesTeam && matchesDate;
//     });
//   }, [filters]);

//   const formatDateTime = (datetime: string) => {
//     const date = new Date(datetime);
//     return date.toLocaleDateString('en-US', { 
//       day: 'numeric', 
//       month: 'long', 
//       year: 'numeric' 
//     }) + ', ' + date.toLocaleTimeString('en-US', { 
//       hour: '2-digit', 
//       minute: '2-digit',
//       hour12: true 
//     });
//   };

//   const getStatusBadge = (status: string) => {
//     const variants = {
//       UPCOMING: "secondary",
//       LIVE: "destructive",
//       COMPLETED: "default"
//     } as const;
//     return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>;
//   };

//   const getTypeBadge = (type: string) => {
//     const variants = {
//       LEAGUE: "outline",
//       KNOCKOUT: "secondary",
//       SEMI: "default",
//       FINAL: "destructive"
//     } as const;
//     return <Badge variant={variants[type as keyof typeof variants]}>{type}</Badge>;
//   };

//   return (
//     <main>
//       <SEO
//         title="Match Schedule"
//         description="Browse the TNGSS Startup Cricket League match schedule by category and date."
//         canonical="/schedule"
//       />
//       <section className="container max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-4xl font-bold text-foreground">Match Schedule</h1>
//           <div className="flex gap-2">
//             <Button
//               variant={viewMode === "table" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setViewMode("table")}
//             >
//               Table View
//             </Button>
//             <Button
//               variant={viewMode === "card" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setViewMode("card")}
//             >
//               Card View
//             </Button>
//           </div>
//         </div>

//         <ScheduleFilters value={filters} onChange={setFilters} />

//         {viewMode === "table" ? (
//           <div className="mt-6 bg-card border border-border rounded-lg shadow-sm overflow-hidden">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Date & Time</TableHead>
//                   <TableHead>Category</TableHead>
//                   <TableHead>Venue</TableHead>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Teams</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {rows.map((m) => (
//                   <TableRow key={m.id}>
//                     <TableCell className="font-medium">{formatDateTime(m.datetime)}</TableCell>
//                     <TableCell>
//                       <Badge variant="outline">{m.category}</Badge>
//                     </TableCell>
//                     <TableCell>{m.venue}</TableCell>
//                     <TableCell>{getTypeBadge(m.type)}</TableCell>
//                     <TableCell>
//                       <div className="flex items-center gap-2">
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
//                             {m.teams.a.logo || m.teams.a.name.split(' ').map(n => n[0]).join('')}
//                           </div>
//                           <span className="font-medium">{m.teams.a.name}</span>
//                         </div>
//                         <span className="text-muted-foreground">vs</span>
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
//                             {m.teams.b.logo || m.teams.b.name.split(' ').map(n => n[0]).join('')}
//                           </div>
//                           <span className="font-medium">{m.teams.b.name}</span>
//                         </div>
//                       </div>
//                     </TableCell>
//                     <TableCell>{getStatusBadge(m.status)}</TableCell>
//                     <TableCell className="text-right">
//                       <div className="flex gap-2 justify-end">
//                         {m.status === "LIVE" && (
//                           <Link to={`/live/${m.id}`}>
//                             <Button size="sm" variant="destructive">Watch Live</Button>
//                           </Link>
//                         )}
//                         <Link to={`/live/${m.id}`}>
//                           <Button size="sm" variant="outline">
//                             {m.status === "COMPLETED" ? "View Scorecard" : "Details"}
//                           </Button>
//                         </Link>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         ) : (
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {rows.map((m) => (
//               <Card key={m.id} className="hover:shadow-md transition-shadow">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg">{formatDateTime(m.datetime)}</CardTitle>
//                     {getStatusBadge(m.status)}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {getTypeBadge(m.type)}
//                     <Badge variant="outline">{m.category}</Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="text-sm text-muted-foreground">
//                       <strong>Venue:</strong> {m.venue}
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
//                           {m.teams.a.logo || m.teams.a.name.split(' ').map(n => n[0]).join('')}
//                         </div>
//                         <span className="font-medium">{m.teams.a.name}</span>
//                       </div>
//                       <span className="text-muted-foreground font-medium">vs</span>
//                       <div className="flex items-center gap-2">
//                         <span className="font-medium">{m.teams.b.name}</span>
//                         <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
//                           {m.teams.b.logo || m.teams.b.name.split(' ').map(n => n[0]).join('')}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex gap-2 pt-2">
//                       {m.status === "LIVE" && (
//                         <Link to={`/live/${m.id}`} className="flex-1">
//                           <Button size="sm" variant="destructive" className="w-full">Watch Live</Button>
//                         </Link>
//                       )}
//                       <Link to={`/live/${m.id}`} className="flex-1">
//                         <Button size="sm" variant="outline" className="w-full">
//                           {m.status === "COMPLETED" ? "View Scorecard" : "Details"}
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Schedule;


import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
// ScheduleFilters import is no longer needed
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // For the new search filter

// Interface remains the same
interface MatchRow {
  id: string;
  datetime: string; // ISO
  category: "STARTUP";
  venue: string;
  type: "LEAGUE" | "KNOCKOUT" | "SEMI" | "FINAL";
  teams: { 
    a: { name: string; logo?: string }; 
    b: { name: string; logo?: string } 
  };
  status: "UPCOMING" | "LIVE" | "COMPLETED";
}

// Added more data for a more realistic schedule
const demo: MatchRow[] = [
  {
    id: "m1",
    datetime: "2025-08-22T16:00:00+05:30",
    category: "STARTUP",
    venue: "Shanmugha Main Ground",
    type: "LEAGUE",
    teams: { a: { name: "Alpha Startups", logo: "AS" }, b: { name: "Beta Builders", logo: "BB" } },
    status: "UPCOMING",
  },
  {
    id: "m2",
    datetime: "2025-08-22T18:00:00+05:30",
    category: "STARTUP",
    venue: "Shanmugha Nets",
    type: "LEAGUE",
    teams: { a: { name: "Pixel Pioneers", logo: "PP" }, b: { name: "Quantum Coders", logo: "QC" } },
    status: "UPCOMING",
  },
  {
    id: "m3",
    datetime: "2025-08-21T10:00:00+05:30",
    category: "STARTUP",
    venue: "Shanmugha Main Ground",
    type: "LEAGUE",
    teams: { a: { name: "Code Ninjas", logo: "CN" }, b: { name: "Data Devils", logo: "DD" } },
    status: "COMPLETED",
  },
  {
    id: "m4",
    datetime: "2025-08-20T16:00:00+05:30",
    category: "STARTUP",
    venue: "Shanmugha Main Ground",
    type: "LEAGUE",
    teams: { a: { name: "Venture Vipers", logo: "VV" }, b: { name: "Agile Avengers", logo: "AA" } },
    status: "COMPLETED",
  },
];

// Simplified Filters interface
interface Filters {
  teamQuery: string;
  date: Date | undefined;
}

const Schedule = () => {
  const [filters, setFilters] = useState<Filters>({ teamQuery: "", date: undefined });
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  const rows = useMemo(() => {
    // Sort matches by date, most recent first
    const sortedDemo = demo.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());
    return sortedDemo.filter((m) => {
      const matchesTeam = `${m.teams.a.name} ${m.teams.b.name}`.toLowerCase().includes(filters.teamQuery.toLowerCase());
      // Date filtering logic can be added here if a date picker is implemented
      return matchesTeam;
    });
  }, [filters]);

  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime);
    return {
      date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
    };
  };

  const getStatusBadge = (status: MatchRow['status']) => {
    const variants = {
      UPCOMING: "secondary",
      LIVE: "destructive",
      COMPLETED: "default"
    } as const;
    return <Badge variant={variants[status]} className={status === 'LIVE' ? 'animate-pulse' : ''}>{status}</Badge>;
  };

  const getTypeBadge = (type: MatchRow['type']) => {
    const variants = {
      LEAGUE: "outline",
      KNOCKOUT: "secondary",
      SEMI: "default",
      FINAL: "destructive"
    } as const;
    return <Badge variant={variants[type]}>{type}</Badge>;
  };

  return (
    <main className="bg-secondary/20">
      <SEO
        title="Match Schedule"
        description="Browse the TNGSS Startup Cricket League match schedule."
        canonical="/schedule"
      />
      <section className="container max-w-[1200px] mx-auto py-10">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <h1 className="text-4xl font-bold text-foreground">Match Schedule</h1>
            <div className="flex items-center gap-2">
              <Button variant={viewMode === 'table' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('table')}>Table</Button>
              <Button variant={viewMode === 'card' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('card')}>Cards</Button>
            </div>
          </div>

          {/* Integrated Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search by team name..."
                className="pl-10"
                value={filters.teamQuery}
                onChange={(e) => setFilters({ ...filters, teamQuery: e.target.value })}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>
            {/* Date picker can be added here */}
          </div>

          {/* Content Area */}
          {viewMode === "table" ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Match</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((m) => {
                    const { date, time } = formatDateTime(m.datetime);
                    return (
                      <TableRow key={m.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div className="font-medium">{date}</div>
                          <div className="text-sm text-muted-foreground">{time}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 font-semibold">
                              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">{m.teams.a.logo}</div>
                              {m.teams.a.name}
                            </div>
                            <span className="text-muted-foreground text-xs">vs</span>
                            <div className="flex items-center gap-2 font-semibold">
                              {m.teams.b.name}
                              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">{m.teams.b.logo}</div>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{m.venue}</div>
                        </TableCell>
                        <TableCell>{getTypeBadge(m.type)}</TableCell>
                        <TableCell>{getStatusBadge(m.status)}</TableCell>
                        <TableCell className="text-right">
                          <Link to={`/live/${m.id}`}>
                            <Button size="sm" variant={m.status === 'LIVE' ? 'destructive' : 'outline'}>
                              {m.status === 'LIVE' ? 'Watch' : m.status === 'COMPLETED' ? 'Scorecard' : 'Details'}
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rows.map((m) => (
                <Card key={m.id} className="flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-muted-foreground">{formatDateTime(m.datetime).date}</div>
                      {getStatusBadge(m.status)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg text-foreground">{m.teams.a.name}</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="font-bold text-lg text-foreground">{m.teams.b.name}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-4">
                      <strong>Venue:</strong> {m.venue}
                    </div>
                    <div className="flex gap-2 pt-2 border-t border-border">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Schedule;
