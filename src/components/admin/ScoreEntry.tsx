import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Play, 
  Square, 
  RotateCcw, 
  Save,
  Target,
  User,
  Zap
} from "lucide-react";

interface BallEntry {
  over: number;
  ball: number;
  striker: string;
  nonStriker: string;
  bowler: string;
  runs: number;
  extras?: {
    type: "Wide" | "No Ball" | "Bye" | "Leg Bye";
    runs: number;
  };
  wicket?: {
    type: "Bowled" | "Caught" | "LBW" | "Run Out" | "Stumped" | "Hit Wicket" | "Obstructing the Field";
    batsman: string;
    bowler?: string;
  };
  totalRuns: number;
  description: string;
}

interface MatchState {
  currentOver: number;
  currentBall: number;
  totalRuns: number;
  wickets: number;
  overs: number;
  runRate: number;
  battingTeam: string;
  bowlingTeam: string;
  striker: string;
  nonStriker: string;
  bowler: string;
}

const ScoreEntry = () => {
  const [matchState, setMatchState] = useState<MatchState>({
    currentOver: 1,
    currentBall: 1,
    totalRuns: 0,
    wickets: 0,
    overs: 0,
    runRate: 0,
    battingTeam: "Alpha Startups",
    bowlingTeam: "Beta Builders",
    striker: "A. Kumar",
    nonStriker: "R. Iyer",
    bowler: "S. Khan"
  });

  const [ballEntries, setBallEntries] = useState<BallEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Partial<BallEntry>>({
    over: 1,
    ball: 1,
    striker: "A. Kumar",
    nonStriker: "R. Iyer",
    bowler: "S. Khan",
    runs: 0
  });

  const [isLive, setIsLive] = useState(false);

  // Mock players data
  const battingPlayers = [
    "A. Kumar", "R. Iyer", "V. Singh", "S. Mehta", "A. Patel", 
    "D. Sharma", "R. Verma", "M. Gupta", "S. Kumar", "P. Singh", "A. Kumar"
  ];

  const bowlingPlayers = [
    "S. Khan", "M. Patel", "R. Sharma", "J. Bumrah", "R. Jadeja",
    "H. Pandya", "Y. Chahal", "A. Patel", "M. Shami", "K. Yadav", "B. Kumar"
  ];

  const wicketTypes = [
    "Bowled", "Caught", "LBW", "Run Out", "Stumped", "Hit Wicket", "Obstructing the Field"
  ];

  const extraTypes = [
    "Wide", "No Ball", "Bye", "Leg Bye"
  ];

  const handleBallSubmit = () => {
    if (!currentEntry.over || !currentEntry.ball || !currentEntry.striker || !currentEntry.bowler) {
      alert("Please fill in all required fields");
      return;
    }

    const newBall: BallEntry = {
      over: currentEntry.over!,
      ball: currentEntry.ball!,
      striker: currentEntry.striker!,
      nonStriker: currentEntry.nonStriker!,
      bowler: currentEntry.bowler!,
      runs: currentEntry.runs || 0,
      extras: currentEntry.extras,
      wicket: currentEntry.wicket,
      totalRuns: (currentEntry.runs || 0) + (currentEntry.extras?.runs || 0),
      description: generateDescription(currentEntry)
    };

    setBallEntries([newBall, ...ballEntries]);

    // Update match state
    const newTotalRuns = matchState.totalRuns + newBall.totalRuns;
    const newWickets = matchState.wickets + (newBall.wicket ? 1 : 0);
    const newOvers = newBall.ball === 6 ? matchState.overs + 1 : matchState.overs;
    const newRunRate = newOvers > 0 ? newTotalRuns / newOvers : 0;

    setMatchState({
      ...matchState,
      totalRuns: newTotalRuns,
      wickets: newWickets,
      overs: newOvers,
      runRate: newRunRate,
      currentOver: newBall.ball === 6 ? matchState.currentOver + 1 : matchState.currentOver,
      currentBall: newBall.ball === 6 ? 1 : newBall.ball + 1
    });

    // Reset current entry
    setCurrentEntry({
      over: newBall.ball === 6 ? matchState.currentOver + 1 : matchState.currentOver,
      ball: newBall.ball === 6 ? 1 : newBall.ball + 1,
      striker: currentEntry.striker,
      nonStriker: currentEntry.nonStriker,
      bowler: currentEntry.bowler,
      runs: 0
    });
  };

  const generateDescription = (entry: Partial<BallEntry>): string => {
    if (entry.wicket) {
      return `${entry.wicket.type} - ${entry.wicket.batsman} out`;
    }
    if (entry.extras) {
      return `${entry.extras.type} - ${entry.extras.runs} runs`;
    }
    if (entry.runs === 0) {
      return "Dot ball";
    }
    if (entry.runs === 4) {
      return "FOUR!";
    }
    if (entry.runs === 6) {
      return "SIX!";
    }
    return `${entry.runs} run${entry.runs > 1 ? 's' : ''}`;
  };

  const handleUndo = () => {
    if (ballEntries.length > 0) {
      const lastBall = ballEntries[0];
      setBallEntries(ballEntries.slice(1));
      
      // Revert match state
      const newTotalRuns = matchState.totalRuns - lastBall.totalRuns;
      const newWickets = matchState.wickets - (lastBall.wicket ? 1 : 0);
      const newOvers = lastBall.ball === 1 ? matchState.overs - 1 : matchState.overs;
      const newRunRate = newOvers > 0 ? newTotalRuns / newOvers : 0;

      setMatchState({
        ...matchState,
        totalRuns: newTotalRuns,
        wickets: newWickets,
        overs: newOvers,
        runRate: newRunRate,
        currentOver: lastBall.ball === 1 ? matchState.currentOver - 1 : matchState.currentOver,
        currentBall: lastBall.ball === 1 ? 6 : lastBall.ball - 1
      });
    }
  };

  const toggleLive = () => {
    setIsLive(!isLive);
  };

  return (
    <div className="space-y-6">
      {/* Match State Display */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Match State</span>
            <div className="flex items-center gap-2">
              <Badge variant={isLive ? "destructive" : "secondary"}>
                {isLive ? "LIVE" : "OFFLINE"}
              </Badge>
              <Button size="sm" onClick={toggleLive}>
                {isLive ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isLive ? "Stop" : "Go Live"}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{matchState.totalRuns}/{matchState.wickets}</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{matchState.overs}.{matchState.currentBall}</div>
              <div className="text-sm text-muted-foreground">Overs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{matchState.runRate.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Run Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{matchState.battingTeam}</div>
              <div className="text-sm text-muted-foreground">Batting</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ball Entry Form */}
      <Card>
        <CardHeader>
          <CardTitle>Ball Entry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Over</Label>
              <Input
                type="number"
                value={currentEntry.over || ""}
                onChange={(e) => setCurrentEntry({ ...currentEntry, over: parseInt(e.target.value) })}
                min="1"
                max="20"
              />
            </div>

            <div className="space-y-2">
              <Label>Ball</Label>
              <Input
                type="number"
                value={currentEntry.ball || ""}
                onChange={(e) => setCurrentEntry({ ...currentEntry, ball: parseInt(e.target.value) })}
                min="1"
                max="6"
              />
            </div>

            <div className="space-y-2">
              <Label>Runs</Label>
              <Input
                type="number"
                value={currentEntry.runs || ""}
                onChange={(e) => setCurrentEntry({ ...currentEntry, runs: parseInt(e.target.value) })}
                min="0"
                max="6"
              />
            </div>

            <div className="space-y-2">
              <Label>Striker</Label>
              <Select
                value={currentEntry.striker || ""}
                onValueChange={(value) => setCurrentEntry({ ...currentEntry, striker: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select striker" />
                </SelectTrigger>
                <SelectContent>
                  {battingPlayers.map((player) => (
                    <SelectItem key={player} value={player}>{player}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Non-Striker</Label>
              <Select
                value={currentEntry.nonStriker || ""}
                onValueChange={(value) => setCurrentEntry({ ...currentEntry, nonStriker: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select non-striker" />
                </SelectTrigger>
                <SelectContent>
                  {battingPlayers.map((player) => (
                    <SelectItem key={player} value={player}>{player}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Bowler</Label>
              <Select
                value={currentEntry.bowler || ""}
                onValueChange={(value) => setCurrentEntry({ ...currentEntry, bowler: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select bowler" />
                </SelectTrigger>
                <SelectContent>
                  {bowlingPlayers.map((player) => (
                    <SelectItem key={player} value={player}>{player}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Extras (Optional)</Label>
              <Select
                value={currentEntry.extras?.type || ""}
                onValueChange={(value) => {
                  if (value) {
                    setCurrentEntry({
                      ...currentEntry,
                      extras: { type: value as any, runs: currentEntry.extras?.runs || 0 }
                    });
                  } else {
                    setCurrentEntry({ ...currentEntry, extras: undefined });
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select extra type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">No Extras</SelectItem>
                  {extraTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {currentEntry.extras && (
              <div className="space-y-2">
                <Label>Extra Runs</Label>
                <Input
                  type="number"
                  value={currentEntry.extras.runs || ""}
                  onChange={(e) => setCurrentEntry({
                    ...currentEntry,
                    extras: { ...currentEntry.extras!, runs: parseInt(e.target.value) }
                  })}
                  min="1"
                  max="6"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Wicket (Optional)</Label>
              <Select
                value={currentEntry.wicket?.type || ""}
                onValueChange={(value) => {
                  if (value) {
                    setCurrentEntry({
                      ...currentEntry,
                      wicket: { type: value as any, batsman: currentEntry.striker || "" }
                    });
                  } else {
                    setCurrentEntry({ ...currentEntry, wicket: undefined });
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select wicket type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">No Wicket</SelectItem>
                  {wicketTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button onClick={handleBallSubmit} className="flex-1">
              <Save className="w-4 h-4 mr-2" />
              Update Ball
            </Button>
            <Button variant="outline" onClick={handleUndo} disabled={ballEntries.length === 0}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Undo Last Ball
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Ball History */}
      <Card>
        <CardHeader>
          <CardTitle>Ball History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-96 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Over.Ball</TableHead>
                  <TableHead>Batsman</TableHead>
                  <TableHead>Bowler</TableHead>
                  <TableHead>Runs</TableHead>
                  <TableHead>Extras</TableHead>
                  <TableHead>Wicket</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ballEntries.map((ball, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono">{ball.over}.{ball.ball}</TableCell>
                    <TableCell>{ball.striker}</TableCell>
                    <TableCell>{ball.bowler}</TableCell>
                    <TableCell>{ball.runs}</TableCell>
                    <TableCell>
                      {ball.extras ? `${ball.extras.type} (${ball.extras.runs})` : "-"}
                    </TableCell>
                    <TableCell>
                      {ball.wicket ? `${ball.wicket.type} - ${ball.wicket.batsman}` : "-"}
                    </TableCell>
                    <TableCell>{ball.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreEntry;
