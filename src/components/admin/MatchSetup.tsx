import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Plus, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface MatchSetupData {
  category: "STARTUP" | "PROFESSIONAL";
  teamA: string;
  teamB: string;
  date: Date | undefined;
  time: string;
  venue: string;
  matchType: "LEAGUE" | "KNOCKOUT" | "SEMI" | "FINAL";
  playingXIA: string[];
  playingXIB: string[];
}

interface Player {
  id: string;
  name: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicketkeeper";
  isCaptain?: boolean;
  isViceCaptain?: boolean;
}

const MatchSetup = () => {
  const [matchData, setMatchData] = useState<MatchSetupData>({
    category: "STARTUP",
    teamA: "",
    teamB: "",
    date: undefined,
    time: "",
    venue: "Sri Shanmugha College Ground",
    matchType: "LEAGUE",
    playingXIA: [],
    playingXIB: [],
  });

  const [selectedTeam, setSelectedTeam] = useState<"A" | "B">("A");
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>([]);

  // Mock teams data
  const teams = {
    STARTUP: [
      "Alpha Startups", "Beta Builders", "Code Ninjas", "Data Devils",
      "Echo Engineers", "Fusion Founders", "Gamma Geeks", "Hive Hackers"
    ],
    PROFESSIONAL: [
      "Pro Warriors", "Tech Titans", "Elite Eagles", "Speed Demons",
      "Power Players", "Velocity Vipers", "Thunder Tigers", "Lightning Lions"
    ]
  };

  // Mock players data
  const getPlayersForTeam = (teamName: string): Player[] => {
    return [
      { id: "1", name: "Player 1", role: "Batsman", isCaptain: true },
      { id: "2", name: "Player 2", role: "Bowler", isViceCaptain: true },
      { id: "3", name: "Player 3", role: "All-rounder" },
      { id: "4", name: "Player 4", role: "Wicketkeeper" },
      { id: "5", name: "Player 5", role: "Batsman" },
      { id: "6", name: "Player 6", role: "Bowler" },
      { id: "7", name: "Player 7", role: "All-rounder" },
      { id: "8", name: "Player 8", role: "Batsman" },
      { id: "9", name: "Player 9", role: "Bowler" },
      { id: "10", name: "Player 10", role: "All-rounder" },
      { id: "11", name: "Player 11", role: "Batsman" },
      { id: "12", name: "Player 12", role: "Bowler" },
      { id: "13", name: "Player 13", role: "Wicketkeeper" },
      { id: "14", name: "Player 14", role: "All-rounder" },
      { id: "15", name: "Player 15", role: "Batsman" },
    ];
  };

  const handleTeamChange = (team: "A" | "B") => {
    setSelectedTeam(team);
    const teamName = team === "A" ? matchData.teamA : matchData.teamB;
    if (teamName) {
      setAvailablePlayers(getPlayersForTeam(teamName));
    }
  };

  const addPlayerToXI = (playerId: string) => {
    const player = availablePlayers.find(p => p.id === playerId);
    if (!player) return;

    const currentXI = selectedTeam === "A" ? matchData.playingXIA : matchData.playingXIB;
    if (currentXI.length >= 11) {
      alert("Playing XI can only have 11 players");
      return;
    }

    if (currentXI.includes(player.name)) {
      alert("Player already in Playing XI");
      return;
    }

    const updatedXI = [...currentXI, player.name];
    setMatchData({
      ...matchData,
      [selectedTeam === "A" ? "playingXIA" : "playingXIB"]: updatedXI
    });
  };

  const removePlayerFromXI = (playerName: string) => {
    const updatedXI = (selectedTeam === "A" ? matchData.playingXIA : matchData.playingXIB)
      .filter(name => name !== playerName);
    
    setMatchData({
      ...matchData,
      [selectedTeam === "A" ? "playingXIA" : "playingXIB"]: updatedXI
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Match Setup Data:", matchData);
    // Here you would typically send the data to your API
    alert("Match created successfully!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Match</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Match Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={matchData.category}
                  onValueChange={(value: "STARTUP" | "PROFESSIONAL") =>
                    setMatchData({ ...matchData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="STARTUP">Startup</SelectItem>
                    <SelectItem value="PROFESSIONAL">Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="matchType">Match Type</Label>
                <Select
                  value={matchData.matchType}
                  onValueChange={(value: "LEAGUE" | "KNOCKOUT" | "SEMI" | "FINAL") =>
                    setMatchData({ ...matchData, matchType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select match type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LEAGUE">League</SelectItem>
                    <SelectItem value="KNOCKOUT">Knockout</SelectItem>
                    <SelectItem value="SEMI">Semi-final</SelectItem>
                    <SelectItem value="FINAL">Final</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamA">Team A</Label>
                <Select
                  value={matchData.teamA}
                  onValueChange={(value) => setMatchData({ ...matchData, teamA: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Team A" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams[matchData.category].map((team) => (
                      <SelectItem key={team} value={team}>{team}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamB">Team B</Label>
                <Select
                  value={matchData.teamB}
                  onValueChange={(value) => setMatchData({ ...matchData, teamB: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Team B" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams[matchData.category]
                      .filter(team => team !== matchData.teamA)
                      .map((team) => (
                        <SelectItem key={team} value={team}>{team}</SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !matchData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {matchData.date ? format(matchData.date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={matchData.date}
                      onSelect={(date) => setMatchData({ ...matchData, date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={matchData.time}
                  onChange={(e) => setMatchData({ ...matchData, time: e.target.value })}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="venue">Venue</Label>
                <Input
                  id="venue"
                  value={matchData.venue}
                  onChange={(e) => setMatchData({ ...matchData, venue: e.target.value })}
                />
              </div>
            </div>

            {/* Playing XI Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Playing XI Selection</h3>
              
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={selectedTeam === "A" ? "default" : "outline"}
                  onClick={() => handleTeamChange("A")}
                >
                  Team A: {matchData.teamA || "Not Selected"}
                </Button>
                <Button
                  type="button"
                  variant={selectedTeam === "B" ? "default" : "outline"}
                  onClick={() => handleTeamChange("B")}
                >
                  Team B: {matchData.teamB || "Not Selected"}
                </Button>
              </div>

              {matchData.teamA && matchData.teamB && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Available Players */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Available Players</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {availablePlayers.map((player) => (
                          <div
                            key={player.id}
                            className="flex items-center justify-between p-2 border rounded-lg hover:bg-muted/50"
                          >
                            <div>
                              <p className="font-medium">{player.name}</p>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {player.role}
                                </Badge>
                                {player.isCaptain && (
                                  <Badge variant="default" className="text-xs">Captain</Badge>
                                )}
                                {player.isViceCaptain && (
                                  <Badge variant="secondary" className="text-xs">Vice-Captain</Badge>
                                )}
                              </div>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => addPlayerToXI(player.id)}
                              disabled={(selectedTeam === "A" ? matchData.playingXIA : matchData.playingXIB).includes(player.name)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Selected Playing XI */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">
                        Playing XI ({selectedTeam === "A" ? matchData.playingXIA.length : matchData.playingXIB.length}/11)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {(selectedTeam === "A" ? matchData.playingXIA : matchData.playingXIB).map((playerName, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 border rounded-lg bg-muted/30"
                          >
                            <span className="font-medium">{playerName}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removePlayerFromXI(playerName)}
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                        {(selectedTeam === "A" ? matchData.playingXIA.length : matchData.playingXIB.length) === 0 && (
                          <p className="text-muted-foreground text-center py-4">
                            No players selected yet
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">
              Create Match
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchSetup;
