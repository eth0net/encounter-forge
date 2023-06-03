import { useMemo } from 'react';
import { Party, Thresholds } from '../models';

const xp_table: Thresholds[] = [
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

export function useThresholds(party: Party) {
  return useMemo(() => {
    const thresholds: Thresholds = {
      easy: 0,
      medium: 0,
      hard: 0,
      deadly: 0,
      daily: 0,
    };

    party.forEach(({ level, count }) => {
      const index = level - 1;
      thresholds.easy += xp_table[index].easy * count ?? 0;
      thresholds.medium += xp_table[index].medium * count ?? 0;
      thresholds.hard += xp_table[index].hard * count ?? 0;
      thresholds.deadly += xp_table[index].deadly * count ?? 0;
      thresholds.daily += xp_table[index].daily * count ?? 0;
    });

    return thresholds;
  }, [party]);
}