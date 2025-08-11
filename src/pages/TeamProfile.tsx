// import { useParams } from "react-router-dom";
// import SEO from "@/components/seo/SEO";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// interface Player {
//   id: string;
//   name: string;
//   role: "Batsman" | "Bowler" | "All-rounder" | "Wicketkeeper";
//   photo?: string;
//   isCaptain?: boolean;
//   isViceCaptain?: boolean;
// }

// interface TeamStaff {
//   coach: string;
//   captain: string;
//   manager: string;
// }

// interface Team {
//   id: string;
//   name: string;
//   category: "STARTUP" | "PROFESSIONAL";
//   logo?: string;
//   zone?: string;
//   district?: string;
//   staff: TeamStaff;
//   players: Player[];
// }

// // Mock data - in real app this would come from API
// const getTeamData = (teamId: string): Team | null => {
//   const teams: Record<string, Team> = {
//     "startup-1": {
//       id: "startup-1",
//       name: "Alpha Startups",
//       category: "STARTUP",
//       logo: "AS",
//       zone: "Chennai",
//       district: "Chennai",
//       staff: {
//         coach: "Rahul Sharma",
//         captain: "Arjun Kumar",
//         manager: "Priya Patel"
//       },
//       players: [
//         { id: "p1", name: "Arjun Kumar", role: "All-rounder", isCaptain: true },
//         { id: "p2", name: "Vikram Singh", role: "Batsman", isViceCaptain: true },
//         { id: "p3", name: "Rahul Mehta", role: "Bowler" },
//         { id: "p4", name: "Suresh Kumar", role: "Wicketkeeper" },
//         { id: "p5", name: "Amit Patel", role: "Batsman" },
//         { id: "p6", name: "Deepak Sharma", role: "Bowler" },
//         { id: "p7", name: "Rajesh Verma", role: "All-rounder" },
//         { id: "p8", name: "Manoj Gupta", role: "Batsman" },
//         { id: "p9", name: "Sanjay Kumar", role: "Bowler" },
//         { id: "p10", name: "Prakash Singh", role: "All-rounder" },
//         { id: "p11", name: "Anil Kumar", role: "Batsman" },
//         { id: "p12", name: "Sunil Verma", role: "Bowler" },
//         { id: "p13", name: "Ramesh Patel", role: "Wicketkeeper" },
//         { id: "p14", name: "Dinesh Sharma", role: "All-rounder" },
//         { id: "p15", name: "Kishan Kumar", role: "Batsman" }
//       ]
//     },
//     "pro-1": {
//       id: "pro-1",
//       name: "Pro Warriors",
//       category: "PROFESSIONAL",
//       logo: "PW",
//       zone: "Chennai",
//       district: "Chennai",
//       staff: {
//         coach: "Venkatesh Prasad",
//         captain: "Surya Kumar",
//         manager: "Anjali Desai"
//       },
//       players: [
//         { id: "p1", name: "Surya Kumar", role: "Batsman", isCaptain: true },
//         { id: "p2", name: "Rohit Sharma", role: "Batsman", isViceCaptain: true },
//         { id: "p3", name: "Jasprit Bumrah", role: "Bowler" },
//         { id: "p4", name: "MS Dhoni", role: "Wicketkeeper" },
//         { id: "p5", name: "Virat Kohli", role: "Batsman" },
//         { id: "p6", name: "Ravindra Jadeja", role: "All-rounder" },
//         { id: "p7", name: "Hardik Pandya", role: "All-rounder" },
//         { id: "p8", name: "KL Rahul", role: "Batsman" },
//         { id: "p9", name: "Mohammed Shami", role: "Bowler" },
//         { id: "p10", name: "Rishabh Pant", role: "Wicketkeeper" },
//         { id: "p11", name: "Shreyas Iyer", role: "Batsman" },
//         { id: "p12", name: "Yuzvendra Chahal", role: "Bowler" },
//         { id: "p13", name: "Ishan Kishan", role: "Wicketkeeper" },
//         { id: "p14", name: "Axar Patel", role: "All-rounder" },
//         { id: "p15", name: "Arshdeep Singh", role: "Bowler" }
//       ]
//     }
//   };

//   return teams[teamId] || null;
// };

// const TeamProfile = () => {
//   const { teamId } = useParams();
//   const team = teamId ? getTeamData(teamId) : null;

//   if (!team) {
//     return (
//       <main>
//         <SEO title="Team Not Found" description="Team not found." canonical={`/teams/${teamId ?? ''}`} />
//         <section className="container max-w-[1200px] mx-auto py-10">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-foreground mb-4">Team Not Found</h1>
//             <p className="text-muted-foreground">The team you're looking for doesn't exist.</p>
//           </div>
//         </section>
//       </main>
//     );
//   }

//   const getRoleBadge = (role: string) => {
//     const variants = {
//       "Batsman": "default",
//       "Bowler": "secondary",
//       "All-rounder": "outline",
//       "Wicketkeeper": "destructive"
//     } as const;
//     return <Badge variant={variants[role as keyof typeof variants]}>{role}</Badge>;
//   };

//   const getCategoryBadge = (category: string) => {
//     return (
//       <Badge variant={category === "STARTUP" ? "default" : "secondary"}>
//         {category}
//       </Badge>
//     );
//   };

//   return (
//     <main>
//       <SEO 
//         title={`${team.name} - Team Profile`} 
//         description={`${team.name} team profile, players, and staff information in the TNGSS Startup Cricket League.`} 
//         canonical={`/teams/${teamId ?? ''}`} 
//       />
//       <section className="container max-w-[1200px] mx-auto py-10">
//         {/* Header */}
//         <header className="mb-8">
//           <div className="flex items-center gap-6 mb-4">
//             <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-3xl font-bold text-primary">
//               {team.logo || team.name.split(" ").map((x) => x[0]).join("")}
//             </div>
//             <div>
//               <h1 className="text-4xl font-bold text-foreground mb-2">{team.name}</h1>
//               <div className="flex items-center gap-4">
//                 {getCategoryBadge(team.category)}
//                 {team.zone && (
//                   <span className="text-muted-foreground">
//                     {team.zone}, {team.district}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Team Staff */}
//           <Card className="md:col-span-1">
//             <CardHeader>
//               <CardTitle>Team Staff</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-foreground">Coach</h4>
//                   <p className="text-muted-foreground">{team.staff.coach}</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Captain</h4>
//                   <p className="text-muted-foreground">{team.staff.captain}</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Manager</h4>
//                   <p className="text-muted-foreground">{team.staff.manager}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Players Grid */}
//           <div className="md:col-span-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Players ({team.players.length})</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {team.players.map((player) => (
//                     <div key={player.id} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
//                       <Avatar className="w-12 h-12">
//                         <AvatarImage src={player.photo} alt={player.name} />
//                         <AvatarFallback className="text-sm font-semibold">
//                           {player.name.split(" ").map((n) => n[0]).join("")}
//                         </AvatarFallback>
//                       </Avatar>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h4 className="font-medium text-foreground truncate">{player.name}</h4>
//                           {player.isCaptain && (
//                             <Badge variant="destructive" className="text-xs">Captain</Badge>
//                           )}
//                           {player.isViceCaptain && (
//                             <Badge variant="outline" className="text-xs">Vice-Captain</Badge>
//                           )}
//                         </div>
//                         {getRoleBadge(player.role)}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default TeamProfile;



import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// --- INTERFACES ---
interface Player {
  id: string;
  name: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicketkeeper";
  photo?: string;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
  startupName: string;
  designation: string;
}

interface TeamStaff {
  coach: string;
  captain: string;
  manager: string;
}

interface Team {
  id: string;
  name: string;
  category: "STARTUP";
  logo?: string;
  zone?: string;
  district?: string;
  staff: TeamStaff;
  players: Player[];
}

// --- MOCK DATA ---
const getTeamData = (teamId: string): Team | null => {
  const teams: Record<string, Team> = {
    "startup-1": {
      id: "startup-1",
      name: "Alpha Startups",
      category: "STARTUP",
      logo: "AS",
      zone: "Chennai",
      district: "Chennai",
      staff: {
        coach: "Rahul Sharma",
        captain: "Arjun Kumar",
        manager: "Priya Patel"
      },
      players: [
        { id: "p1", name: "Arjun Kumar", role: "All-rounder", isCaptain: true, photo: "https://placehold.co/100x100/18181b/fafafa?text=AK", startupName: "Innovate Inc.", designation: "Founder & CEO" },
        { id: "p2", name: "Vikram Singh", role: "Batsman", isViceCaptain: true, photo: "https://placehold.co/100x100/27272a/fafafa?text=VS", startupName: "TechGenius", designation: "Lead Developer" },
        { id: "p3", name: "Rahul Mehta", role: "Bowler", photo: "https://placehold.co/100x100/52525b/fafafa?text=RM", startupName: "MarketMinds", designation: "Marketing Head" },
        { id: "p4", name: "Suresh Kumar", role: "Wicketkeeper", photo: "https://placehold.co/100x100/71717a/fafafa?text=SK", startupName: "FinFlow", designation: "CFO" },
        { id: "p5", name: "Amit Patel", role: "Batsman", photo: "https://placehold.co/100x100/a1a1aa/fafafa?text=AP", startupName: "DataDriven", designation: "Data Scientist" },
        { id: "p6", name: "Deepak Sharma", role: "Bowler", photo: "https://placehold.co/100x100/18181b/fafafa?text=DS", startupName: "ConnectSphere", designation: "Community Manager" },
      ]
    },
    "startup-2": {
        id: "startup-2",
        name: "Beta Builders",
        category: "STARTUP",
        logo: "BB",
        zone: "Coimbatore",
        district: "Coimbatore",
        staff: {
          coach: "Anil Kumble",
          captain: "Ganesh Kumar",
          manager: "Sunita Reddy"
        },
        players: [
          { id: "p1", name: "Ganesh Kumar", role: "Batsman", isCaptain: true, photo: "https://placehold.co/100x100/18181b/fafafa?text=GK", startupName: "BuildIt", designation: "CEO" },
          { id: "p2", name: "Hari Prasad", role: "Bowler", isViceCaptain: true, photo: "https://placehold.co/100x100/27272a/fafafa?text=HP", startupName: "ScaleFast", designation: "CTO" },
        ]
      },
  };

  return teams[teamId] || null;
};


// --- Player Modal Component (UI/UX Enhanced) ---
const PlayerModal = ({ player, onClose }: { player: Player; onClose: () => void; }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-card rounded-xl shadow-2xl w-full max-w-sm border border-border m-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="p-10 text-center">
          <Avatar className="w-32 h-32 mb-6 mx-auto border-4 border-primary/50">
            <AvatarImage src={player.photo} alt={player.name} />
            <AvatarFallback className="text-4xl font-bold bg-muted text-muted-foreground">
              {player.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-3xl font-bold text-foreground">{player.name}</h3>
          <p className="text-primary font-semibold mb-6">{player.role}</p>
          <div className="my-4 h-px bg-border"></div>
          <p className="text-xl font-semibold text-foreground">{player.startupName}</p>
          <p className="text-muted-foreground">{player.designation}</p>
          <Button onClick={onClose} variant="outline" className="mt-8">Close</Button>
        </div>
      </div>
    </div>
  );
};


// --- Main Team Profile Component ---
const TeamProfile = () => {
  const { teamId } = useParams();
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const team = teamId ? getTeamData(teamId) : null;

  if (!team) {
    return (
      <main className="bg-secondary/20 flex items-center justify-center min-h-screen">
        <SEO title="Team Not Found" description="Team not found." canonical={`/teams/${teamId ?? ''}`} />
        <div className="text-center p-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Team Not Found</h1>
          <p className="text-muted-foreground mb-2">The team with ID <code className="bg-muted text-destructive px-2 py-1 rounded-md">{teamId}</code> could not be found.</p>
          <p className="text-muted-foreground mb-6">Please ensure the link is correct.</p>
          <Link to="/schedule">
            <Button>Back to Schedule</Button>
          </Link>
        </div>
      </main>
    );
  }

  const getRoleBadge = (role: Player['role']) => {
    const variants = {
      "Batsman": "default",
      "Bowler": "secondary",
      "All-rounder": "accent",
      "Wicketkeeper": "destructive"
    } as const;
    return <Badge variant={variants[role]}>{role}</Badge>;
  };

  return (
    <main className="bg-secondary/20 min-h-screen">
      <SEO 
        title={`${team.name} - Team Profile`} 
        description={`${team.name} team profile, players, and staff information.`} 
        canonical={`/teams/${teamId ?? ''}`} 
      />
      <section className="container max-w-[1200px] mx-auto py-10">
        <header className="mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl font-bold text-primary ring-4 ring-primary/10">
                {team.logo || team.name.split(" ").map((x) => x[0]).join("")}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{team.name}</h1>
                <div className="flex items-center gap-4">
                  <Badge variant="default">STARTUP</Badge>
                  <span className="text-muted-foreground">{team.zone}, {team.district}</span>
                </div>
              </div>
            </div>
            <Link to="/schedule">
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 12H5m7 7l-7-7 7-7"/></svg>
                Back
              </Button>
            </Link>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Squad ({team.players.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.players.map((player) => (
                <div 
                  key={player.id} 
                  className="p-4 bg-card rounded-lg shadow-md cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
                  onClick={() => setSelectedPlayer(player)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-foreground truncate flex-1">{player.name}</h3>
                    {player.isCaptain && <Badge variant="destructive" className="text-xs">C</Badge>}
                    {player.isViceCaptain && <Badge variant="secondary" className="text-xs">VC</Badge>}
                  </div>
                  {getRoleBadge(player.role)}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-4">Team Staff</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm text-muted-foreground">Coach</h4>
                    <p className="text-lg font-semibold">{team.staff.coach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm text-muted-foreground">Captain</h4>
                    <p className="text-lg font-semibold">{team.staff.captain}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm text-muted-foreground">Manager</h4>
                    <p className="text-lg font-semibold">{team.staff.manager}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditionally render the modal */}
      {selectedPlayer && <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />}
    </main>
  );
};

export default TeamProfile;