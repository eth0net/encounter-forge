import { useMemo } from 'react';
import { Party } from '../models';
import { Thresholds } from '../models/Thresholds';

export const useThresholds = (party: Party) => {
  return useMemo(() => {
    const thresholds = new Thresholds();

    party.forEach(({ level, count }) => {
      const index = level - 1;
      thresholds.easy += thresholds_table[index].easy * count ?? 0;
      thresholds.medium += thresholds_table[index].medium * count ?? 0;
      thresholds.hard += thresholds_table[index].hard * count ?? 0;
      thresholds.deadly += thresholds_table[index].deadly * count ?? 0;
      thresholds.daily += thresholds_table[index].daily * count ?? 0;
    });

    return thresholds;
  }, [party]);
};

const thresholds_table = [
  new Thresholds(25, 50, 75, 100, 300),
  new Thresholds(50, 100, 150, 200, 600),
  new Thresholds(75, 150, 225, 400, 1200),
  new Thresholds(125, 250, 375, 500, 1700),
  new Thresholds(250, 500, 750, 1100, 3500),
  new Thresholds(300, 600, 900, 1400, 4000),
  new Thresholds(350, 750, 1100, 1700, 5000),
  new Thresholds(450, 900, 1400, 2100, 6000),
  new Thresholds(550, 1100, 1600, 2400, 7500),
  new Thresholds(600, 1200, 1900, 2800, 9000),
  new Thresholds(800, 1600, 2400, 3600, 10500),
  new Thresholds(1000, 2000, 3000, 4500, 11500),
  new Thresholds(1100, 2200, 3400, 5100, 13500),
  new Thresholds(1250, 2500, 3800, 5700, 15000),
  new Thresholds(1400, 2800, 4300, 6400, 18000),
  new Thresholds(1600, 3200, 4800, 7200, 20000),
  new Thresholds(2000, 3900, 5900, 8800, 25000),
  new Thresholds(2100, 4200, 6300, 9500, 27000),
  new Thresholds(2400, 4900, 7300, 10900, 30000),
  new Thresholds(2800, 5700, 8500, 12700, 40000),
];
