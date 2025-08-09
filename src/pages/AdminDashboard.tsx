import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  UserPlus
} from "lucide-react";
import MatchSetup from "@/components/admin/MatchSetup";
import ScoreEntry from "@/components/admin/ScoreEntry";
import OverlayControl from "@/components/admin/OverlayControl";
import Applications from "@/components/admin/Applications";

interface AdminUser {
  role: "super_admin" | "match_scorer" | "team_manager";
  email: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

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

  if (!user) {
    return <div>Loading...</div>;
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
  const canAccessOverlay = user.role === "super_admin" || user.role === "match_scorer";
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
            <TabsTrigger value="overlay" disabled={!canAccessOverlay}>Overlay</TabsTrigger>
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
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+2 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Teams</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">16</div>
                  <p className="text-xs text-muted-foreground">8 Startup + 8 Professional</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Live Matches</CardTitle>
                  <Play className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
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
                    {[
                      { teams: "Alpha Startups vs Beta Builders", status: "Live", score: "135/4 (17.3)" },
                      { teams: "Pro Warriors vs Tech Titans", status: "Completed", score: "Pro Warriors won by 45 runs" },
                      { teams: "Code Ninjas vs Data Devils", status: "Upcoming", score: "Today, 4:00 PM" },
                    ].map((match, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{match.teams}</p>
                          <p className="text-sm text-muted-foreground">{match.score}</p>
                        </div>
                        <Badge variant={match.status === "Live" ? "destructive" : match.status === "Completed" ? "default" : "secondary"}>
                          {match.status}
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
                    <Button className="h-20 flex-col" onClick={() => setActiveTab("teams")}>
                      <UserPlus className="w-6 h-6 mb-2" />
                      Add Player
                    </Button>
                    {canAccessOverlay && (
                      <Button className="h-20 flex-col" onClick={() => setActiveTab("overlay")}>
                        <Play className="w-6 h-6 mb-2" />
                        Overlay Control
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            {canAccessMatches ? (
              <MatchSetup />
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

          {/* Scoring Tab */}
          <TabsContent value="scoring" className="space-y-6">
            {canAccessScoring ? (
              <ScoreEntry />
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
                <p className="text-muted-foreground">Team and player management functionality will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Overlay Tab */}
          <TabsContent value="overlay" className="space-y-6">
            {canAccessOverlay ? (
              <OverlayControl />
            ) : (
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    You don't have permission to access overlay control.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            {canAccessApplications ? (
              <Applications />
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
