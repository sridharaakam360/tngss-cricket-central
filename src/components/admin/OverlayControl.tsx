import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Play, 
  Square, 
  RefreshCw, 
  Settings,
  Eye,
  EyeOff,
  Zap,
  Target
} from "lucide-react";

interface OverlayData {
  matchTitle: string;
  currentScore: string;
  overs: string;
  striker: {
    name: string;
    runs: number;
    balls: number;
    sr: number;
  };
  nonStriker: {
    name: string;
    runs: number;
    balls: number;
    sr: number;
  };
  bowler: {
    name: string;
    overs: number;
    runs: number;
    wickets: number;
  };
  lastBall: string;
  runRate: number;
  partnership: {
    runs: number;
    balls: number;
  };
  extras: number;
}

const OverlayControl = () => {
  const [isLive, setIsLive] = useState(false);
  const [overlayData, setOverlayData] = useState<OverlayData>({
    matchTitle: "Alpha Startups vs Beta Builders",
    currentScore: "135/4",
    overs: "17.3",
    striker: {
      name: "A. Kumar",
      runs: 45,
      balls: 32,
      sr: 140.6
    },
    nonStriker: {
      name: "R. Iyer",
      runs: 28,
      balls: 18,
      sr: 155.6
    },
    bowler: {
      name: "S. Khan",
      overs: 3.3,
      runs: 24,
      wickets: 2
    },
    lastBall: "1 run",
    runRate: 7.8,
    partnership: {
      runs: 45,
      balls: 32
    },
    extras: 8
  });

  const [displaySettings, setDisplaySettings] = useState({
    showScore: true,
    showBatsmen: true,
    showBowler: true,
    showLastBall: true,
    showRunRate: true,
    showPartnership: true,
    showExtras: false
  });

  const [updateInterval, setUpdateInterval] = useState(5000); // 5 seconds

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLive) {
      interval = setInterval(() => {
        // Simulate real-time updates
        updateOverlayData();
      }, updateInterval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isLive, updateInterval]);

  const updateOverlayData = () => {
    // Simulate real-time data updates
    setOverlayData(prev => ({
      ...prev,
      currentScore: `${Math.floor(Math.random() * 50) + 130}/${Math.floor(Math.random() * 3) + 4}`,
      overs: `${Math.floor(Math.random() * 5) + 17}.${Math.floor(Math.random() * 6) + 1}`,
      runRate: parseFloat((Math.random() * 3 + 7).toFixed(1)),
      lastBall: ["1 run", "2 runs", "0", "4 runs", "6 runs"][Math.floor(Math.random() * 5)]
    }));
  };

  const toggleLive = () => {
    setIsLive(!isLive);
  };

  const pushToOverlay = () => {
    // Here you would typically send the data to your overlay system
    console.log("Pushing to overlay:", overlayData);
    alert("Data pushed to overlay successfully!");
  };

  const resetOverlay = () => {
    setOverlayData({
      matchTitle: "Alpha Startups vs Beta Builders",
      currentScore: "0/0",
      overs: "0.0",
      striker: {
        name: "A. Kumar",
        runs: 0,
        balls: 0,
        sr: 0
      },
      nonStriker: {
        name: "R. Iyer",
        runs: 0,
        balls: 0,
        sr: 0
      },
      bowler: {
        name: "S. Khan",
        overs: 0,
        runs: 0,
        wickets: 0
      },
      lastBall: "0",
      runRate: 0,
      partnership: {
        runs: 0,
        balls: 0
      },
      extras: 0
    });
  };

  return (
    <div className="space-y-6">
      {/* Live Control */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overlay Control</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Update Interval (seconds)</Label>
              <Select
                value={updateInterval.toString()}
                onValueChange={(value) => setUpdateInterval(parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">1 second</SelectItem>
                  <SelectItem value="3000">3 seconds</SelectItem>
                  <SelectItem value="5000">5 seconds</SelectItem>
                  <SelectItem value="10000">10 seconds</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Actions</Label>
              <div className="flex gap-2">
                <Button size="sm" onClick={pushToOverlay}>
                  <Zap className="w-4 h-4 mr-2" />
                  Push to Overlay
                </Button>
                <Button size="sm" variant="outline" onClick={resetOverlay}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Status</Label>
              <div className="text-sm text-muted-foreground">
                {isLive ? "Live updates enabled" : "Manual updates only"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Display Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Display Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="showScore"
                checked={displaySettings.showScore}
                onCheckedChange={(checked) =>
                  setDisplaySettings({ ...displaySettings, showScore: checked })
                }
              />
              <Label htmlFor="showScore">Score</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="showBatsmen"
                checked={displaySettings.showBatsmen}
                onCheckedChange={(checked) =>
                  setDisplaySettings({ ...displaySettings, showBatsmen: checked })
                }
              />
              <Label htmlFor="showBatsmen">Batsmen</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="showBowler"
                checked={displaySettings.showBowler}
                onCheckedChange={(checked) =>
                  setDisplaySettings({ ...displaySettings, showBowler: checked })
                }
              />
              <Label htmlFor="showBowler">Bowler</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="showLastBall"
                checked={displaySettings.showLastBall}
                onCheckedChange={(checked) =>
                  setDisplaySettings({ ...displaySettings, showLastBall: checked })
                }
              />
              <Label htmlFor="showLastBall">Last Ball</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="showRunRate"
                checked={displaySettings.showRunRate}
                onCheckedChange={(checked) =>
                  setDisplaySettings({ ...displaySettings, showRunRate: checked })
                }
              />
              <Label htmlFor="showRunRate">Run Rate</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="showPartnership"
                checked={displaySettings.showPartnership}
                onCheckedChange={(checked) =>
                  setDisplaySettings({ ...displaySettings, showPartnership: checked })
                }
              />
              <Label htmlFor="showPartnership">Partnership</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="showExtras"
                checked={displaySettings.showExtras}
                onCheckedChange={(checked) =>
                  setDisplaySettings({ ...displaySettings, showExtras: checked })
                }
              />
              <Label htmlFor="showExtras">Extras</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Data Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Live Data Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Match Info */}
            <div className="space-y-4">
              <h3 className="font-semibold">Match Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Match Title:</span>
                  <span className="font-medium">{overlayData.matchTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Score:</span>
                  <span className="font-bold text-primary">{overlayData.currentScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Overs:</span>
                  <span className="font-medium">{overlayData.overs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Run Rate:</span>
                  <span className="font-medium">{overlayData.runRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Ball:</span>
                  <span className="font-medium">{overlayData.lastBall}</span>
                </div>
              </div>
            </div>

            {/* Player Info */}
            <div className="space-y-4">
              <h3 className="font-semibold">Player Information</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm">Striker</h4>
                  <div className="text-sm text-muted-foreground">
                    {overlayData.striker.name} - {overlayData.striker.runs}({overlayData.striker.balls}) - SR: {overlayData.striker.sr}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Non-Striker</h4>
                  <div className="text-sm text-muted-foreground">
                    {overlayData.nonStriker.name} - {overlayData.nonStriker.runs}({overlayData.nonStriker.balls}) - SR: {overlayData.nonStriker.sr}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Bowler</h4>
                  <div className="text-sm text-muted-foreground">
                    {overlayData.bowler.name} - {overlayData.bowler.overs}-{overlayData.bowler.runs}-{overlayData.bowler.wickets}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Partnership</h4>
                  <div className="text-sm text-muted-foreground">
                    {overlayData.partnership.runs} runs ({overlayData.partnership.balls} balls)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Overlay Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Overlay Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-black text-white p-6 rounded-lg relative">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {displaySettings.showScore && (
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-bold mb-2">{overlayData.matchTitle}</h2>
                    <div className="text-2xl font-bold text-yellow-400">
                      {overlayData.currentScore} ({overlayData.overs})
                    </div>
                  </div>
                )}

                {displaySettings.showBatsmen && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 mb-1">Batsmen</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm">{overlayData.striker.name} *</span>
                        <span className="text-sm font-bold">{overlayData.striker.runs}({overlayData.striker.balls})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">{overlayData.nonStriker.name}</span>
                        <span className="text-sm">{overlayData.nonStriker.runs}({overlayData.nonStriker.balls})</span>
                      </div>
                    </div>
                  </div>
                )}

                {displaySettings.showBowler && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 mb-1">Bowler</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm">{overlayData.bowler.name}</span>
                        <span className="text-sm font-bold">{overlayData.bowler.overs}-{overlayData.bowler.runs}-{overlayData.bowler.wickets}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {(displaySettings.showLastBall || displaySettings.showRunRate || displaySettings.showPartnership) && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  {displaySettings.showLastBall && (
                    <div>
                      <span className="text-sm text-gray-300">Last Ball:</span>
                      <span className="text-sm font-bold ml-2">{overlayData.lastBall}</span>
                    </div>
                  )}
                  {displaySettings.showRunRate && (
                    <div>
                      <span className="text-sm text-gray-300">Run Rate:</span>
                      <span className="text-sm font-bold ml-2">{overlayData.runRate}</span>
                    </div>
                  )}
                  {displaySettings.showPartnership && (
                    <div>
                      <span className="text-sm text-gray-300">Partnership:</span>
                      <span className="text-sm font-bold ml-2">{overlayData.partnership.runs} ({overlayData.partnership.balls})</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverlayControl;
