import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Users, 
  Trophy, 
  Settings, 
  BarChart3, 
  FileText,
  LogOut,
  Plus,
  Play,
  Square,
  UserPlus,
  Edit,
  Trash2,
  Save,
  Target,
  Timer,
  User
} from "lucide-react";

interface AdminUser {
  role: "super_admin" | "match_scorer" | "team_manager";
  email: string;
}

interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  battingAvg: number;
  bowlingAvg: number;
  matchesPlayed: number;
}

interface Match {
  id: string;
  team1: string;
  team2: string;
  status: "upcoming" | "live" | "completed";
  date: string;
  venue: string;
}

interface ScoreEntry {
  matchId: string;
  innings: 1 | 2;
  team: string;
  batsman1: { name: string; runs: number; balls: number; fours: number; sixes: number };
  batsman2: { name: string; runs: number; balls: number; fours: number; sixes: number };
  striker: 'batsman1' | 'batsman2';
  bowler: string;
  runs: number;
  wickets: number;
  overs: number;
  balls: number;
  extras: number;
}

interface BallEntry {
  overNumber: number;
  ballNumber: number;
  batsman: string;
  bowler: string;
  runs: number;
  isExtra: boolean;
  extraType?: string;
  isWicket: boolean;
  wicketType?: string;
  commentary: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [players, setPlayers] = useState<Player[]>([
    { id: "1", name: "John Smith", team: "Alpha Startups", position: "Batsman", battingAvg: 45.2, bowlingAvg: 0, matchesPlayed: 12 },
    { id: "2", name: "Mike Johnson", team: "Beta Builders", position: "All-rounder", battingAvg: 38.7, bowlingAvg: 25.3, matchesPlayed: 15 },
    { id: "3", name: "David Brown", team: "Code Ninjas", position: "Bowler", battingAvg: 18.5, bowlingAvg: 22.1, matchesPlayed: 10 }
  ]);
  const [matches, setMatches] = useState<Match[]>([
    { id: "1", team1: "Alpha Startups", team2: "Beta Builders", status: "live", date: "2025-08-11", venue: "Cricket Ground A" },
    { id: "2", team1: "Pro Warriors", team2: "Tech Titans", status: "completed", date: "2025-08-10", venue: "Cricket Ground B" },
    { id: "3", team1: "Code Ninjas", team2: "Data Devils", status: "upcoming", date: "2025-08-12", venue: "Cricket Ground C" }
  ]);
  
  // Player management state
  const [newPlayer, setNewPlayer] = useState({
    name: "", team: "", position: "", battingAvg: 0, bowlingAvg: 0, matchesPlayed: 0
  });
  const [editingPlayer, setEditingPlayer] = useState<string | null>(null);
  
  // Score entry state
  const [selectedMatch, setSelectedMatch] = useState<string>("");
  const [scoreEntry, setScoreEntry] = useState<ScoreEntry>({
    matchId: "",
    innings: 1,
    team: "",
    batsman1: { name: "", runs: 0, balls: 0, fours: 0, sixes: 0 },
    batsman2: { name: "", runs: 0, balls: 0, fours: 0, sixes: 0 },
    striker: 'batsman1',
    bowler: "",
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0,
    extras: 0
  });
  const [ballByBall, setBallByBall] = useState<BallEntry[]>([]);
  const [currentOver, setCurrentOver] = useState<BallEntry[]>([]);

  useEffect(() => {
    // Check authentication
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

  const addPlayer = () => {
    if (newPlayer.name && newPlayer.team && newPlayer.position) {
      const player: Player = {
        id: Date.now().toString(),
        ...newPlayer
      };
      setPlayers([...players, player]);
      setNewPlayer({ name: "", team: "", position: "", battingAvg: 0, bowlingAvg: 0, matchesPlayed: 0 });
    }
  };

  const updatePlayer = (id: string, updatedPlayer: Partial<Player>) => {
    setPlayers(players.map(p => p.id === id ? { ...p, ...updatedPlayer } : p));
    setEditingPlayer(null);
  };

  const deletePlayer = (id: string) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  const addRuns = (runs: number, isExtra: boolean = false, extraType?: string) => {
    const striker = scoreEntry.striker;
    const currentBatsman = scoreEntry[striker];
    
    const ballEntry: BallEntry = {
      overNumber: scoreEntry.overs + 1,
      ballNumber: scoreEntry.balls + 1,
      batsman: currentBatsman.name,
      bowler: scoreEntry.bowler,
      runs: runs,
      isExtra: isExtra,
      extraType: extraType,
      isWicket: false,
      commentary: isExtra ? `${extraType} - ${runs} run${runs !== 1 ? 's' : ''}` : `${runs} run${runs !== 1 ? 's' : ''}`
    };

    // Update batsman stats (only if not an extra)
    if (!isExtra && runs > 0) {
      const updatedBatsman = {
        ...currentBatsman,
        runs: currentBatsman.runs + runs,
        balls: currentBatsman.balls + 1,
        fours: runs === 4 ? currentBatsman.fours + 1 : currentBatsman.fours,
        sixes: runs === 6 ? currentBatsman.sixes + 1 : currentBatsman.sixes
      };
      
      setScoreEntry(prev => ({
        ...prev,
        [striker]: updatedBatsman,
        runs: prev.runs + runs,
        balls: !isExtra ? prev.balls + 1 : prev.balls,
        extras: isExtra ? prev.extras + runs : prev.extras,
        striker: runs % 2 === 1 ? (striker === 'batsman1' ? 'batsman2' : 'batsman1') : striker
      }));
    } else if (isExtra) {
      setScoreEntry(prev => ({
        ...prev,
        runs: prev.runs + runs,
        extras: prev.extras + runs
      }));
    } else {
      // 0 runs, still count the ball
      const updatedBatsman = {
        ...currentBatsman,
        balls: currentBatsman.balls + 1
      };
      
      setScoreEntry(prev => ({
        ...prev,
        [striker]: updatedBatsman,
        balls: prev.balls + 1
      }));
    }

    setBallByBall(prev => [...prev, ballEntry]);
    setCurrentOver(prev => [...prev, ballEntry]);

    // Check if over is complete (6 valid balls)
    if (!isExtra && scoreEntry.balls + 1 >= 6) {
      completeOver();
    }
  };

  const addWicket = (wicketType: string = "Out") => {
    const striker = scoreEntry.striker;
    const currentBatsman = scoreEntry[striker];
    
    const ballEntry: BallEntry = {
      overNumber: scoreEntry.overs + 1,
      ballNumber: scoreEntry.balls + 1,
      batsman: currentBatsman.name,
      bowler: scoreEntry.bowler,
      runs: 0,
      isExtra: false,
      isWicket: true,
      wicketType: wicketType,
      commentary: `WICKET! ${currentBatsman.name} ${wicketType}`
    };

    const updatedBatsman = {
      ...currentBatsman,
      balls: currentBatsman.balls + 1
    };

    setScoreEntry(prev => ({
      ...prev,
      [striker]: updatedBatsman,
      wickets: prev.wickets + 1,
      balls: prev.balls + 1
    }));

    setBallByBall(prev => [...prev, ballEntry]);
    setCurrentOver(prev => [...prev, ballEntry]);

    // Check if over is complete
    if (scoreEntry.balls + 1 >= 6) {
      completeOver();
    }
  };

  const completeOver = () => {
    setScoreEntry(prev => ({
      ...prev,
      overs: prev.overs + 1,
      balls: 0,
      striker: prev.striker === 'batsman1' ? 'batsman2' : 'batsman1' // Change strike at end of over
    }));
    setCurrentOver([]);
  };

  const switchStrike = () => {
    setScoreEntry(prev => ({
      ...prev,
      striker: prev.striker === 'batsman1' ? 'batsman2' : 'batsman1'
    }));
  };

  const updateBatsmanName = (batsman: 'batsman1' | 'batsman2', name: string) => {
    setScoreEntry(prev => ({
      ...prev,
      [batsman]: {
        ...prev[batsman],
        name: name
      }
    }));
  };

  const editBallEntry = (index: number, newRuns: number) => {
    const updatedBalls = [...ballByBall];
    const oldRuns = updatedBalls[index].runs;
    updatedBalls[index] = {
      ...updatedBalls[index],
      runs: newRuns,
      commentary: updatedBalls[index].isExtra 
        ? `${updatedBalls[index].extraType} - ${newRuns} run${newRuns !== 1 ? 's' : ''}`
        : `${newRuns} run${newRuns !== 1 ? 's' : ''}`
    };
    
    setBallByBall(updatedBalls);
    
    // Update total runs
    setScoreEntry(prev => ({
      ...prev,
      runs: prev.runs - oldRuns + newRuns
    }));
  };

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>;
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

  // Check permissions based on role
  const canAccessMatches = user.role === "super_admin" || user.role === "team_manager";
  const canAccessScoring = user.role === "super_admin" || user.role === "match_scorer";
  const canAccessApplications = user.role === "super_admin" || user.role === "team_manager";

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Admin Dashboard" description="TNGSS Cricket League Admin Panel" canonical="/admin/dashboard" />
      
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">TNGSS Cricket League Management</p>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="matches" disabled={!canAccessMatches}>Matches</TabsTrigger>
            <TabsTrigger value="scoring" disabled={!canAccessScoring}>Scoring</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="applications" disabled={!canAccessApplications}>Applications</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{matches.length}</div>
                  <p className="text-xs text-muted-foreground">+2 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Registered Players</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{players.length}</div>
                  <p className="text-xs text-muted-foreground">Active players</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Live Matches</CardTitle>
                  <Play className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{matches.filter(m => m.status === 'live').length}</div>
                  <p className="text-xs text-muted-foreground">Currently live</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Applications</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+12 new today</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {matches.map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{match.team1} vs {match.team2}</p>
                          <p className="text-sm text-muted-foreground">{match.date} - {match.venue}</p>
                        </div>
                        <Badge variant={match.status === "live" ? "destructive" : match.status === "completed" ? "default" : "secondary"}>
                          {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {canAccessMatches && (
                      <Button className="h-20 flex-col" onClick={() => setActiveTab("matches")}>
                        <Plus className="w-6 h-6 mb-2" />
                        New Match
                      </Button>
                    )}
                    {canAccessScoring && (
                      <Button className="h-20 flex-col" onClick={() => setActiveTab("scoring")}>
                        <BarChart3 className="w-6 h-6 mb-2" />
                        Score Entry
                      </Button>
                    )}
                    <Button className="h-20 flex-col" onClick={() => setActiveTab("players")}>
                      <UserPlus className="w-6 h-6 mb-2" />
                      Add Player
                    </Button>
                    <Button className="h-20 flex-col" onClick={() => setActiveTab("teams")}>
                      <Users className="w-6 h-6 mb-2" />
                      Manage Teams
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            {canAccessMatches ? (
              <Card>
                <CardHeader>
                  <CardTitle>Match Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Match setup functionality will be implemented here.</p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    You don't have permission to access match management.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Sophisticated Scoring Tab */}
          {/* Sophisticated Scoring Tab */}
<TabsContent value="scoring" className="space-y-6">
  {canAccessScoring ? (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Match Selection & Current Score */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Match & Score Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="match-select">Select Match</Label>
            <Select value={selectedMatch} onValueChange={setSelectedMatch}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a match" />
              </SelectTrigger>
              <SelectContent>
                {matches.filter(m => m.status === "live").map(match => (
                  <SelectItem key={match.id} value={match.id}>
                    {match.team1} vs {match.team2}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="innings">Innings</Label>
              <Select
                value={scoreEntry.innings.toString()}
                onValueChange={(value) =>
                  setScoreEntry(prev => ({ ...prev, innings: parseInt(value) as 1 | 2 }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Innings</SelectItem>
                  <SelectItem value="2">2nd Innings</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="batting-team">Batting Team</Label>
              <Input
                id="batting-team"
                value={scoreEntry.team}
                onChange={(e) => setScoreEntry(prev => ({ ...prev, team: e.target.value }))}
                placeholder="Team name"
              />
            </div>
          </div>

          {/* Current Score Display */}
          <div className="bg-muted p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-primary">
              {scoreEntry.runs}/{scoreEntry.wickets}
            </div>
            <div className="text-lg text-muted-foreground">
              ({scoreEntry.overs}.{scoreEntry.balls} overs)
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Extras: {scoreEntry.extras}
            </div>
          </div>

          {/* Batsmen Info */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Batsmen</Label>
            <div className="space-y-2">
              <div
                className={`p-3 border rounded-lg ${
                  scoreEntry.striker === "batsman1" ? "border-primary bg-primary/5" : "border-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Input
                    value={scoreEntry.batsman1.name}
                    onChange={(e) => updateBatsmanName("batsman1", e.target.value)}
                    placeholder="Batsman 1"
                    className="border-none p-0 font-medium"
                  />
                  {scoreEntry.striker === "batsman1" && (
                    <Badge variant="default" className="text-xs">
                      *
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {scoreEntry.batsman1.runs} ({scoreEntry.batsman1.balls})
                  {scoreEntry.batsman1.fours > 0 && ` • ${scoreEntry.batsman1.fours}×4`}
                  {scoreEntry.batsman1.sixes > 0 && ` • ${scoreEntry.batsman1.sixes}×6`}
                </div>
              </div>

              <div
                className={`p-3 border rounded-lg ${
                  scoreEntry.striker === "batsman2" ? "border-primary bg-primary/5" : "border-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Input
                    value={scoreEntry.batsman2.name}
                    onChange={(e) => updateBatsmanName("batsman2", e.target.value)}
                    placeholder="Batsman 2"
                    className="border-none p-0 font-medium"
                  />
                  {scoreEntry.striker === "batsman2" && (
                    <Badge variant="default" className="text-xs">
                      *
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {scoreEntry.batsman2.runs} ({scoreEntry.batsman2.balls})
                  {scoreEntry.batsman2.fours > 0 && ` • ${scoreEntry.batsman2.fours}×4`}
                  {scoreEntry.batsman2.sixes > 0 && ` • ${scoreEntry.batsman2.sixes}×6`}
                </div>
              </div>
            </div>

            <Button variant="outline" size="sm" onClick={switchStrike} className="w-full">
              Switch Strike
            </Button>
          </div>

          <div>
            <Label htmlFor="bowler">Current Bowler</Label>
            <Input
              id="bowler"
              value={scoreEntry.bowler}
              onChange={(e) => setScoreEntry(prev => ({ ...prev, bowler: e.target.value }))}
              placeholder="Bowler name"
            />
          </div>
        </CardContent>
      </Card>

      {/* Scoring Interface */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Ball by Ball Scoring
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Run Scoring */}
          <div className="grid grid-cols-3 gap-2">
            <Label className="col-span-3 text-sm font-medium">Runs</Label>
            {[0, 1, 2, 3, 4, 6].map(runs => (
              <Button
                key={runs}
                variant={runs === 0 ? "outline" : runs >= 4 ? "default" : "secondary"}
                className="h-12 text-lg font-bold"
                onClick={() => addRuns(runs)}
              >
                {runs}
              </Button>
            ))}
          </div>

          {/* Wicket Options */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Wickets</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="destructive" className="h-10" onClick={() => addWicket("Bowled")}>
                Bowled
              </Button>
              <Button variant="destructive" className="h-10" onClick={() => addWicket("Caught")}>
                Caught
              </Button>
              <Button variant="destructive" className="h-10" onClick={() => addWicket("LBW")}>
                LBW
              </Button>
              <Button variant="destructive" className="h-10" onClick={() => addWicket("Run Out")}>
                Run Out
              </Button>
            </div>
          </div>

          {/* Extras */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Extras</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "Wide")}>
                Wide
              </Button>
              <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "No Ball")}>
                No Ball
              </Button>
              <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "Bye")}>
                Bye
              </Button>
              <Button variant="secondary" className="h-10" onClick={() => addRuns(1, true, "Leg Bye")}>
                Leg Bye
              </Button>
            </div>
          </div>

          {/* Current Over Display */}
          <div className="bg-muted p-3 rounded-lg">
            <Label className="text-sm font-medium">This Over</Label>
            <div className="flex flex-wrap gap-1 mt-2">
              {currentOver.map((ball, index) => (
                <Badge
                  key={index}
                  variant={ball.isWicket ? "destructive" : ball.isExtra ? "secondary" : "default"}
                  className="text-xs"
                >
                  {ball.isWicket ? "W" : ball.runs}
                </Badge>
              ))}
              {Array.from({ length: Math.max(0, 6 - currentOver.length) }).map((_, index) => (
                <div
                  key={index}
                  className="w-6 h-6 border border-dashed border-muted-foreground rounded flex items-center justify-center text-xs"
                >
                  •
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ball by Ball Commentary & Over Analysis */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="w-5 h-5" />
            Commentary & Over Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Latest Balls */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Ball by Ball</Label>
              <div className="h-48 overflow-y-auto space-y-1 border rounded-md p-3">
                {ballByBall.length === 0 ? (
                  <p className="text-muted-foreground text-center text-sm">No balls bowled yet</p>
                ) : (
                  ballByBall
                    .slice(-10)
                    .reverse()
                    .map((ball, index) => (
                      <div
                        key={ballByBall.length - 1 - index}
                        className="flex justify-between items-center p-2 bg-muted/50 rounded text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {ball.overNumber}.{ball.ballNumber}
                          </Badge>
                          <span className="font-medium">{ball.batsman}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={ball.runs}
                            onChange={(e) =>
                              editBallEntry(ballByBall.length - 1 - index, parseInt(e.target.value) || 0)
                            }
                            className="w-12 h-6 text-xs text-center"
                            min={0}
                            max={6}
                          />
                          <span className="text-xs text-muted-foreground">{ball.commentary}</span>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>

            {/* Over Summary */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Over Summary</Label>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Current Over:</span>
                    <span className="font-medium">{scoreEntry.overs + 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Balls Bowled:</span>
                    <span className="font-medium">{scoreEntry.balls}/6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Over Runs:</span>
                    <span className="font-medium">
                      {currentOver.reduce((sum, ball) => sum + ball.runs, 0)}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Strike Rate:</span>
                    <span className="font-medium">
                      {scoreEntry[scoreEntry.striker].balls > 0
                        ? ((scoreEntry[scoreEntry.striker].runs / scoreEntry[scoreEntry.striker].balls) * 100).toFixed(1)
                        : "0.0"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Run Rate:</span>
                    <span className="font-medium">
                      {scoreEntry.overs + scoreEntry.balls / 6 > 0
                        ? (scoreEntry.runs / (scoreEntry.overs + scoreEntry.balls / 6)).toFixed(2)
                        : "0.00"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : (
    <Card>
      <CardContent className="p-6">
        <p className="text-muted-foreground text-center">
          You don't have permission to access scoring functionality.
        </p>
      </CardContent>
    </Card>
  )}
</TabsContent>


          {/* Teams Tab */}
          <TabsContent value="teams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Team management functionality will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Players Tab */}
          <TabsContent value="players" className="space-y-6">
            {/* Add New Player */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Add New Player
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="player-name">Player Name</Label>
                    <Input
                      id="player-name"
                      value={newPlayer.name}
                      onChange={(e) => setNewPlayer(prev => ({...prev, name: e.target.value}))}
                      placeholder="Enter player name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="player-team">Team</Label>
                    <Input
                      id="player-team"
                      value={newPlayer.team}
                      onChange={(e) => setNewPlayer(prev => ({...prev, team: e.target.value}))}
                      placeholder="Enter team name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="player-position">Position</Label>
                    <Select value={newPlayer.position} onValueChange={(value) => setNewPlayer(prev => ({...prev, position: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Batsman">Batsman</SelectItem>
                        <SelectItem value="Bowler">Bowler</SelectItem>
                        <SelectItem value="All-rounder">All-rounder</SelectItem>
                        <SelectItem value="Wicket-keeper">Wicket-keeper</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="batting-avg">Batting Average</Label>
                    <Input
                      id="batting-avg"
                      type="number"
                      value={newPlayer.battingAvg}
                      onChange={(e) => setNewPlayer(prev => ({...prev, battingAvg: parseFloat(e.target.value) || 0}))}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bowling-avg">Bowling Average</Label>
                    <Input
                      id="bowling-avg"
                      type="number"
                      value={newPlayer.bowlingAvg}
                      onChange={(e) => setNewPlayer(prev => ({...prev, bowlingAvg: parseFloat(e.target.value) || 0}))}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="matches-played">Matches Played</Label>
                    <Input
                      id="matches-played"
                      type="number"
                      value={newPlayer.matchesPlayed}
                      onChange={(e) => setNewPlayer(prev => ({...prev, matchesPlayed: parseInt(e.target.value) || 0}))}
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Button onClick={addPlayer} className="w-full md:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Player
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Players List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Players List ({players.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {players.map((player) => (
                    <div key={player.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 flex-1">
                          <div>
                            <Label className="text-xs font-medium text-muted-foreground">NAME</Label>
                            {editingPlayer === player.id ? (
                              <Input
                                value={player.name}
                                onChange={(e) => updatePlayer(player.id, {name: e.target.value})}
                                className="mt-1"
                              />
                            ) : (
                              <p className="font-medium">{player.name}</p>
                            )}
                          </div>
                          <div>
                            <Label className="text-xs font-medium text-muted-foreground">TEAM</Label>
                            {editingPlayer === player.id ? (
                              <Input
                                value={player.team}
                                onChange={(e) => updatePlayer(player.id, {team: e.target.value})}
                                className="mt-1"
                              />
                            ) : (
                              <p>{player.team}</p>
                            )}
                          </div>
                          <div>
                            <Label className="text-xs font-medium text-muted-foreground">POSITION</Label>
                            <Badge variant="secondary" className="mt-1">{player.position}</Badge>
                          </div>
                          <div>
                            <Label className="text-xs font-medium text-muted-foreground">BAT AVG</Label>
                            <p>{player.battingAvg.toFixed(1)}</p>
                          </div>
                          <div>
                            <Label className="text-xs font-medium text-muted-foreground">MATCHES</Label>
                            <p>{player.matchesPlayed}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          {editingPlayer === player.id ? (
                            <Button size="sm" onClick={() => setEditingPlayer(null)}>
                              <Save className="w-4 h-4" />
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" onClick={() => setEditingPlayer(player.id)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                          )}
                          <Button size="sm" variant="destructive" onClick={() => deletePlayer(player.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            {canAccessApplications ? (
              <Card>
                <CardHeader>
                  <CardTitle>Applications Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Applications management functionality will be implemented here.</p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    You don't have permission to access applications.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

        </Tabs>
      </div>
    </main>
  );
};

export default AdminDashboard;