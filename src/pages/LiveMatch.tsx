import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card'; // Assuming Card components are available

// --- Component Props and Type Definitions ---
interface Match {
  id: string;
  title: string;
  category: 'STARTUP' | 'PROFESSIONAL' | 'CORPORATE';
  teams: {
    a: { name: string; score?: string };
    b: { name: string; score?: string };
  };
  venue: string;
  status: 'LIVE' | 'COMPLETED';
  scoreline?: string;
  lastBall?: string;
  runRate?: number;
  result?: string;
}

const LiveMatchCard = ({ match }: { match: Match }) => {
  // **FIX:** Add a defensive check to prevent rendering if match data is missing.
  if (!match || !match.teams) {
    return null; // or return a placeholder/error component
  }

  const isLive = match.status === 'LIVE';

  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <CardContent className="flex-grow p-5">
        <div className="flex justify-between items-start mb-3">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{match.category} LEAGUE</p>
          <Badge variant={isLive ? 'destructive' : 'default'} className={isLive ? 'animate-pulse' : ''}>
            {match.status}
          </Badge>
        </div>

        {/* Team Scores */}
        <div className="space-y-2 text-base">
          <div className="flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200 font-semibold">{match.teams.a.name}</span>
            {isLive ? (
                 <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{match.scoreline?.split(' ')[0]}</p>
                 </div>
            ) : (
                <span className="font-bold text-gray-800 dark:text-gray-200">{match.teams.a.score}</span>
            )}
          </div>
           <div className="flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200 font-semibold">{match.teams.b.name}</span>
            {!isLive && <span className="font-bold text-gray-800 dark:text-gray-200">{match.teams.b.score}</span>}
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-5 py-3">
        {isLive ? (
          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 w-full">
            <span>Last Ball: <span className="font-semibold text-gray-800 dark:text-gray-100">{match.lastBall}</span></span>
            <span>CRR: <span className="font-semibold text-gray-800 dark:text-gray-100">{match.runRate?.toFixed(2)}</span></span>
          </div>
        ) : (
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 text-center w-full">{match.result}</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default LiveMatchCard;