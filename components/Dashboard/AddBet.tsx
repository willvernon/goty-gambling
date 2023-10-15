import * as React from 'react';
import { useEffect, useState } from 'react';
import { Session, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '@/lib/betschema';

type Bets = Database['public']['Tables']['bets']['Row'];

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { supabase } from '@supabase/auth-ui-shared';

export default function AddBetCard() {
  const [team, setTeam] = useState<string>('');
  const [opp, setOpp] = useState<string>('');
  const [betType, setBetType] = useState<string>('');
  const [odds, setOdds] = useState<number>(0);
  const [units, setUnits] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  const placeBet = async () => {
    // Here is calling to supabase to store the bet
    if (team && opp && betType && odds && units) {
      const { data, error } = await supabase.from('bets').insert([
        {
          team: team,
          opp: opp,
          bet_type: betType,
          odds: odds,
          units: units
        }
      ]);
      if (error) {
        console.error('Error adding bet:', error);
      } else {
        console.log('Bet added:', data);
        // Clear fields or navigate to another page, etc.
      }
    }
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Add Bet</CardTitle>
        <CardDescription>Log your bet details to track live.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="team">Team</Label>
              <Input
                id="team"
                type="text"
                placeholder="Team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="opp">Opponent</Label>
              <Input
                id="opp"
                type="text"
                placeholder="Opponent"
                value={opp}
                onChange={(e) => setOpp(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Units/Cash</Label>
              <Input
                id="units"
                placeholder="Units:"
                value={units}
                onChange={(e) => setUnits(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Odds</Label>
              <Input
                id="odds"
                placeholder="Units:"
                value={odds}
                onChange={(e) => setOdds(parseInt(e.target.value))}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bet_type">Bet Type</Label>
              <Select>
                <SelectTrigger id="bet_type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="ml">Moneyline</SelectItem>
                  <SelectItem value="spread">Spread</SelectItem>
                  <SelectItem value="over">Over</SelectItem>
                  <SelectItem value="under">Under</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={addBet}>Add Bet</Button>
      </CardFooter>
    </Card>
  );
}
