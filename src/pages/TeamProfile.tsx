import { useParams } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Player {
  id: string;
  name: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicketkeeper";
  photo?: string;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
}

interface TeamStaff {
  coach: string;
  captain: string;
  manager: string;
}

interface Team {
  id: string;
  name: string;
  category: "STARTUP" | "PROFESSIONAL";
  logo?: string;
  zone?: string;
  district?: string;
  staff: TeamStaff;
  players: Player[];
}

// Mock data - in real app this would come from API
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
        { id: "p1", name: "Arjun Kumar", role: "All-rounder", isCaptain: true },
        { id: "p2", name: "Vikram Singh", role: "Batsman", isViceCaptain: true },
        { id: "p3", name: "Rahul Mehta", role: "Bowler" },
        { id: "p4", name: "Suresh Kumar", role: "Wicketkeeper" },
        { id: "p5", name: "Amit Patel", role: "Batsman" },
        { id: "p6", name: "Deepak Sharma", role: "Bowler" },
        { id: "p7", name: "Rajesh Verma", role: "All-rounder" },
        { id: "p8", name: "Manoj Gupta", role: "Batsman" },
        { id: "p9", name: "Sanjay Kumar", role: "Bowler" },
        { id: "p10", name: "Prakash Singh", role: "All-rounder" },
        { id: "p11", name: "Anil Kumar", role: "Batsman" },
        { id: "p12", name: "Sunil Verma", role: "Bowler" },
        { id: "p13", name: "Ramesh Patel", role: "Wicketkeeper" },
        { id: "p14", name: "Dinesh Sharma", role: "All-rounder" },
        { id: "p15", name: "Kishan Kumar", role: "Batsman" }
      ]
    },
    "pro-1": {
      id: "pro-1",
      name: "Pro Warriors",
      category: "PROFESSIONAL",
      logo: "PW",
      zone: "Chennai",
      district: "Chennai",
      staff: {
        coach: "Venkatesh Prasad",
        captain: "Surya Kumar",
        manager: "Anjali Desai"
      },
      players: [
        { id: "p1", name: "Surya Kumar", role: "Batsman", isCaptain: true },
        { id: "p2", name: "Rohit Sharma", role: "Batsman", isViceCaptain: true },
        { id: "p3", name: "Jasprit Bumrah", role: "Bowler" },
        { id: "p4", name: "MS Dhoni", role: "Wicketkeeper" },
        { id: "p5", name: "Virat Kohli", role: "Batsman" },
        { id: "p6", name: "Ravindra Jadeja", role: "All-rounder" },
        { id: "p7", name: "Hardik Pandya", role: "All-rounder" },
        { id: "p8", name: "KL Rahul", role: "Batsman" },
        { id: "p9", name: "Mohammed Shami", role: "Bowler" },
        { id: "p10", name: "Rishabh Pant", role: "Wicketkeeper" },
        { id: "p11", name: "Shreyas Iyer", role: "Batsman" },
        { id: "p12", name: "Yuzvendra Chahal", role: "Bowler" },
        { id: "p13", name: "Ishan Kishan", role: "Wicketkeeper" },
        { id: "p14", name: "Axar Patel", role: "All-rounder" },
        { id: "p15", name: "Arshdeep Singh", role: "Bowler" }
      ]
    }
  };

  return teams[teamId] || null;
};

const TeamProfile = () => {
  const { teamId } = useParams();
  const team = teamId ? getTeamData(teamId) : null;

  if (!team) {
    return (
      <main>
        <SEO title="Team Not Found" description="Team not found." canonical={`/teams/${teamId ?? ''}`} />
        <section className="container max-w-[1200px] mx-auto py-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Team Not Found</h1>
            <p className="text-muted-foreground">The team you're looking for doesn't exist.</p>
          </div>
        </section>
      </main>
    );
  }

  const getRoleBadge = (role: string) => {
    const variants = {
      "Batsman": "default",
      "Bowler": "secondary",
      "All-rounder": "outline",
      "Wicketkeeper": "destructive"
    } as const;
    return <Badge variant={variants[role as keyof typeof variants]}>{role}</Badge>;
  };

  const getCategoryBadge = (category: string) => {
    return (
      <Badge variant={category === "STARTUP" ? "default" : "secondary"}>
        {category}
      </Badge>
    );
  };

  return (
    <main>
      <SEO 
        title={`${team.name} - Team Profile`} 
        description={`${team.name} team profile, players, and staff information in the TNGSS Startup Cricket League.`} 
        canonical={`/teams/${teamId ?? ''}`} 
      />
      <section className="container max-w-[1200px] mx-auto py-10">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-3xl font-bold text-primary">
              {team.logo || team.name.split(" ").map((x) => x[0]).join("")}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{team.name}</h1>
              <div className="flex items-center gap-4">
                {getCategoryBadge(team.category)}
                {team.zone && (
                  <span className="text-muted-foreground">
                    {team.zone}, {team.district}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Staff */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Team Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Coach</h4>
                  <p className="text-muted-foreground">{team.staff.coach}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Captain</h4>
                  <p className="text-muted-foreground">{team.staff.captain}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Manager</h4>
                  <p className="text-muted-foreground">{team.staff.manager}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Players Grid */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Players ({team.players.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {team.players.map((player) => (
                    <div key={player.id} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={player.photo} alt={player.name} />
                        <AvatarFallback className="text-sm font-semibold">
                          {player.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground truncate">{player.name}</h4>
                          {player.isCaptain && (
                            <Badge variant="destructive" className="text-xs">Captain</Badge>
                          )}
                          {player.isViceCaptain && (
                            <Badge variant="outline" className="text-xs">Vice-Captain</Badge>
                          )}
                        </div>
                        {getRoleBadge(player.role)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamProfile;
