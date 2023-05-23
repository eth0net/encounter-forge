import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';
import useEncounter from '../hooks/useEncounter';
import useMonsterData from '../hooks/useMonsterData';
import Library from '../models/Library';
import EncounterTable from './EncounterTable';
import PartyTable from './PartyTable';
import StatsTable from './StatsTable';
import d20 from '/src/assets/d20.png';
import StatsRow from './StatsRow';
import Party from '../models/Party';

const defaultParty: Party = [{ level: 1, count: 1 }];

export function Forge() {
  const monsterData = useMonsterData();

  const [encounter] = useEncounter();

  const [party, setParty] = useState(defaultParty);

  const thresholds = useMemo(() => {
    const xp_table = [
      { easy: 25, medium: 50, hard: 75, deadly: 100, daily: 300 },
      { easy: 50, medium: 100, hard: 150, deadly: 200, daily: 600 },
      { easy: 75, medium: 150, hard: 225, deadly: 400, daily: 1200 },
      { easy: 125, medium: 250, hard: 375, deadly: 500, daily: 1700 },
      { easy: 250, medium: 500, hard: 750, deadly: 1100, daily: 3500 },
      { easy: 300, medium: 600, hard: 900, deadly: 1400, daily: 4000 },
      { easy: 350, medium: 750, hard: 1100, deadly: 1700, daily: 5000 },
      { easy: 450, medium: 900, hard: 1400, deadly: 2100, daily: 6000 },
      { easy: 550, medium: 1100, hard: 1600, deadly: 2400, daily: 7500 },
      { easy: 600, medium: 1200, hard: 1900, deadly: 2800, daily: 9000 },
      { easy: 800, medium: 1600, hard: 2400, deadly: 3600, daily: 10500 },
      { easy: 1000, medium: 2000, hard: 3000, deadly: 4500, daily: 11500 },
      { easy: 1100, medium: 2200, hard: 3400, deadly: 5100, daily: 13500 },
      { easy: 1250, medium: 2500, hard: 3800, deadly: 5700, daily: 15000 },
      { easy: 1400, medium: 2800, hard: 4300, deadly: 6400, daily: 18000 },
      { easy: 1600, medium: 3200, hard: 4800, deadly: 7200, daily: 20000 },
      { easy: 2000, medium: 3900, hard: 5900, deadly: 8800, daily: 25000 },
      { easy: 2100, medium: 4200, hard: 6300, deadly: 9500, daily: 27000 },
      { easy: 2400, medium: 4900, hard: 7300, deadly: 10900, daily: 30000 },
      { easy: 2800, medium: 5700, hard: 8500, deadly: 12700, daily: 40000 },
    ];

    const thresholds = { easy: 0, medium: 0, hard: 0, deadly: 0, daily: 0 };

    party.forEach(({ level, count }) => {
      thresholds.easy += xp_table[level].easy * count ?? 0;
      thresholds.medium += xp_table[level].medium * count ?? 0;
      thresholds.hard += xp_table[level].hard * count ?? 0;
      thresholds.deadly += xp_table[level].deadly * count ?? 0;
      thresholds.daily += xp_table[level].daily * count ?? 0;
    });

    return thresholds;
  }, [party]);

  const encounterItems = useMemo(() => Object.values(encounter), [encounter]);

  const stats = useMemo(() => {
    const stats = { difficulty: '', cr: 0, xp: 0, count: 0, each: 0 };

    encounterItems.forEach(({ monster: { cr, xp }, count }) => {
      stats.cr += cr * count;
      stats.xp += xp * count;
      stats.count += count;
    });

    switch (true) {
      case stats.count == 2:
        stats.xp *= 1.5;
        break;
      case stats.count > 2 && stats.count < 7:
        stats.xp *= 2;
        break;
      case stats.count > 6 && stats.count < 11:
        stats.xp *= 2.5;
        break;
      case stats.count > 10 && stats.count < 15:
        stats.xp *= 3;
        break;
      case stats.count > 14:
        stats.xp *= 4;
        break;
    }

    if (stats.cr < thresholds.easy) {
      stats.difficulty = 'Trivial';
    } else if (stats.cr < thresholds.medium) {
      stats.difficulty = 'Easy';
    } else if (stats.cr < thresholds.hard) {
      stats.difficulty = 'Medium';
    } else if (stats.cr < thresholds.deadly) {
      stats.difficulty = 'Hard';
    } else {
      stats.difficulty = 'Deadly';
    }

    const partySize = party.reduce((total, { count }) => total + count, 0);

    stats.each = Math.ceil(stats.xp / partySize);

    return stats;
  }, [encounterItems, party, thresholds]);

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2} mb={8}>
        <img src={d20} className='logo d20' alt='d20' height={96} />
        <Typography variant='h2'>Encounter Forge</Typography>
      </Stack>

      <Stack direction='row' spacing={4} useFlexGap justifyContent='center'>
        <Stack spacing={4}>
          <PartyTable party={party} setParty={setParty} />

          <StatsTable title="Thresholds">
            <StatsRow stat='Easy' data={thresholds.easy} />
            <StatsRow stat='Medium' data={thresholds.medium} />
            <StatsRow stat='Hard' data={thresholds.hard} />
            <StatsRow stat='Deadly' data={thresholds.deadly} />
            <StatsRow stat='Daily Limit' data={thresholds.daily} />
          </StatsTable>
        </Stack>

        <Stack spacing={4}>
          <EncounterTable encounter={encounter} />

          <StatsTable title="Stats">
            <StatsRow stat='Difficulty' data={stats.difficulty} />
            <StatsRow stat='Count' data={stats.count} />
            <StatsRow stat='Total CR' data={stats.cr} />
            <StatsRow stat='Total XP' data={stats.xp} />
            <StatsRow stat='Player XP' data={stats.each} />
          </StatsTable>
        </Stack>

        <Stack spacing={4}>
          <Library monsterData={monsterData} />
        </Stack>
      </Stack>
    </>
  );
}

export default Forge;
