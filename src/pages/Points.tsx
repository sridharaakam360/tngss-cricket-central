import SEO from "@/components/seo/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PointsTable, { StandingRow } from "@/components/points/PointsTable";

const startupRows: StandingRow[] = [
  { team: "Alpha Startups", matches: 3, wins: 2, losses: 1, noResults: 0, points: 4, nrr: 0.65, rank: 1 },
  { team: "Beta Builders", matches: 3, wins: 2, losses: 1, noResults: 0, points: 4, nrr: 0.25, rank: 2 },
];
const proRows: StandingRow[] = [
  { team: "Pro Warriors", matches: 3, wins: 3, losses: 0, noResults: 0, points: 6, nrr: 1.10, rank: 1 },
  { team: "Tech Titans", matches: 3, wins: 1, losses: 2, noResults: 0, points: 2, nrr: -0.45, rank: 2 },
];

const Points = () => {
  return (
    <main>
      <SEO title="Points Table" description="Standings for Startup and Professional categories." canonical="/points" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Points Table</h1>
        <Tabs defaultValue="startup" className="space-y-4">
          <TabsList>
            <TabsTrigger value="startup">Startup</TabsTrigger>
            <TabsTrigger value="pro">Professional</TabsTrigger>
          </TabsList>
          <TabsContent value="startup">
            <PointsTable rows={startupRows} />
          </TabsContent>
          <TabsContent value="pro">
            <PointsTable rows={proRows} />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Points;
