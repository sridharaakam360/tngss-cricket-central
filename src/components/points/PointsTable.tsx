import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export interface StandingRow {
  team: string;
  matches: number;
  wins: number;
  losses: number;
  noResults: number;
  points: number;
  nrr: number;
  rank: number;
  logo?: string;
  zone?: string;
  district?: string;
}

interface Props {
  rows: StandingRow[];
}

const PointsTable = ({ rows }: Props) => {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">1st</Badge>;
    if (rank === 2) return <Badge variant="secondary" className="bg-gray-400 hover:bg-gray-500">2nd</Badge>;
    if (rank === 3) return <Badge variant="outline" className="border-orange-500 text-orange-500">3rd</Badge>;
    return <Badge variant="outline">{rank}</Badge>;
  };

  const getNRRColor = (nrr: number) => {
    if (nrr > 0) return "text-green-600";
    if (nrr < 0) return "text-red-600";
    return "text-muted-foreground";
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">M</TableHead>
            <TableHead className="text-right">W</TableHead>
            <TableHead className="text-right">L</TableHead>
            <TableHead className="text-right">NR</TableHead>
            <TableHead className="text-right">Pts</TableHead>
            <TableHead className="text-right">NRR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.team} className={row.rank <= 4 ? "bg-muted/30" : ""}>
              <TableCell>
                {getRankBadge(row.rank)}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-xs font-bold text-primary">
                    {row.logo || row.team.split(" ").map((x) => x[0]).join("")}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{row.team}</div>
                    {row.zone && (
                      <div className="text-xs text-muted-foreground">{row.zone}, {row.district}</div>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">{row.matches}</TableCell>
              <TableCell className="text-right font-medium text-green-600">{row.wins}</TableCell>
              <TableCell className="text-right font-medium text-red-600">{row.losses}</TableCell>
              <TableCell className="text-right font-medium text-muted-foreground">{row.noResults}</TableCell>
              <TableCell className="text-right font-bold text-primary">{row.points}</TableCell>
              <TableCell className={`text-right font-mono ${getNRRColor(row.nrr)}`}>
                {row.nrr > 0 ? '+' : ''}{row.nrr.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PointsTable;
