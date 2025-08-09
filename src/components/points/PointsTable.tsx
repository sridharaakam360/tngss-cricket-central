import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface StandingRow {
  team: string;
  matches: number;
  wins: number;
  losses: number;
  noResults: number;
  points: number;
  nrr: number;
  rank: number;
}

interface Props {
  rows: StandingRow[];
}

const PointsTable = ({ rows }: Props) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">M</TableHead>
            <TableHead className="text-right">W</TableHead>
            <TableHead className="text-right">L</TableHead>
            <TableHead className="text-right">NR</TableHead>
            <TableHead className="text-right">Pts</TableHead>
            <TableHead className="text-right">NRR</TableHead>
            <TableHead className="text-right">Rank</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.team}>
              <TableCell className="font-medium">{r.team}</TableCell>
              <TableCell className="text-right">{r.matches}</TableCell>
              <TableCell className="text-right">{r.wins}</TableCell>
              <TableCell className="text-right">{r.losses}</TableCell>
              <TableCell className="text-right">{r.noResults}</TableCell>
              <TableCell className="text-right">{r.points}</TableCell>
              <TableCell className="text-right">{r.nrr.toFixed(2)}</TableCell>
              <TableCell className="text-right">{r.rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PointsTable;
