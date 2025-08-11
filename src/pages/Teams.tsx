// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import SEO from "@/components/seo/SEO";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// interface Team {
//   id: string;
//   name: string;
//   category: "STARTUP" | "PROFESSIONAL";
//   logo?: string;
//   zone?: string;
//   district?: string;
// }

// const data: Team[] = [
//   { id: "startup-1", name: "Alpha Startups", category: "STARTUP", logo: "AS", zone: "Chennai", district: "Chennai" },
//   { id: "startup-2", name: "Beta Builders", category: "STARTUP", logo: "BB", zone: "Coimbatore", district: "Coimbatore" },
//   { id: "startup-3", name: "Code Ninjas", category: "STARTUP", logo: "CN", zone: "Madurai", district: "Madurai" },
//   { id: "startup-4", name: "Data Devils", category: "STARTUP", logo: "DD", zone: "Salem", district: "Salem" },
//   { id: "startup-5", name: "Echo Engineers", category: "STARTUP", logo: "EE", zone: "Trichy", district: "Trichy" },
//   { id: "startup-6", name: "Fusion Founders", category: "STARTUP", logo: "FF", zone: "Vellore", district: "Vellore" },
//   { id: "startup-7", name: "Gamma Geeks", category: "STARTUP", logo: "GG", zone: "Erode", district: "Erode" },
//   { id: "startup-8", name: "Hive Hackers", category: "STARTUP", logo: "HH", zone: "Tiruppur", district: "Tiruppur" },
//   { id: "pro-1", name: "Pro Warriors", category: "PROFESSIONAL", logo: "PW", zone: "Chennai", district: "Chennai" },
//   { id: "pro-2", name: "Tech Titans", category: "PROFESSIONAL", logo: "TT", zone: "Coimbatore", district: "Coimbatore" },
//   { id: "pro-3", name: "Elite Eagles", category: "PROFESSIONAL", logo: "EE", zone: "Madurai", district: "Madurai" },
//   { id: "pro-4", name: "Speed Demons", category: "PROFESSIONAL", logo: "SD", zone: "Salem", district: "Salem" },
//   { id: "pro-5", name: "Power Players", category: "PROFESSIONAL", logo: "PP", zone: "Trichy", district: "Trichy" },
//   { id: "pro-6", name: "Velocity Vipers", category: "PROFESSIONAL", logo: "VV", zone: "Vellore", district: "Vellore" },
//   { id: "pro-7", name: "Thunder Tigers", category: "PROFESSIONAL", logo: "TT", zone: "Erode", district: "Erode" },
//   { id: "pro-8", name: "Lightning Lions", category: "PROFESSIONAL", logo: "LL", zone: "Tiruppur", district: "Tiruppur" },
// ];

// const Teams = () => {
//   const [category, setCategory] = useState<"ALL" | "STARTUP" | "PROFESSIONAL">("ALL");

//   const teams = useMemo(() => {
//     return data.filter((t) => (category === "ALL" ? true : t.category === category));
//   }, [category]);

//   const getCategoryBadge = (category: string) => {
//     return (
//       <Badge variant={category === "STARTUP" ? "default" : "secondary"}>
//         {category}
//       </Badge>
//     );
//   };

//   return (
//     <main>
//       <SEO title="Teams" description="Explore Startup and Professional teams in the TNGSS Startup Cricket League." canonical="/teams" />
//       <section className="container max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-4xl font-bold text-foreground mb-2">Teams</h1>
//             <p className="text-muted-foreground">Discover all teams participating in the TNGSS Startup Cricket League</p>
//           </div>
//           <Select value={category} onValueChange={(v) => setCategory(v as any)}>
//             <SelectTrigger className="w-[200px]">
//               <SelectValue placeholder="Filter by Category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="ALL">All Categories</SelectItem>
//               <SelectItem value="STARTUP">Startup</SelectItem>
//               <SelectItem value="PROFESSIONAL">Professional</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {teams.map((team) => (
//             <Card key={team.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
//               <CardHeader className="pb-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-xl font-bold text-primary">
//                     {team.logo || team.name.split(" ").map((x) => x[0]).join("")}
//                   </div>
//                   {getCategoryBadge(team.category)}
//                 </div>
//                 <CardTitle className="text-lg">{team.name}</CardTitle>
//                 {team.zone && (
//                   <p className="text-sm text-muted-foreground">
//                     {team.zone}, {team.district}
//                   </p>
//                 )}
//               </CardHeader>
//               <CardContent>
//                 <Link to={`/teams/${team.id}`} className="w-full">
//                   <Button className="w-full" variant="outline">
//                     View Team
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {teams.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-muted-foreground">No teams found for the selected category.</p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Teams;


import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Team {
  id: string;
  name: string;
  category: "STARTUP" | "PROFESSIONAL";
  logo?: string;
  zone?: string;
  district?: string;
}

const data: Team[] = [
  { id: "startup-1", name: "Alpha Startups", category: "STARTUP", logo: "AS", zone: "Chennai", district: "Chennai" },
  { id: "startup-2", name: "Beta Builders", category: "STARTUP", logo: "BB", zone: "Coimbatore", district: "Coimbatore" },
  { id: "startup-3", name: "Code Ninjas", category: "STARTUP", logo: "CN", zone: "Madurai", district: "Madurai" },
  { id: "startup-4", name: "Data Devils", category: "STARTUP", logo: "DD", zone: "Salem", district: "Salem" },
  { id: "startup-5", name: "Echo Engineers", category: "STARTUP", logo: "EE", zone: "Trichy", district: "Trichy" },
  { id: "startup-6", name: "Fusion Founders", category: "STARTUP", logo: "FF", zone: "Vellore", district: "Vellore" },
  { id: "startup-7", name: "Gamma Geeks", category: "STARTUP", logo: "GG", zone: "Erode", district: "Erode" },
  { id: "startup-8", name: "Hive Hackers<:string>", category: "STARTUP", logo: "HH", zone: "Tiruppur", district: "Tiruppur" },
  { id: "pro-1", name: "Pro Warriors", category: "PROFESSIONAL", logo: "PW", zone: "Chennai", district: "Chennai" },
  { id: "pro-2", name: "Tech Titans", category: "PROFESSIONAL", logo: "TT", zone: "Coimbatore", district: "Coimbatore" },
  { id: "pro-3", name: "Elite Eagles", category: "PROFESSIONAL", logo: "EE", zone: "Madurai", district: "Madurai" },
  { id: "pro-4", name: "Speed Demons", category: "PROFESSIONAL", logo: "SD", zone: "Salem", district: "Salem" },
  { id: "pro-5", name: "Power Players", category: "PROFESSIONAL", logo: "PP", zone: "Trichy", district: "Trichy" },
  { id: "pro-6", name: "Velocity Vipers", category: "PROFESSIONAL", logo: "VV", zone: "Vellore", district: "Vellore" },
  { id: "pro-7", name: "Thunder Tigers", category: "PROFESSIONAL", logo: "TT", zone: "Erode", district: "Erode" },
  { id: "pro-8", name: "Lightning Lions", category: "PROFESSIONAL", logo: "LL", zone: "Tiruppur", district: "Tiruppur" },
];

const Teams = () => {
  const [filters, setFilters] = useState<{ teamQuery: string }>({ teamQuery: "" });

  const teams = useMemo(() => {
    return data.filter((t) =>
      t.name.toLowerCase().includes(filters.teamQuery.toLowerCase())
    );
  }, [filters.teamQuery]);

  const getCategoryBadge = (category: string) => {
    return (
      <Badge variant={category === "STARTUP" ? "default" : "secondary"}>
        {category}
      </Badge>
    );
  };

  return (
    <main>
      <SEO title="Teams" description="Explore Startup and Professional teams in the TNGSS Startup Cricket League." canonical="/teams" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Teams</h1>
            <p className="text-muted-foreground">Discover all teams participating in the TNGSS Startup Cricket League</p>
          </div>
          <div className="relative flex-grow max-w-[300px]">
            <Input
              type="text"
              placeholder="Search by team name..."
              className="pl-10"
              value={filters.teamQuery}
              onChange={(e) => setFilters({ ...filters, teamQuery: e.target.value })}
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <Card key={team.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-xl font-bold text-primary">
                    {team.logo || team.name.split(" ").map((x) => x[0]).join("")}
                  </div>
                  {getCategoryBadge(team.category)}
                </div>
                <CardTitle className="text-lg">{team.name}</CardTitle>
                {team.zone && (
                  <p className="text-sm text-muted-foreground">
                    {team.zone}, {team.district}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <Link to={`/teams/${team.id}`} className="w-full">
                  <Button className="w-full" variant="outline">
                    View Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {teams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No teams found for the search query.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Teams;