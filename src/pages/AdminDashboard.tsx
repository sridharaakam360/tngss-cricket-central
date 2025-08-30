
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import SEO from "@/components/seo/SEO";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { 
//   Calendar, 
//   Users, 
//   Trophy, 
//   Settings, 
//   BarChart3, 
//   FileText,
//   LogOut,
//   Plus,
//   Play,
//   Square,
//   UserPlus,
//   Edit,
//   Trash2,
//   Save,
//   Target,
//   Timer,
//   User
// } from "lucide-react";

// interface AdminUser {
//   role: "super_admin" | "match_scorer" | "team_manager";
//   email: string;
// }

// interface Player {
//   id: string;
//   name: string;
//   team: string;
//   position: string;
//   battingAvg: number;
//   bowlingAvg: number;
//   matchesPlayed: number;
// }

// interface Match {
//   id: string;
//   team1: string;
//   team2: string;
//   status: "upcoming" | "live" | "completed";
//   date: string;
//   venue: string;
//   format: "T20" | "ODI" | "Test";
//   overs: number;
//   result?: string;
//   tossWinner?: string;
//   tossDecision?: "bat" | "bowl";
// }

// interface Team {
//   id: string;
//   name: string;
//   category: "startup" | "professional";
//   captain: string;
//   coach?: string;
//   players: string[];
//   matchesPlayed: number;
//   wins: number;
//   losses: number;
//   points: number;
//   netRunRate: number;
//   founded: string;
// }

// interface Application {
//   id: string;
//   type: "player" | "team" | "volunteer";
//   applicantName: string;
//   email: string;
//   phone: string;
//   status: "pending" | "approved" | "rejected" | "under_review";
//   submittedDate: string;
//   teamName?: string;
//   position?: string;
//   experience?: string;
//   documents?: string[];
//   reviewedBy?: string;
//   reviewNotes?: string;
// }

// interface ScoreEntry {
//   matchId: string;
//   innings: 1 | 2;
//   team: string;
//   batsman1: { name: string; runs: number; balls: number; fours: number; sixes: number };
//   batsman2: { name: string; runs: number; balls: number; fours: number; sixes: number };
//   striker: 'batsman1' | 'batsman2';
//   bowler: string;
//   runs: number;
//   wickets: number;
//   overs: number;
//   balls: number;
//   extras: number;
// }

// interface BallEntry {
//   overNumber: number;
//   ballNumber: number;
//   batsman: string;
//   bowler: string;
//   runs: number;
//   isExtra: boolean;
//   extraType?: string;
//   isWicket: boolean;
//   wicketType?: string;
//   commentary: string;
// }

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<AdminUser | null>(null);
//   const [activeTab, setActiveTab] = useState("overview");
  
//   const [players, setPlayers] = useState<Player[]>([
//     { id: "1", name: "John Smith", team: "Alpha Startups", position: "Batsman", battingAvg: 45.2, bowlingAvg: 0, matchesPlayed: 12 },
//     { id: "2", name: "Mike Johnson", team: "Beta Builders", position: "All-rounder", battingAvg: 38.7, bowlingAvg: 25.3, matchesPlayed: 15 },
//     { id: "3", name: "David Brown", team: "Code Ninjas", position: "Bowler", battingAvg: 18.5, bowlingAvg: 22.1, matchesPlayed: 10 }
//   ]);

//   const [matches, setMatches] = useState<Match[]>([
//     { 
//       id: "1", 
//       team1: "Alpha Startups", 
//       team2: "Beta Builders", 
//       status: "live", 
//       date: "2025-08-11", 
//       venue: "Cricket Ground A",
//       format: "T20",
//       overs: 20,
//       tossWinner: "Alpha Startups",
//       tossDecision: "bat"
//     },
//     { 
//       id: "2", 
//       team1: "Pro Warriors", 
//       team2: "Tech Titans", 
//       status: "completed", 
//       date: "2025-08-10", 
//       venue: "Cricket Ground B",
//       format: "T20",
//       overs: 20,
//       result: "Pro Warriors won by 45 runs"
//     },
//     { 
//       id: "3", 
//       team1: "Code Ninjas", 
//       team2: "Data Devils", 
//       status: "upcoming", 
//       date: "2025-08-12", 
//       venue: "Cricket Ground C",
//       format: "T20",
//       overs: 20
//     }
//   ]);

//   const [teams, setTeams] = useState<Team[]>([
//     {
//       id: "1",
//       name: "Alpha Startups",
//       category: "startup",
//       captain: "John Smith",
//       coach: "Mike Coach",
//       players: ["John Smith", "Alice Johnson", "Bob Wilson"],
//       matchesPlayed: 8,
//       wins: 6,
//       losses: 2,
//       points: 12,
//       netRunRate: 1.25,
//       founded: "2024-01-15"
//     },
//     {
//       id: "2",
//       name: "Beta Builders",
//       category: "startup",
//       captain: "Sarah Davis",
//       players: ["Sarah Davis", "Tom Brown", "Lisa White"],
//       matchesPlayed: 7,
//       wins: 4,
//       losses: 3,
//       points: 8,
//       netRunRate: 0.85,
//       founded: "2024-02-20"
//     },
//     {
//       id: "3",
//       name: "Pro Warriors",
//       category: "professional",
//       captain: "David Pro",
//       coach: "Expert Coach",
//       players: ["David Pro", "Mark Elite", "Chris Master"],
//       matchesPlayed: 10,
//       wins: 8,
//       losses: 2,
//       points: 16,
//       netRunRate: 2.10,
//       founded: "2023-12-01"
//     }
//   ]);

//   const [applications, setApplications] = useState<Application[]>([
//     {
//       id: "1",
//       type: "player",
//       applicantName: "Alex Kumar",
//       email: "alex.kumar@email.com",
//       phone: "+91 9876543210",
//       status: "pending",
//       submittedDate: "2025-08-10",
//       teamName: "Code Ninjas",
//       position: "All-rounder",
//       experience: "5 years college cricket"
//     },
//     {
//       id: "2",
//       type: "team",
//       applicantName: "Rahul Sharma",
//       email: "rahul.sharma@startup.com",
//       phone: "+91 9876543211",
//       status: "under_review",
//       submittedDate: "2025-08-09",
//       teamName: "Startup Strikers",
//       experience: "Tech company team with 15 employees"
//     },
//     {
//       id: "3",
//       type: "volunteer",
//       applicantName: "Priya Patel",
//       email: "priya.patel@email.com",
//       phone: "+91 9876543212",
//       status: "approved",
//       submittedDate: "2025-08-08",
//       experience: "Event management experience",
//       reviewedBy: "admin@tngss.com"
//     }
//   ]);
  
//   // Player management state
//   const [newPlayer, setNewPlayer] = useState({
//     name: "", team: "", position: "", battingAvg: 0, bowlingAvg: 0, matchesPlayed: 0
//   });
//   const [editingPlayer, setEditingPlayer] = useState<string | null>(null);

//   // Team management state
//   const [newTeam, setNewTeam] = useState({
//     name: "", category: "startup" as "startup" | "professional", captain: "", coach: "", founded: ""
//   });
//   const [editingTeam, setEditingTeam] = useState<string | null>(null);

//   // Match management state
//   const [newMatch, setNewMatch] = useState({
//     team1: "", team2: "", date: "", venue: "", format: "T20" as "T20" | "ODI" | "Test", overs: 20
//   });
//   const [editingMatch, setEditingMatch] = useState<string | null>(null);

//   // Application management state
//   const [applicationFilter, setApplicationFilter] = useState<"all" | "pending" | "approved" | "rejected" | "under_review">("all");
  
//   // Score entry state
//   const [selectedMatch, setSelectedMatch] = useState<string>("");
//   const [scoreEntry, setScoreEntry] = useState<ScoreEntry>({
//     matchId: "",
//     innings: 1,
//     team: "",
//     batsman1: { name: "", runs: 0, balls: 0, fours: 0, sixes: 0 },
//     batsman2: { name: "", runs: 0, balls: 0, fours: 0, sixes: 0 },
//     striker: 'batsman1',
//     bowler: "",
//     runs: 0,
//     wickets: 0,
//     overs: 0,
//     balls: 0,
//     extras: 0
//   });
//   const [ballByBall, setBallByBall] = useState<BallEntry[]>([]);
//   const [currentOver, setCurrentOver] = useState<BallEntry[]>([]);

//   useEffect(() => {
//     // Check authentication
//     const isAuthenticated = localStorage.getItem("adminAuth");
//     const role = localStorage.getItem("adminRole") as AdminUser["role"];
//     const email = localStorage.getItem("adminEmail");

//     if (!isAuthenticated || !role) {
//       navigate("/admin");
//       return;
//     }

//     setUser({ role, email: email || "" });
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("adminAuth");
//     localStorage.removeItem("adminRole");
//     localStorage.removeItem("adminEmail");
//     navigate("/admin");
//   };

//   // Player management functions
//   const addPlayer = () => {
//     if (newPlayer.name && newPlayer.team && newPlayer.position) {
//       const player: Player = {
//         id: Date.now().toString(),
//         ...newPlayer
//       };
//       setPlayers([...players, player]);
//       setNewPlayer({ name: "", team: "", position: "", battingAvg: 0, bowlingAvg: 0, matchesPlayed: 0 });
//     }
//   };

//   const updatePlayer = (id: string, updatedPlayer: Partial<Player>) => {
//     setPlayers(players.map(p => p.id === id ? { ...p, ...updatedPlayer } : p));
//     setEditingPlayer(null);
//   };

//   const deletePlayer = (id: string) => {
//     setPlayers(players.filter(p => p.id !== id));
//   };

//   // Team management functions
//   const addTeam = () => {
//     if (newTeam.name && newTeam.captain) {
//       const team: Team = {
//         id: Date.now().toString(),
//         ...newTeam,
//         players: [newTeam.captain],
//         matchesPlayed: 0,
//         wins: 0,
//         losses: 0,
//         points: 0,
//         netRunRate: 0,
//         founded: newTeam.founded || new Date().toISOString().split('T')[0]
//       };
//       setTeams([...teams, team]);
//       setNewTeam({ name: "", category: "startup", captain: "", coach: "", founded: "" });
//     }
//   };

//   const updateTeam = (id: string, updatedTeam: Partial<Team>) => {
//     setTeams(teams.map(t => t.id === id ? { ...t, ...updatedTeam } : t));
//     setEditingTeam(null);
//   };

//   const deleteTeam = (id: string) => {
//     setTeams(teams.filter(t => t.id !== id));
//   };

//   // Match management functions
//   const addMatch = () => {
//     if (newMatch.team1 && newMatch.team2 && newMatch.date && newMatch.venue) {
//       const match: Match = {
//         id: Date.now().toString(),
//         ...newMatch,
//         status: "upcoming"
//       };
//       setMatches([...matches, match]);
//       setNewMatch({ team1: "", team2: "", date: "", venue: "", format: "T20", overs: 20 });
//     }
//   };

//   const updateMatch = (id: string, updatedMatch: Partial<Match>) => {
//     setMatches(matches.map(m => m.id === id ? { ...m, ...updatedMatch } : m));
//     setEditingMatch(null);
//   };

//   const deleteMatch = (id: string) => {
//     setMatches(matches.filter(m => m.id !== id));
//   };

//   // Application management functions
//   const updateApplicationStatus = (id: string, status: Application["status"], reviewNotes?: string) => {
//     setApplications(applications.map(app => 
//       app.id === id 
//         ? { 
//             ...app, 
//             status, 
//             reviewedBy: user?.email || "",
//             reviewNotes: reviewNotes || app.reviewNotes
//           } 
//         : app
//     ));
//   };

//   const deleteApplication = (id: string) => {
//     setApplications(applications.filter(app => app.id !== id));
//   };

//   const getFilteredApplications = () => {
//     if (applicationFilter === "all") return applications;
//     return applications.filter(app => app.status === applicationFilter);
//   };

//   // Score entry functions
//   const addRuns = (runs: number, isExtra: boolean = false, extraType?: string) => {
//     const striker = scoreEntry.striker;
//     const currentBatsman = scoreEntry[striker];
    
//     const ballEntry: BallEntry = {
//       overNumber: scoreEntry.overs + 1,
//       ballNumber: scoreEntry.balls + 1,
//       batsman: currentBatsman.name,
//       bowler: scoreEntry.bowler,
//       runs: runs,
//       isExtra: isExtra,
//       extraType: extraType,
//       isWicket: false,
//       commentary: isExtra ? `${extraType} - ${runs} run${runs !== 1 ? 's' : ''}` : `${runs} run${runs !== 1 ? 's' : ''}`
//     };

//     // Update batsman stats (only if not an extra)
//     if (!isExtra && runs > 0) {
//       const updatedBatsman = {
//         ...currentBatsman,
//         runs: currentBatsman.runs + runs,
//         balls: currentBatsman.balls + 1,
//         fours: runs === 4 ? currentBatsman.fours + 1 : currentBatsman.fours,
//         sixes: runs === 6 ? currentBatsman.sixes + 1 : currentBatsman.sixes
//       };
      
//       setScoreEntry(prev => ({
//         ...prev,
//         [striker]: updatedBatsman,
//         runs: prev.runs + runs,
//         balls: !isExtra ? prev.balls + 1 : prev.balls,
//         extras: isExtra ? prev.extras + runs : prev.extras,
//         striker: runs % 2 === 1 ? (striker === 'batsman1' ? 'batsman2' : 'batsman1') : striker
//       }));
//     } else if (isExtra) {
//       setScoreEntry(prev => ({
//         ...prev,
//         runs: prev.runs + runs,
//         extras: prev.extras + runs
//       }));
//     } else {
//       // 0 runs, still count the ball
//       const updatedBatsman = {
//         ...currentBatsman,
//         balls: currentBatsman.balls + 1
//       };
      
//       setScoreEntry(prev => ({
//         ...prev,
//         [striker]: updatedBatsman,
//         balls: prev.balls + 1
//       }));
//     }

//     setBallByBall(prev => [...prev, ballEntry]);
//     setCurrentOver(prev => [...prev, ballEntry]);

//     // Check if over is complete (6 valid balls)
//     if (!isExtra && scoreEntry.balls + 1 >= 6) {
//       completeOver();
//     }
//   };

//   const addWicket = (wicketType: string = "Out") => {
//     const striker = scoreEntry.striker;
//     const currentBatsman = scoreEntry[striker];
    
//     const ballEntry: BallEntry = {
//       overNumber: scoreEntry.overs + 1,
//       ballNumber: scoreEntry.balls + 1,
//       batsman: currentBatsman.name,
//       bowler: scoreEntry.bowler,
//       runs: 0,
//       isExtra: false,
//       isWicket: true,
//       wicketType: wicketType,
//       commentary: `WICKET! ${currentBatsman.name} ${wicketType}`
//     };

//     const updatedBatsman = {
//       ...currentBatsman,
//       balls: currentBatsman.balls + 1
//     };

//     setScoreEntry(prev => ({
//       ...prev,
//       [striker]: updatedBatsman,
//       wickets: prev.wickets + 1,
//       balls: prev.balls + 1
//     }));

//     setBallByBall(prev => [...prev, ballEntry]);
//     setCurrentOver(prev => [...prev, ballEntry]);

//     // Check if over is complete
//     if (scoreEntry.balls + 1 >= 6) {
//       completeOver();
//     }
//   };

//   const completeOver = () => {
//     setScoreEntry(prev => ({
//       ...prev,
//       overs: prev.overs + 1,
//       balls: 0,
//       striker: prev.striker === 'batsman1' ? 'batsman2' : 'batsman1' // Change strike at end of over
//     }));
//     setCurrentOver([]);
//   };

//   const switchStrike = () => {
//     setScoreEntry(prev => ({
//       ...prev,
//       striker: prev.striker === 'batsman1' ? 'batsman2' : 'batsman1'
//     }));
//   };

//   const updateBatsmanName = (batsman: 'batsman1' | 'batsman2', name: string) => {
//     setScoreEntry(prev => ({
//       ...prev,
//       [batsman]: {
//         ...prev[batsman],
//         name: name
//       }
//     }));
//   };

//   const editBallEntry = (index: number, newRuns: number) => {
//     const updatedBalls = [...ballByBall];
//     const oldRuns = updatedBalls[index].runs;
//     updatedBalls[index] = {
//       ...updatedBalls[index],
//       runs: newRuns,
//       commentary: updatedBalls[index].isExtra 
//         ? `${updatedBalls[index].extraType} - ${newRuns} run${newRuns !== 1 ? 's' : ''}`
//         : `${newRuns} run${newRuns !== 1 ? 's' : ''}`
//     };
    
//     setBallByBall(updatedBalls);
    
//     // Update total runs
//     setScoreEntry(prev => ({
//       ...prev,
//       runs: prev.runs - oldRuns + newRuns
//     }));
//   };

//   if (!user) {
//     return <div className="flex items-center justify-center min-h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
//     </div>;
//   }

//   const getRoleDisplayName = (role: string) => {
//     switch (role) {
//       case "super_admin": return "Super Admin";
//       case "match_scorer": return "Match Scorer";
//       case "team_manager": return "Team Manager";
//       default: return role;
//     }
//   };

//   const getRoleBadgeVariant = (role: string) => {
//     switch (role) {
//       case "super_admin": return "default";
//       case "match_scorer": return "secondary";
//       case "team_manager": return "outline";
//       default: return "outline";
//     }
//   };

//   // Check permissions based on role
//   const canAccessMatches = user.role === "super_admin" || user.role === "team_manager";
//   const canAccessScoring = user.role === "super_admin" || user.role === "match_scorer";
//   const canAccessApplications = user.role === "super_admin" || user.role === "team_manager";

//   return (
//     <main className="min-h-screen bg-background">
//       <SEO title="Admin Dashboard" description="TNGSS Cricket League Admin Panel" canonical="/admin/dashboard" />
      
//       {/* Header */}
//       <header className="border-b bg-card">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//               <p className="text-muted-foreground">TNGSS Cricket League Management</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="text-right">
//                 <p className="text-sm font-medium">{user.email}</p>
//                 <Badge variant={getRoleBadgeVariant(user.role)}>
//                   {getRoleDisplayName(user.role)}
//                 </Badge>
//               </div>
//               <Button variant="outline" size="sm" onClick={handleLogout}>
//                 <LogOut className="w-4 h-4 mr-2" />
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
//           <TabsList className="grid w-full grid-cols-6">
//             <TabsTrigger value="overview">Overview</TabsTrigger>
//             <TabsTrigger value="matches" disabled={!canAccessMatches}>Matches</TabsTrigger>
//             <TabsTrigger value="scoring" disabled={!canAccessScoring}>Scoring</TabsTrigger>
//             <TabsTrigger value="teams">Teams</TabsTrigger>
//             <TabsTrigger value="players">Players</TabsTrigger>
//             <TabsTrigger value="applications" disabled={!canAccessApplications}>Applications</TabsTrigger>
//           </TabsList>

//           {/* Overview Tab */}
//           <TabsContent value="overview" className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
//                   <Calendar className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{matches.length}</div>
//                   <p className="text-xs text-muted-foreground">+2 from last week</p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <CardTitle className="text-sm font-medium">Registered Players</CardTitle>
//                   <Users className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{players.length}</div>
//                   <p className="text-xs text-muted-foreground">Active players</p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <CardTitle className="text-sm font-medium">Live Matches</CardTitle>
//                   <Play className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{matches.filter(m => m.status === 'live').length}</div>
//                   <p className="text-xs text-muted-foreground">Currently live</p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <CardTitle className="text-sm font-medium">Applications</CardTitle>
//                   <FileText className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{applications.length}</div>
//                   <p className="text-xs text-muted-foreground">+12 new today</p>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recent Matches</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {matches.map((match) => (
//                       <div key={match.id} className="flex items-center justify-between p-3 border rounded-lg">
//                         <div>
//                           <p className="font-medium">{match.team1} vs {match.team2}</p>
//                           <p className="text-sm text-muted-foreground">{match.date} - {match.venue}</p>
//                         </div>
//                         <Badge variant={match.status === "live" ? "destructive" : match.status === "completed" ? "default" : "secondary"}>
//                           {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
//                         </Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Quick Actions</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-2 gap-4">
//                     {canAccessMatches && (
//                       <Button className="h-20 flex-col" onClick={() => setActiveTab("matches")}>
//                         <Plus className="w-6 h-6 mb-2" />
//                         New Match
//                       </Button>
//                     )}
//                     {canAccessScoring && (
//                       <Button className="h-20 flex-col" onClick={() => setActiveTab("scoring")}>
//                         <BarChart3 className="w-6 h-6 mb-2" />
//                         Score Entry
//                       </Button>
//                     )}
//                     <Button className="h-20 flex-col" onClick={() => setActiveTab("players")}>
//                       <UserPlus className="w-6 h-6 mb-2" />
//                       Add Player
//                     </Button>
//                     <Button className="h-20 flex-col" onClick={() => setActiveTab("teams")}>
//                       <Users className="w-6 h-6 mb-2" />
//                       Manage Teams
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           {/* Matches Tab */}
//           <TabsContent value="matches" className="space-y-6">
//             {canAccessMatches ? (
//               <div className="space-y-6">
//                 {/* Add New Match */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Plus className="w-5 h-5" />
//                       Schedule New Match
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <Label htmlFor="match-team1">Team 1</Label>
//                         <Select value={newMatch.team1} onValueChange={(value) => setNewMatch(prev => ({...prev, team1: value}))}>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select Team 1" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {teams.map(team => (
//                               <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div>
//                         <Label htmlFor="match-team2">Team 2</Label>
//                         <Select value={newMatch.team2} onValueChange={(value) => setNewMatch(prev => ({...prev, team2: value}))}>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select Team 2" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {teams.filter(t => t.name !== newMatch.team1).map(team => (
//                               <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div>
//                         <Label htmlFor="match-format">Format</Label>
//                         <Select value={newMatch.format} onValueChange={(value) => setNewMatch(prev => ({...prev, format: value as "T20" | "ODI" | "Test"}))}>
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="T20">T20 (20 overs)</SelectItem>
//                             <SelectItem value="ODI">ODI (50 overs)</SelectItem>
//                             <SelectItem value="Test">Test Match</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div>
//                         <Label htmlFor="match-date">Match Date</Label>
//                         <Input
//                           id="match-venue"
//                           value={newMatch.venue}
//                           onChange={(e) => setNewMatch(prev => ({...prev, venue: e.target.value}))}
//                           placeholder="Enter venue"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="match-overs">Overs</Label>
//                         <Input
//                           id="match-overs"
//                           type="number"
//                           value={newMatch.overs}
//                           onChange={(e) => setNewMatch(prev => ({...prev, overs: parseInt(e.target.value) || 20}))}
//                           placeholder="20"
//                         />
//                       </div>
//                     </div>
//                     <div className="mt-4">
//                       <Button onClick={addMatch} className="w-full md:w-auto">
//                         <Calendar className="w-4 h-4 mr-2" />
//                         Schedule Match
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Matches List */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Calendar className="w-5 h-5" />
//                       Scheduled Matches ({matches.length})
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {matches.map((match) => (
//                         <div key={match.id} className="border rounded-lg p-4">
//                           <div className="flex items-center justify-between">
//                             <div className="grid grid-cols-1 md:grid-cols-6 gap-4 flex-1">
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">TEAMS</Label>
//                                 {editingMatch === match.id ? (
//                                   <div className="space-y-1">
//                                     <Select value={match.team1} onValueChange={(value) => updateMatch(match.id, {team1: value})}>
//                                       <SelectTrigger className="h-8 text-sm">
//                                         <SelectValue />
//                                       </SelectTrigger>
//                                       <SelectContent>
//                                         {teams.map(team => (
//                                           <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
//                                         ))}
//                                       </SelectContent>
//                                     </Select>
//                                     <Select value={match.team2} onValueChange={(value) => updateMatch(match.id, {team2: value})}>
//                                       <SelectTrigger className="h-8 text-sm">
//                                         <SelectValue />
//                                       </SelectTrigger>
//                                       <SelectContent>
//                                         {teams.map(team => (
//                                           <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
//                                         ))}
//                                       </SelectContent>
//                                     </Select>
//                                   </div>
//                                 ) : (
//                                   <p className="font-medium">{match.team1} vs {match.team2}</p>
//                                 )}
//                               </div>
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">DATE</Label>
//                                 {editingMatch === match.id ? (
//                                   <Input
//                                     type="date"
//                                     value={match.date}
//                                     onChange={(e) => updateMatch(match.id, {date: e.target.value})}
//                                     className="h-8 text-sm"
//                                   />
//                                 ) : (
//                                   <p>{match.date}</p>
//                                 )}
//                               </div>
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">VENUE</Label>
//                                 {editingMatch === match.id ? (
//                                   <Input
//                                     value={match.venue}
//                                     onChange={(e) => updateMatch(match.id, {venue: e.target.value})}
//                                     className="h-8 text-sm"
//                                   />
//                                 ) : (
//                                   <p>{match.venue}</p>
//                                 )}
//                               </div>
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">FORMAT</Label>
//                                 <Badge variant="outline" className="mt-1">{match.format}</Badge>
//                               </div>
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">STATUS</Label>
//                                 {editingMatch === match.id ? (
//                                   <Select value={match.status} onValueChange={(value) => updateMatch(match.id, {status: value as Match["status"]})}>
//                                     <SelectTrigger className="h-8 text-sm">
//                                       <SelectValue />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                       <SelectItem value="upcoming">Upcoming</SelectItem>
//                                       <SelectItem value="live">Live</SelectItem>
//                                       <SelectItem value="completed">Completed</SelectItem>
//                                     </SelectContent>
//                                   </Select>
//                                 ) : (
//                                   <Badge variant={match.status === "live" ? "destructive" : match.status === "completed" ? "default" : "secondary"}>
//                                     {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
//                                   </Badge>
//                                 )}
//                               </div>
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">RESULT</Label>
//                                 {editingMatch === match.id ? (
//                                   <Input
//                                     value={match.result || ""}
//                                     onChange={(e) => updateMatch(match.id, {result: e.target.value})}
//                                     className="h-8 text-sm"
//                                     placeholder="Enter result"
//                                   />
//                                 ) : (
//                                   <p className="text-sm">{match.result || "TBD"}</p>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="flex gap-2 ml-4">
//                               {editingMatch === match.id ? (
//                                 <Button size="sm" onClick={() => setEditingMatch(null)}>
//                                   <Save className="w-4 h-4" />
//                                 </Button>
//                               ) : (
//                                 <Button size="sm" variant="outline" onClick={() => setEditingMatch(match.id)}>
//                                   <Edit className="w-4 h-4" />
//                                 </Button>
//                               )}
//                               <Button size="sm" variant="destructive" onClick={() => deleteMatch(match.id)}>
//                                 <Trash2 className="w-4 h-4" />
//                               </Button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ) : (
//               <Card>
//                 <CardContent className="p-6">
//                   <p className="text-muted-foreground text-center">
//                     You don't have permission to access match management.
//                   </p>
//                 </CardContent>
//               </Card>
//             )}
//           </TabsContent>

//           {/* Sophisticated Scoring Tab */}
//           <TabsContent value="scoring" className="space-y-6">
//             {canAccessScoring ? (
//               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//                 {/* Match Selection & Current Score */}
//                 <Card className="lg:col-span-4">
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Target className="w-5 h-5" />
//                       Match & Score Info
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div>
//                       <Label htmlFor="match-select">Select Match</Label>
//                       <Select value={selectedMatch} onValueChange={setSelectedMatch}>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Choose a match" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {matches.filter(m => m.status === "live").map(match => (
//                             <SelectItem key={match.id} value={match.id}>
//                               {match.team1} vs {match.team2}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="innings">Innings</Label>
//                         <Select
//                           value={scoreEntry.innings.toString()}
//                           onValueChange={(value) =>
//                             setScoreEntry(prev => ({ ...prev, innings: parseInt(value) as 1 | 2 }))
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="1">1st Innings</SelectItem>
//                             <SelectItem value="2">2nd Innings</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div>
//                         <Label htmlFor="batting-team">Batting Team</Label>
//                         <Input
//                           id="batting-team"
//                           value={scoreEntry.team}
//                           onChange={(e) => setScoreEntry(prev => ({ ...prev, team: e.target.value }))}
//                           placeholder="Team name"
//                         />
//                       </div>
//                     </div>

//                     {/* Current Score Display */}
//                     <div className="bg-muted p-4 rounded-lg text-center">
//                       <div className="text-4xl font-bold text-primary">
//                         {scoreEntry.runs}/{scoreEntry.wickets}
//                       </div>
//                       <div className="text-lg text-muted-foreground">
//                         ({scoreEntry.overs}.{scoreEntry.balls} overs)
//                       </div>
//                       <div className="text-sm text-muted-foreground mt-2">
//                         Extras: {scoreEntry.extras}
//                       </div>
//                     </div>

//                     {/* Batsmen Info */}
//                     <div className="space-y-3">
//                       <Label className="text-sm font-semibold">Batsmen</Label>
//                       <div className="space-y-2">
//                         <div
//                           className={`p-3 border rounded-lg ${
//                             scoreEntry.striker === "batsman1" ? "border-primary bg-primary/5" : "border-muted"
//                           }`}
//                         >
//                           <div className="flex items-center justify-between">
//                             <Input
//                               value={scoreEntry.batsman1.name}
//                               onChange={(e) => updateBatsmanName("batsman1", e.target.value)}
//                               placeholder="Batsman 1"
//                               className="border-none p-0 font-medium"
//                             />
//                             {scoreEntry.striker === "batsman1" && (
//                               <Badge variant="default" className="text-xs">
//                                 *
//                               </Badge>
//                             )}
//                           </div>
//                           <div className="text-sm text-muted-foreground mt-1">
//                             {scoreEntry.batsman1.runs} ({scoreEntry.batsman1.balls})
//                             {scoreEntry.batsman1.fours > 0 && ` • ${scoreEntry.batsman1.fours}×4`}
//                             {scoreEntry.batsman1.sixes > 0 && ` • ${scoreEntry.batsman1.sixes}×6`}
//                           </div>
//                         </div>

//                         <div
//                           className={`p-3 border rounded-lg ${
//                             scoreEntry.striker === "batsman2" ? "border-primary bg-primary/5" : "border-muted"
//                           }`}
//                         >
//                           <div className="flex items-center justify-between">
//                             <Input
//                               value={scoreEntry.batsman2.name}
//                               onChange={(e) => updateBatsmanName("batsman2", e.target.value)}
//                               placeholder="Batsman 2"
//                               className="border-none p-0 font-medium"
//                             />
//                             {scoreEntry.striker === "batsman2" && (
//                               <Badge variant="default" className="text-xs">
//                                 *
//                               </Badge>
//                             )}
//                           </div>
//                           <div className="text-sm text-muted-foreground mt-1">
//                             {scoreEntry.batsman2.runs} ({scoreEntry.batsman2.balls})
//                             {scoreEntry.batsman2.fours > 0 && ` • ${scoreEntry.batsman2.fours}×4`}
//                             {scoreEntry.batsman2.sixes > 0 && ` • ${scoreEntry.batsman2.sixes}×6`}
//                           </div>
//                         </div>
//                       </div>

//                       <Button variant="outline" size="sm" onClick={switchStrike} className="w-full">
//                         Switch Strike
//                       </Button>
//                     </div>

//                     <div>
//                       <Label htmlFor="bowler">Current Bowler</Label>
//                       <Input
//                         id="bowler"
//                         value={scoreEntry.bowler}
//                         onChange={(e) => setScoreEntry(prev => ({ ...prev, bowler: e.target.value }))}
//                         placeholder="Bowler name"
//                       />
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Scoring Interface */}
//                 <Card className="lg:col-span-4">
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <BarChart3 className="w-5 h-5" />
//                       Ball by Ball Scoring
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     {/* Run Scoring */}
//                     <div className="grid grid-cols-3 gap-2">
//                       <Label className="col-span-3 text-sm font-medium">Runs</Label>
//                       {[0, 1, 2, 3, 4, 6].map(runs => (
//                         <Button
//                           key={runs}
//                           variant={runs === 0 ? "outline" : runs >= 4 ? "default" : "secondary"}
//                           className="h-12 text-lg font-bold"
//                           onClick={() => addRuns(runs)}
//                         >
//                           {runs}
//                         </Button>
//                       ))}
//                     </div>

//                     {/* Wicket Options */}
//                     <div className="space-y-2">
//                       <Label className="text-sm font-medium">Wickets</Label>
//                       <div className="grid grid-cols-2 gap-2">
//                         <Button variant="destructive" className="h-10" onClick={() => addWicket("Bowled")}>
//                           Bowled
//                         </Button>
//                         <Button variant="destructive" className="h-10" onClick={() => addWicket("Caught")}>
//                           Caught
//                         </Button>
//                         <Button variant="destructive" className="h-10" onClick={() => addWicket("LBW")}>
//                           LBW
//                         </Button>
//                         <Button variant="destructive" className="h-10" onClick={() => addWicket("Run Out")}>
//                           Run Out
//                         </Button>
//                       </div>
//                     </div>

//                     {/* Extras */}
//                     <div className="space-y-2">
//                       <Label className="text-sm font-medium">Extras</Label>
//                       <div className="grid grid-cols-2 gap-2">
//                         <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "Wide")}>
//                           Wide
//                         </Button>
//                         <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "No Ball")}>
//                           No Ball
//                         </Button>
//                         <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "Bye")}>
//                           Bye
//                         </Button>
//                         <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "Leg Bye")}>
//                           Leg Bye
//                         </Button>
//                       </div>
//                     </div>

//                     {/* Current Over Display */}
//                     <div className="bg-muted p-3 rounded-lg">
//                       <Label className="text-sm font-medium">This Over</Label>
//                       <div className="flex flex-wrap gap-1 mt-2">
//                         {currentOver.map((ball, index) => (
//                           <Badge
//                             key={index}
//                             variant={ball.isWicket ? "destructive" : ball.isExtra ? "secondary" : "default"}
//                             className="text-xs"
//                           >
//                             {ball.isWicket ? "W" : ball.runs}
//                           </Badge>
//                         ))}
//                         {Array.from({ length: Math.max(0, 6 - currentOver.length) }).map((_, index) => (
//                           <div
//                             key={index}
//                             className="w-6 h-6 border border-dashed border-muted-foreground rounded flex items-center justify-center text-xs"
//                           >
//                             •
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Ball by Ball Commentary & Over Analysis */}
//                 <Card className="lg:col-span-4">
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Timer className="w-5 h-5" />
//                       Commentary & Over Analysis
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {/* Latest Balls */}
//                       <div>
//                         <Label className="text-sm font-medium mb-2 block">Ball by Ball</Label>
//                         <div className="h-48 overflow-y-auto space-y-1 border rounded-md p-3">
//                           {ballByBall.length === 0 ? (
//                             <p className="text-muted-foreground text-center text-sm">No balls bowled yet</p>
//                           ) : (
//                             ballByBall
//                               .slice(-10)
//                               .reverse()
//                               .map((ball, index) => (
//                                 <div
//                                   key={ballByBall.length - 1 - index}
//                                   className="flex justify-between items-center p-2 bg-muted/50 rounded text-sm"
//                                 >
//                                   <div className="flex items-center gap-2">
//                                     <Badge variant="outline" className="text-xs">
//                                       {ball.overNumber}.{ball.ballNumber}
//                                     </Badge>
//                                     <span className="font-medium">{ball.batsman}</span>
//                                   </div>
//                                   <div className="flex items-center gap-2">
//                                     <Input
//                                       type="number"
//                                       value={ball.runs}
//                                       onChange={(e) =>
//                                         editBallEntry(ballByBall.length - 1 - index, parseInt(e.target.value) || 0)
//                                       }
//                                       className="w-12 h-6 text-xs text-center"
//                                       min={0}
//                                       max={6}
//                                     />
//                                     <span className="text-xs text-muted-foreground">{ball.commentary}</span>
//                                   </div>
//                                 </div>
//                               ))
//                           )}
//                         </div>
//                       </div>

//                       {/* Over Summary */}
//                       <div>
//                         <Label className="text-sm font-medium mb-2 block">Over Summary</Label>
//                         <div className="grid grid-cols-2 gap-4 text-sm">
//                           <div className="space-y-1">
//                             <div className="flex justify-between">
//                               <span>Current Over:</span>
//                               <span className="font-medium">{scoreEntry.overs + 1}</span>
//                             </div>
//                             <div className="flex justify-between">
//                               <span>Balls Bowled:</span>
//                               <span className="font-medium">{scoreEntry.balls}/6</span>
//                             </div>
//                             <div className="flex justify-between">
//                               <span>This Over Runs:</span>
//                               <span className="font-medium">
//                                 {currentOver.reduce((sum, ball) => sum + ball.runs, 0)}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="space-y-1">
//                             <div className="flex justify-between">
//                               <span>Strike Rate:</span>
//                               <span className="font-medium">
//                                 {scoreEntry[scoreEntry.striker].balls > 0
//                                   ? ((scoreEntry[scoreEntry.striker].runs / scoreEntry[scoreEntry.striker].balls) * 100).toFixed(1)
//                                   : "0.0"}
//                               </span>
//                             </div>
//                             <div className="flex justify-between">
//                               <span>Run Rate:</span>
//                               <span className="font-medium">
//                                 {scoreEntry.overs + scoreEntry.balls / 6 > 0
//                                   ? (scoreEntry.runs / (scoreEntry.overs + scoreEntry.balls / 6)).toFixed(2)
//                                   : "0.00"}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ) : (
//               <Card>
//                 <CardContent className="p-6">
//                   <p className="text-muted-foreground text-center">
//                     You don't have permission to access scoring functionality.
//                   </p>
//                 </CardContent>
//               </Card>
//             )}
//           </TabsContent>

//           {/* Teams Tab */}
//           <TabsContent value="teams" className="space-y-6">
//             <div className="space-y-6">
//               {/* Add New Team */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Plus className="w-5 h-5" />
//                     Register New Team
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <Label htmlFor="team-name">Team Name</Label>
//                       <Input
//                         id="team-name"
//                         value={newTeam.name}
//                         onChange={(e) => setNewTeam(prev => ({...prev, name: e.target.value}))}
//                         placeholder="Enter team name"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="team-category">Category</Label>
//                       <Select value={newTeam.category} onValueChange={(value) => setNewTeam(prev => ({...prev, category: value as "startup" | "professional"}))}>
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="startup">Startup</SelectItem>
//                           <SelectItem value="professional">Professional</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label htmlFor="team-captain">Captain</Label>
//                       <Input
//                         id="team-captain"
//                         value={newTeam.captain}
//                         onChange={(e) => setNewTeam(prev => ({...prev, captain: e.target.value}))}
//                         placeholder="Captain name"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="team-coach">Coach (Optional)</Label>
//                       <Input
//                         id="team-coach"
//                         value={newTeam.coach}
//                         onChange={(e) => setNewTeam(prev => ({...prev, coach: e.target.value}))}
//                         placeholder="Coach name"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="team-founded">Founded Date</Label>
//                       <Input
//                         id="team-founded"
//                         type="date"
//                         value={newTeam.founded}
//                         onChange={(e) => setNewTeam(prev => ({...prev, founded: e.target.value}))}
//                       />
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <Button onClick={addTeam} className="w-full md:w-auto">
//                       <Users className="w-4 h-4 mr-2" />
//                       Register Team
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Teams List */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Users className="w-5 h-5" />
//                     Registered Teams ({teams.length})
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {teams.map((team) => (
//                       <div key={team.id} className="border rounded-lg p-4">
//                         <div className="flex items-start justify-between">
//                           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
//                             <div className="md:col-span-2">
//                               <div className="flex items-center gap-2 mb-2">
//                                 {editingTeam === team.id ? (
//                                   <Input
//                                     value={team.name}
//                                     onChange={(e) => updateTeam(team.id, {name: e.target.value})}
//                                     className="font-bold text-lg"
//                                   />
//                                 ) : (
//                                   <h3 className="font-bold text-lg">{team.name}</h3>
//                                 )}
//                                 <Badge variant={team.category === "startup" ? "secondary" : "default"}>
//                                   {team.category.charAt(0).toUpperCase() + team.category.slice(1)}
//                                 </Badge>
//                               </div>
//                               <div className="space-y-1 text-sm">
//                                 <div className="flex justify-between">
//                                   <span className="text-muted-foreground">Captain:</span>
//                                   {editingTeam === team.id ? (
//                                     <Input
//                                       value={team.captain}
//                                       onChange={(e) => updateTeam(team.id, {captain: e.target.value})}
//                                       className="h-6 text-sm flex-1 ml-2"
//                                     />
//                                   ) : (
//                                     <span className="font-medium">{team.captain}</span>
//                                   )}
//                                 </div>
//                                 {team.coach && (
//                                   <div className="flex justify-between">
//                                     <span className="text-muted-foreground">Coach:</span>
//                                     {editingTeam === team.id ? (
//                                       <Input
//                                         value={team.coach}
//                                         onChange={(e) => updateTeam(team.id, {coach: e.target.value})}
//                                         className="h-6 text-sm flex-1 ml-2"
//                                       />
//                                     ) : (
//                                       <span className="font-medium">{team.coach}</span>
//                                     )}
//                                   </div>
//                                 )}
//                                 <div className="flex justify-between">
//                                   <span className="text-muted-foreground">Players:</span>
//                                   <span className="font-medium">{team.players.length}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                   <span className="text-muted-foreground">Founded:</span>
//                                   <span className="font-medium">{team.founded}</span>
//                                 </div>
//                               </div>
//                             </div>
                            
//                             <div>
//                               <Label className="text-xs font-medium text-muted-foreground">MATCHES</Label>
//                               <div className="space-y-1 text-sm">
//                                 <div className="flex justify-between">
//                                   <span>Played:</span>
//                                   <span className="font-medium">{team.matchesPlayed}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                   <span>Won:</span>
//                                   <span className="font-medium text-green-600">{team.wins}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                   <span>Lost:</span>
//                                   <span className="font-medium text-red-600">{team.losses}</span>
//                                 </div>
//                               </div>
//                             </div>
                            
//                             <div>
//                               <Label className="text-xs font-medium text-muted-foreground">STATISTICS</Label>
//                               <div className="space-y-1 text-sm">
//                                 <div className="flex justify-between">
//                                   <span>Points:</span>
//                                   <span className="font-medium">{team.points}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                   <span>NRR:</span>
//                                   <span className={`font-medium ${team.netRunRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                                     {team.netRunRate >= 0 ? '+' : ''}{team.netRunRate.toFixed(2)}
//                                   </span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                   <span>Win %:</span>
//                                   <span className="font-medium">
//                                     {team.matchesPlayed > 0 ? ((team.wins / team.matchesPlayed) * 100).toFixed(1) : 0}%
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
                          
//                           <div className="flex gap-2 ml-4">
//                             {editingTeam === team.id ? (
//                               <Button size="sm" onClick={() => setEditingTeam(null)}>
//                                 <Save className="w-4 h-4" />
//                               </Button>
//                             ) : (
//                               <Button size="sm" variant="outline" onClick={() => setEditingTeam(team.id)}>
//                                 <Edit className="w-4 h-4" />
//                               </Button>
//                             )}
//                             <Button size="sm" variant="destructive" onClick={() => deleteTeam(team.id)}>
//                               <Trash2 className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Team Statistics Overview */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Trophy className="w-5 h-5" />
//                     League Standings
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr className="border-b">
//                           <th className="text-left p-2">Rank</th>
//                           <th className="text-left p-2">Team</th>
//                           <th className="text-center p-2">Played</th>
//                           <th className="text-center p-2">Won</th>
//                           <th className="text-center p-2">Lost</th>
//                           <th className="text-center p-2">Points</th>
//                           <th className="text-center p-2">NRR</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {teams
//                           .sort((a, b) => b.points - a.points || b.netRunRate - a.netRunRate)
//                           .map((team, index) => (
//                             <tr key={team.id} className="border-b hover:bg-muted/50">
//                               <td className="p-2 font-medium">{index + 1}</td>
//                               <td className="p-2">
//                                 <div className="flex items-center gap-2">
//                                   <span className="font-medium">{team.name}</span>
//                                   <Badge variant={team.category === "startup" ? "secondary" : "default"} className="text-xs">
//                                     {team.category.charAt(0).toUpperCase()}
//                                   </Badge>
//                                 </div>
//                               </td>
//                               <td className="p-2 text-center">{team.matchesPlayed}</td>
//                               <td className="p-2 text-center text-green-600 font-medium">{team.wins}</td>
//                               <td className="p-2 text-center text-red-600 font-medium">{team.losses}</td>
//                               <td className="p-2 text-center font-bold">{team.points}</td>
//                               <td className={`p-2 text-center font-medium ${team.netRunRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                                 {team.netRunRate >= 0 ? '+' : ''}{team.netRunRate.toFixed(2)}
//                               </td>
//                             </tr>
//                           ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           {/* Players Tab */}
//           <TabsContent value="players" className="space-y-6">
//             {/* Add New Player */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <UserPlus className="w-5 h-5" />
//                   Add New Player
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div>
//                     <Label htmlFor="player-name">Player Name</Label>
//                     <Input
//                       id="player-name"
//                       value={newPlayer.name}
//                       onChange={(e) => setNewPlayer(prev => ({...prev, name: e.target.value}))}
//                       placeholder="Enter player name"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="player-team">Team</Label>
//                     <Input
//                       id="player-team"
//                       value={newPlayer.team}
//                       onChange={(e) => setNewPlayer(prev => ({...prev, team: e.target.value}))}
//                       placeholder="Enter team name"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="player-position">Position</Label>
//                     <Select value={newPlayer.position} onValueChange={(value) => setNewPlayer(prev => ({...prev, position: value}))}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select position" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Batsman">Batsman</SelectItem>
//                         <SelectItem value="Bowler">Bowler</SelectItem>
//                         <SelectItem value="All-rounder">All-rounder</SelectItem>
//                         <SelectItem value="Wicket-keeper">Wicket-keeper</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <Label htmlFor="batting-avg">Batting Average</Label>
//                     <Input
//                       id="batting-avg"
//                       type="number"
//                       value={newPlayer.battingAvg}
//                       onChange={(e) => setNewPlayer(prev => ({...prev, battingAvg: parseFloat(e.target.value) || 0}))}
//                       placeholder="0.00"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="bowling-avg">Bowling Average</Label>
//                     <Input
//                       id="bowling-avg"
//                       type="number"
//                       value={newPlayer.bowlingAvg}
//                       onChange={(e) => setNewPlayer(prev => ({...prev, bowlingAvg: parseFloat(e.target.value) || 0}))}
//                       placeholder="0.00"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="matches-played">Matches Played</Label>
//                     <Input
//                       id="matches-played"
//                       type="number"
//                       value={newPlayer.matchesPlayed}
//                       onChange={(e) => setNewPlayer(prev => ({...prev, matchesPlayed: parseInt(e.target.value) || 0}))}
//                       placeholder="0"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <Button onClick={addPlayer} className="w-full md:w-auto">
//                     <Plus className="w-4 h-4 mr-2" />
//                     Add Player
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Players List */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <User className="w-5 h-5" />
//                   Players List ({players.length})
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {players.map((player) => (
//                     <div key={player.id} className="border rounded-lg p-4">
//                       <div className="flex items-center justify-between">
//                         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 flex-1">
//                           <div>
//                             <Label className="text-xs font-medium text-muted-foreground">NAME</Label>
//                             {editingPlayer === player.id ? (
//                               <Input
//                                 value={player.name}
//                                 onChange={(e) => updatePlayer(player.id, {name: e.target.value})}
//                                 className="mt-1"
//                               />
//                             ) : (
//                               <p className="font-medium">{player.name}</p>
//                             )}
//                           </div>
//                           <div>
//                             <Label className="text-xs font-medium text-muted-foreground">TEAM</Label>
//                             {editingPlayer === player.id ? (
//                               <Input
//                                 value={player.team}
//                                 onChange={(e) => updatePlayer(player.id, {team: e.target.value})}
//                                 className="mt-1"
//                               />
//                             ) : (
//                               <p>{player.team}</p>
//                             )}
//                           </div>
//                           <div>
//                             <Label className="text-xs font-medium text-muted-foreground">POSITION</Label>
//                             <Badge variant="secondary" className="mt-1">{player.position}</Badge>
//                           </div>
//                           <div>
//                             <Label className="text-xs font-medium text-muted-foreground">BAT AVG</Label>
//                             <p>{player.battingAvg.toFixed(1)}</p>
//                           </div>
//                           <div>
//                             <Label className="text-xs font-medium text-muted-foreground">MATCHES</Label>
//                             <p>{player.matchesPlayed}</p>
//                           </div>
//                         </div>
//                         <div className="flex gap-2 ml-4">
//                           {editingPlayer === player.id ? (
//                             <Button size="sm" onClick={() => setEditingPlayer(null)}>
//                               <Save className="w-4 h-4" />
//                             </Button>
//                           ) : (
//                             <Button size="sm" variant="outline" onClick={() => setEditingPlayer(player.id)}>
//                               <Edit className="w-4 h-4" />
//                             </Button>
//                           )}
//                           <Button size="sm" variant="destructive" onClick={() => deletePlayer(player.id)}>
//                             <Trash2 className="w-4 h-4" />
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Applications Tab */}
//           <TabsContent value="applications" className="space-y-6">
//             {canAccessApplications ? (
//               <div className="space-y-6">
//                 {/* Application Filters */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <FileText className="w-5 h-5" />
//                       Application Management
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-2">
//                       <Button
//                         variant={applicationFilter === "all" ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setApplicationFilter("all")}
//                       >
//                         All ({applications.length})
//                       </Button>
//                       <Button
//                         variant={applicationFilter === "pending" ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setApplicationFilter("pending")}
//                       >
//                         Pending ({applications.filter(app => app.status === "pending").length})
//                       </Button>
//                       <Button
//                         variant={applicationFilter === "under_review" ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setApplicationFilter("under_review")}
//                       >
//                         Under Review ({applications.filter(app => app.status === "under_review").length})
//                       </Button>
//                       <Button
//                         variant={applicationFilter === "approved" ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setApplicationFilter("approved")}
//                       >
//                         Approved ({applications.filter(app => app.status === "approved").length})
//                       </Button>
//                       <Button
//                         variant={applicationFilter === "rejected" ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setApplicationFilter("rejected")}
//                       >
//                         Rejected ({applications.filter(app => app.status === "rejected").length})
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Applications List */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Users className="w-5 h-5" />
//                       Applications ({getFilteredApplications().length})
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {getFilteredApplications().map((application) => (
//                         <div key={application.id} className="border rounded-lg p-4">
//                           <div className="flex items-start justify-between">
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
//                               {/* Applicant Info */}
//                               <div>
//                                 <div className="flex items-center gap-2 mb-2">
//                                   <h3 className="font-bold text-lg">{application.applicantName}</h3>
//                                   <Badge variant={
//                                     application.type === "player" ? "default" : 
//                                     application.type === "team" ? "secondary" : "outline"
//                                   }>
//                                     {application.type.charAt(0).toUpperCase() + application.type.slice(1)}
//                                   </Badge>
//                                 </div>
//                                 <div className="space-y-1 text-sm">
//                                   <div className="flex justify-between">
//                                     <span className="text-muted-foreground">Email:</span>
//                                     <span className="font-medium">{application.email}</span>
//                                   </div>
//                                   <div className="flex justify-between">
//                                     <span className="text-muted-foreground">Phone:</span>
//                                     <span className="font-medium">{application.phone}</span>
//                                   </div>
//                                   <div className="flex justify-between">
//                                     <span className="text-muted-foreground">Submitted:</span>
//                                     <span className="font-medium">{application.submittedDate}</span>
//                                   </div>
//                                   {application.teamName && (
//                                     <div className="flex justify-between">
//                                       <span className="text-muted-foreground">Team:</span>
//                                       <span className="font-medium">{application.teamName}</span>
//                                     </div>
//                                   )}
//                                   {application.position && (
//                                     <div className="flex justify-between">
//                                       <span className="text-muted-foreground">Position:</span>
//                                       <span className="font-medium">{application.position}</span>
//                                     </div>
//                                   )}
//                                 </div>
//                               </div>

//                               {/* Experience & Details */}
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">EXPERIENCE</Label>
//                                 <p className="text-sm mt-1">{application.experience || "Not provided"}</p>
                                
//                                 {application.reviewedBy && (
//                                   <div className="mt-3">
//                                     <Label className="text-xs font-medium text-muted-foreground">REVIEWED BY</Label>
//                                     <p className="text-sm mt-1">{application.reviewedBy}</p>
//                                   </div>
//                                 )}
                                
//                                 {application.reviewNotes && (
//                                   <div className="mt-2">
//                                     <Label className="text-xs font-medium text-muted-foreground">REVIEW NOTES</Label>
//                                     <p className="text-sm mt-1">{application.reviewNotes}</p>
//                                   </div>
//                                 )}
//                               </div>

//                               {/* Status & Actions */}
//                               <div>
//                                 <Label className="text-xs font-medium text-muted-foreground">STATUS</Label>
//                                 <div className="mt-1 mb-3">
//                                   <Badge variant={
//                                     application.status === "approved" ? "default" :
//                                     application.status === "rejected" ? "destructive" :
//                                     application.status === "under_review" ? "secondary" : "outline"
//                                   }>
//                                     {application.status.replace('_', ' ').toUpperCase()}
//                                   </Badge>
//                                 </div>

//                                 <div className="space-y-2">
//                                   {application.status === "pending" && (
//                                     <>
//                                       <Button
//                                         size="sm"
//                                         className="w-full"
//                                         onClick={() => updateApplicationStatus(application.id, "under_review")}
//                                       >
//                                         Start Review
//                                       </Button>
//                                       <Button
//                                         size="sm"
//                                         variant="outline"
//                                         className="w-full"
//                                         onClick={() => updateApplicationStatus(application.id, "approved", "Auto-approved")}
//                                       >
//                                         Quick Approve
//                                       </Button>
//                                     </>
//                                   )}
                                  
//                                   {application.status === "under_review" && (
//                                     <>
//                                       <Button
//                                         size="sm"
//                                         className="w-full"
//                                         onClick={() => {
//                                           const notes = prompt("Enter approval notes:");
//                                           if (notes !== null) {
//                                             updateApplicationStatus(application.id, "approved", notes);
//                                           }
//                                         }}
//                                       >
//                                         Approve
//                                       </Button>
//                                       <Button
//                                         size="sm"
//                                         variant="destructive"
//                                         className="w-full"
//                                         onClick={() => {
//                                           const notes = prompt("Enter rejection reason:");
//                                           if (notes !== null) {
//                                             updateApplicationStatus(application.id, "rejected", notes);
//                                           }
//                                         }}
//                                       >
//                                         Reject
//                                       </Button>
//                                     </>
//                                   )}
                                  
//                                   {(application.status === "approved" || application.status === "rejected") && (
//                                     <Button
//                                       size="sm"
//                                       variant="outline"
//                                       className="w-full"
//                                       onClick={() => updateApplicationStatus(application.id, "under_review")}
//                                     >
//                                       Re-review
//                                     </Button>
//                                   )}
                                  
//                                   <Button
//                                     size="sm"
//                                     variant="outline"
//                                     className="w-full"
//                                     onClick={() => deleteApplication(application.id)}
//                                   >
//                                     <Trash2 className="w-4 h-4 mr-1" />
//                                     Delete
//                                   </Button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
                      
//                       {getFilteredApplications().length === 0 && (
//                         <div className="text-center py-8">
//                           <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
//                           <h3 className="text-lg font-medium mb-2">No Applications Found</h3>
//                           <p className="text-muted-foreground">
//                             {applicationFilter === "all" 
//                               ? "No applications have been submitted yet." 
//                               : `No ${applicationFilter.replace('_', ' ')} applications found.`
//                             }
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Application Statistics */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                   <Card>
//                     <CardContent className="p-4">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
//                           <p className="text-2xl font-bold">{applications.length}</p>
//                         </div>
//                         <FileText className="w-8 h-8 text-muted-foreground" />
//                       </div>
//                     </CardContent>
//                   </Card>
                  
//                   <Card>
//                     <CardContent className="p-4">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
//                           <p className="text-2xl font-bold text-orange-600">
//                             {applications.filter(app => app.status === "pending" || app.status === "under_review").length}
//                           </p>
//                         </div>
//                         <Timer className="w-8 h-8 text-orange-600" />
//                       </div>
//                     </CardContent>
//                   </Card>
                  
//                   <Card>
//                     <CardContent className="p-4">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-muted-foreground">Approved</p>
//                           <p className="text-2xl font-bold text-green-600">
//                             {applications.filter(app => app.status === "approved").length}
//                           </p>
//                         </div>
//                         <Trophy className="w-8 h-8 text-green-600" />
//                       </div>
//                     </CardContent>
//                   </Card>
                  
//                   <Card>
//                     <CardContent className="p-4">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-muted-foreground">Approval Rate</p>
//                           <p className="text-2xl font-bold">
//                             {applications.filter(app => app.status === "approved" || app.status === "rejected").length > 0
//                               ? Math.round((applications.filter(app => app.status === "approved").length / 
//                                  applications.filter(app => app.status === "approved" || app.status === "rejected").length) * 100)
//                               : 0}%
//                           </p>
//                         </div>
//                         <BarChart3 className="w-8 h-8 text-blue-600" />
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             ) : (
//               <Card>
//                 <CardContent className="p-6">
//                   <p className="text-muted-foreground text-center">
//                     You don't have permission to access applications.
//                   </p>
//                 </CardContent>
//               </Card>
//             )}
//           </TabsContent>

//         </Tabs>
//       </div>
//     </main>
//   );
// };

// export default AdminDashboard;


import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  FileText,
  LogOut,
  RefreshCw,
  Eye,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building2,
} from "lucide-react";

/* ----------------------------- Types & Helpers ---------------------------- */

interface AdminUser {
  role: "super_admin" | "match_scorer" | "team_manager";
  email: string;
}

const APPLICATIONS_API_URL = "https://aakamshineapi.yugan.tech/api/applications/get";

type Participation = {
  id: string | number;
  fullName: string;
  email?: string;
  mobile?: string;
  organizationName?: string;
  designation?: string;
  isDpiitRegistered?: boolean | string | number | null;
  entityType?: string;
  district?: string;
  regionalHub?: string;
  pincode?: string | number;
  startupDescription?: string;
  sector?: string;
  websiteLinks?: string | string[] | null;
  cricketExperience?: string;
  companyPhoto?: string | null;
  teamLeaderPhoto?: string | null;
  status?: string;
  [key: string]: any;
};

const toBool = (v: any): boolean | undefined => {
  if (v === null || v === undefined || v === "") return undefined;
  if (typeof v === "boolean") return v;
  const s = String(v).trim().toLowerCase();
  if (["true", "yes", "y", "1"].includes(s)) return true;
  if (["false", "no", "n", "0"].includes(s)) return false;
  return undefined;
};

const toArrayFromLinks = (v: Participation["websiteLinks"]): string[] => {
  if (!v) return [];
  if (Array.isArray(v)) return v.filter(Boolean).map(String);
  const s = String(v);
  return s.split(/[\s,]+/).map(x => x.trim()).filter(Boolean);
};

const normalizePhotoUrl = (url?: string | null): string | undefined => {
  if (!url) return undefined;
  const trimmed = String(url).trim();
  if (!trimmed) return undefined;
  return trimmed;
};

const statusColor = (status?: string) => {
  const s = (status || "").toLowerCase();
  if (["approved", "accepted"].includes(s)) return "bg-emerald-100 text-emerald-700";
  if (["rejected", "denied"].includes(s)) return "bg-red-100 text-red-700";
  if (["under_review", "review", "in_review", "processing"].includes(s)) return "bg-amber-100 text-amber-700";
  return "bg-slate-100 text-slate-700";
};

const formatPhone = (p?: string) => (p ? p : "-");
const formatText = (t?: string) => (t && String(t).trim().length > 0 ? String(t) : "-");

/* ----------------------------- UI Subcomponents --------------------------- */

function DetailItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="font-medium break-words">{value}</div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg">
      <div className="px-4 py-2 border-b text-sm font-semibold">{title}</div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function PhotoBlock({ title, src }: { title: string; src?: string }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="px-4 py-2 border-b text-sm text-muted-foreground">{title}</div>
      {src ? (
        <img
          src={src}
          alt={title}
          className="w-full h-60 object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <div className="h-60 w-full bg-muted/50 grid place-items-center text-xs text-muted-foreground">
          No image
        </div>
      )}
    </div>
  );
}

function ApplicationsPanel() {
  const [items, setItems] = useState<Participation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Participation | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lastLoadedAt, setLastLoadedAt] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(APPLICATIONS_API_URL, { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      const list: any[] = Array.isArray(json)
        ? json
        : Array.isArray(json?.data)
        ? json.data
        : Array.isArray(json?.items)
        ? json.items
        : [];

      const normalized: Participation[] = list.map((r: any, idx: number) => ({
        id: r.id ?? r._id ?? r.applicationId ?? idx + 1,
        fullName: r.fullName ?? r.name ?? r.applicantName ?? "Unknown",
        email: r.email ?? "",
        mobile: r.mobile ?? r.phone ?? "",
        organizationName: r.organizationName ?? r.org ?? r.company ?? "",
        designation: r.designation ?? r.role ?? "",
        isDpiitRegistered: toBool(r.isDpiitRegistered) ?? r.isDpiitRegistered,
        entityType: r.entityType ?? "",
        district: r.district ?? "",
        regionalHub: r.regionalHub ?? "",
        pincode: r.pincode ?? "",
        startupDescription: r.startupDescription ?? r.description ?? "",
        sector: r.sector ?? "",
        websiteLinks: r.websiteLinks ?? r.website ?? r.links ?? null,
        cricketExperience: r.cricketExperience ?? r.experience ?? "",
        companyPhoto: normalizePhotoUrl(r.companyPhoto),
        teamLeaderPhoto: normalizePhotoUrl(r.teamLeaderPhoto),
        status: r.status ?? "pending",
      }));

      setItems(normalized);
      setLastLoadedAt(new Date().toLocaleString());
    } catch (err: any) {
      setError(err?.message || "Failed to load data.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => {
      return (
        String(it.fullName || "").toLowerCase().includes(q) ||
        String(it.email || "").toLowerCase().includes(q) ||
        String(it.mobile || "").toLowerCase().includes(q) ||
        String(it.organizationName || "").toLowerCase().includes(q) ||
        String(it.designation || "").toLowerCase().includes(q) ||
        String(it.district || "").toLowerCase().includes(q) ||
        String(it.sector || "").toLowerCase().includes(q) ||
        String(it.status || "").toLowerCase().includes(q)
      );
    });
  }, [items, query]);

  const openPreview = (row: Participation) => {
    setSelected(row);
    setOpen(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex items-center justify-between space-y-0">
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Participation Register
          </CardTitle>
          <div className="flex items-center gap-3">
            {lastLoadedAt && (
              <span className="hidden md:inline text-xs text-muted-foreground">
                Last updated: {lastLoadedAt}
              </span>
            )}
            <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              {loading ? "Refreshing..." : "Refresh"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <Input
              placeholder="Search by name, email, org, district, sector or status..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:max-w-md"
            />
            <div className="text-sm text-muted-foreground">
              Total: {filtered.length} {filtered.length === 1 ? "record" : "records"}
            </div>
          </div>

          {loading && (
            <div className="space-y-3">
              <div className="h-10 bg-muted animate-pulse rounded" />
              <div className="h-10 bg-muted animate-pulse rounded" />
              <div className="h-10 bg-muted animate-pulse rounded" />
            </div>
          )}

          {!loading && error && (
            <div className="p-3 border rounded text-sm text-red-600 bg-red-50">{error}</div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-sm text-muted-foreground">No records found.</div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md overflow-hidden">
                <thead className="bg-muted/50">
                  <tr className="text-left">
                    <th className="p-3 whitespace-nowrap">#</th>
                    <th className="p-3 whitespace-nowrap">Full Name</th>
                    <th className="p-3 whitespace-nowrap">Organization</th>
                    <th className="p-3 whitespace-nowrap">Email</th>
                    <th className="p-3 whitespace-nowrap">Mobile</th>
                    <th className="p-3 whitespace-nowrap">District</th>
                    <th className="p-3 whitespace-nowrap">Sector</th>
                    <th className="p-3 whitespace-nowrap">Status</th>
                    <th className="p-3 whitespace-nowrap text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, idx) => (
                    <tr key={String(row.id)} className="border-t">
                      <td className="p-3 align-top">{idx + 1}</td>
                      <td className="p-3 align-top font-medium">{formatText(row.fullName)}</td>
                      <td className="p-3 align-top">{formatText(row.organizationName)}</td>
                      <td className="p-3 align-top">
                        {row.email ? <a className="underline" href={`mailto:${row.email}`}>{row.email}</a> : "-"}
                      </td>
                      <td className="p-3 align-top">{formatPhone(row.mobile)}</td>
                      <td className="p-3 align-top">{formatText(row.district)}</td>
                      <td className="p-3 align-top">{formatText(row.sector)}</td>
                      <td className="p-3 align-top">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${statusColor(row.status)}`}>
                          {formatText(row.status)}
                        </span>
                      </td>
                      <td className="p-3 align-top text-right">
                        <Button size="sm" variant="outline" onClick={() => openPreview(row)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Redesigned Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl">
          {selected && (
            <>
              <DialogHeader className="pb-3 border-b">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <DialogTitle className="text-xl">{formatText(selected.fullName)}</DialogTitle>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{formatText(selected.organizationName)}</span>
                    </div>
                  </div>
                  <Badge className={statusColor(selected.status)}>{formatText(selected.status)}</Badge>
                </div>
              </DialogHeader>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[70vh] overflow-y-auto pr-1">
                {/* Details */}
                <div className="lg:col-span-7 space-y-4">
                  <Section title="Contact">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <DetailItem
                        label="Email"
                        value={
                          selected.email ? (
                            <a className="underline inline-flex items-center gap-1" href={`mailto:${selected.email}`}>
                              <Mail className="w-4 h-4" />
                              {selected.email}
                            </a>
                          ) : (
                            "-"
                          )
                        }
                      />
                      <DetailItem
                        label="Mobile"
                        value={
                          selected.mobile ? (
                            <a className="underline inline-flex items-center gap-1" href={`tel:${selected.mobile}`}>
                              <Phone className="w-4 h-4" />
                              {selected.mobile}
                            </a>
                          ) : (
                            "-"
                          )
                        }
                      />
                      <DetailItem label="Designation" value={formatText(selected.designation)} />
                    </div>
                  </Section>

                  <Section title="Startup">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <DetailItem label="Entity Type" value={formatText(selected.entityType)} />
                      <DetailItem label="Sector" value={formatText(selected.sector)} />
                      <DetailItem
                        label="DPIIT Registered"
                        value={
                          toBool(selected.isDpiitRegistered) === undefined
                            ? "-"
                            : toBool(selected.isDpiitRegistered)
                            ? "Yes"
                            : "No"
                        }
                      />
                      <div className="sm:col-span-2">
                        <DetailItem
                          label="Website Links"
                          value={
                            toArrayFromLinks(selected.websiteLinks).length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {toArrayFromLinks(selected.websiteLinks).map((u, i) => (
                                  <a
                                    key={i}
                                    href={u.startsWith("http") ? u : `https://${u}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded border hover:underline"
                                  >
                                    <Globe className="w-3 h-3" />
                                    <span className="break-all">{u}</span>
                                  </a>
                                ))}
                              </div>
                            ) : (
                              "-"
                            )
                          }
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <DetailItem
                          label="Startup Description"
                          value={<span className="whitespace-pre-wrap">{formatText(selected.startupDescription)}</span>}
                        />
                      </div>
                    </div>
                  </Section>

                  <Section title="Location">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <DetailItem
                        label="District"
                        value={
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {formatText(selected.district)}
                          </span>
                        }
                      />
                      <DetailItem label="Regional Hub" value={formatText(selected.regionalHub)} />
                      <DetailItem label="Pincode" value={formatText(String(selected.pincode || ""))} />
                    </div>
                  </Section>

                  <Section title="Cricket">
                    <DetailItem label="Cricket Experience" value={formatText(selected.cricketExperience)} />
                  </Section>
                </div>

                {/* Photos / Right rail */}
                <div className="lg:col-span-5 space-y-4">
                  <PhotoBlock title="Company Photo" src={normalizePhotoUrl(selected.companyPhoto)} />
                  <PhotoBlock title="Team Leader Photo" src={normalizePhotoUrl(selected.teamLeaderPhoto)} />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ---------------------------- Main Page (Only Apps) ---------------------------- */

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth");
    const role = localStorage.getItem("adminRole") as AdminUser["role"];
    const email = localStorage.getItem("adminEmail");

    if (!isAuthenticated || !role) {
      navigate("/admin");
      return;
    }

    setUser({ role, email: email || "" });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminRole");
    localStorage.removeItem("adminEmail");
    navigate("/admin");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case "super_admin": return "Super Admin";
      case "match_scorer": return "Match Scorer";
      case "team_manager": return "Team Manager";
      default: return role;
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "super_admin": return "default";
      case "match_scorer": return "secondary";
      case "team_manager": return "outline";
      default: return "outline";
    }
  };

  const canAccessApplications = user.role === "super_admin" || user.role === "team_manager";

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Applications" description="TNGSS Cricket League Participation Register" canonical="/admin/applications" />

      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Applications</h1>
              <p className="text-muted-foreground">Participation register (read-only)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user.email}</p>
                <Badge variant={getRoleBadgeVariant(user.role)}>
                  {getRoleDisplayName(user.role)}
                </Badge>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {canAccessApplications ? (
          <ApplicationsPanel />
        ) : (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-center">
                You don't have permission to access applications.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;
