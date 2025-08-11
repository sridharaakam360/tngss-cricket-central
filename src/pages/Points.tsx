import SEO from "@/components/seo/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PointsTable, { StandingRow } from "@/components/points/PointsTable";
import { Badge } from "@/components/ui/badge";

interface EnhancedStandingRow extends StandingRow {
  logo?: string;
  zone?: string;
  district?: string;
}

const startupRows: EnhancedStandingRow[] = [
  { team: "Alpha Startups", logo: "AS", zone: "Chennai", district: "Chennai", matches: 5, wins: 4, losses: 1, noResults: 0, points: 8, nrr: 1.25, rank: 1 },
  { team: "Beta Builders", logo: "BB", zone: "Coimbatore", district: "Coimbatore", matches: 5, wins: 3, losses: 2, noResults: 0, points: 6, nrr: 0.85, rank: 2 },
  { team: "Code Ninjas", logo: "CN", zone: "Madurai", district: "Madurai", matches: 5, wins: 3, losses: 2, noResults: 0, points: 6, nrr: 0.45, rank: 3 },
  { team: "Data Devils", logo: "DD", zone: "Salem", district: "Salem", matches: 5, wins: 2, losses: 3, noResults: 0, points: 4, nrr: -0.15, rank: 4 },
  { team: "Echo Engineers", logo: "EE", zone: "Trichy", district: "Trichy", matches: 5, wins: 2, losses: 3, noResults: 0, points: 4, nrr: -0.35, rank: 5 },
  { team: "Fusion Founders", logo: "FF", zone: "Vellore", district: "Vellore", matches: 5, wins: 1, losses: 4, noResults: 0, points: 2, nrr: -0.95, rank: 6 },
  { team: "Gamma Geeks", logo: "GG", zone: "Erode", district: "Erode", matches: 5, wins: 0, losses: 5, noResults: 0, points: 0, nrr: -1.45, rank: 7 },
  { team: "Hive Hackers", logo: "HH", zone: "Tiruppur", district: "Tiruppur", matches: 5, wins: 0, losses: 5, noResults: 0, points: 0, nrr: -1.65, rank: 8 },
];

const proRows: EnhancedStandingRow[] = [
  { team: "Pro Warriors", logo: "PW", zone: "Chennai", district: "Chennai", matches: 5, wins: 5, losses: 0, noResults: 0, points: 10, nrr: 1.85, rank: 1 },
  { team: "Tech Titans", logo: "TT", zone: "Coimbatore", district: "Coimbatore", matches: 5, wins: 4, losses: 1, noResults: 0, points: 8, nrr: 1.15, rank: 2 },
  { team: "Elite Eagles", logo: "EE", zone: "Madurai", district: "Madurai", matches: 5, wins: 3, losses: 2, noResults: 0, points: 6, nrr: 0.75, rank: 3 },
  { team: "Speed Demons", logo: "SD", zone: "Salem", district: "Salem", matches: 5, wins: 2, losses: 3, noResults: 0, points: 4, nrr: 0.25, rank: 4 },
  { team: "Power Players", logo: "PP", zone: "Trichy", district: "Trichy", matches: 5, wins: 2, losses: 3, noResults: 0, points: 4, nrr: -0.15, rank: 5 },
  { team: "Velocity Vipers", logo: "VV", zone: "Vellore", district: "Vellore", matches: 5, wins: 1, losses: 4, noResults: 0, points: 2, nrr: -0.85, rank: 6 },
  { team: "Thunder Tigers", logo: "TT", zone: "Erode", district: "Erode", matches: 5, wins: 0, losses: 5, noResults: 0, points: 0, nrr: -1.25, rank: 7 },
  { team: "Lightning Lions", logo: "LL", zone: "Tiruppur", district: "Tiruppur", matches: 5, wins: 0, losses: 5, noResults: 0, points: 0, nrr: -1.75, rank: 8 },
];

const Points = () => {
  return (
    <main>
      <SEO title="Points Table" description="Standings for Startup and Professional categories in the TNGSS Startup Cricket League." canonical="/points" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Points Table</h1>
          <p className="text-muted-foreground">Current standings for all teams in the TNGSS Startup Cricket League</p>
        </div>

        <Tabs defaultValue="startup" className="space-y-6">
          {/* <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="startup" className="flex items-center gap-2">
              <Badge variant="default">Startup</Badge>
              <span>Category</span>
            </TabsTrigger>
            <TabsTrigger value="pro" className="flex items-center gap-2">
              <Badge variant="secondary">Professional</Badge>
              <span>Category</span>
            </TabsTrigger>
          </TabsList> */}

          <TabsContent value="startup" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Startup Category Standings</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Total Teams: {startupRows.length}</span>
                <span>Matches Played: {startupRows.reduce((sum, team) => sum + team.matches, 0)}</span>
              </div>
            </div>
            <PointsTable rows={startupRows} />
          </TabsContent>

          <TabsContent value="pro" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Professional Category Standings</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Total Teams: {proRows.length}</span>
                <span>Matches Played: {proRows.reduce((sum, team) => sum + team.matches, 0)}</span>
              </div>
            </div>
            <PointsTable rows={proRows} />
          </TabsContent>
        </Tabs>

        {/* Legend */}
        <div className="mt-8 bg-card border border-border rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold text-foreground mb-3">Points System</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-2">Match Points</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Win: 2 points</li>
                <li>• Loss: 0 points</li>
                <li>• No Result: 1 point</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Net Run Rate (NRR)</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Calculated as: (Runs Scored/Overs Faced) - (Runs Conceded/Overs Bowled)</li>
                <li>• Used as tiebreaker</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Ranking Criteria</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>1. Points (highest first)</li>
                <li>2. Net Run Rate (highest first)</li>
                <li>3. Head-to-head record</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Points;
