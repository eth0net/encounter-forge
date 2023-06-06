import { useMemo } from 'react';
import { Encounter, Party, Stats, Thresholds } from '../models';

export const useStats = (party: Party, encounter: Encounter, thresholds: Thresholds) => {
  const partySize = useMemo(() => {
    return party.reduce((total, { count }) => total + count, 0);
  }, [party]);

  const baseStats = useMemo(() => {
    return Object.values(encounter)
      .reduce((acc, { monster: { cr, xp }, count }) => {
        acc.cr += cr * count;
        acc.xp += xp * count;
        acc.count += count;
        return acc;
      }, { cr: 0, xp: 0, count: 0 });
  }, [encounter]);

  const xpAdjusted = useMemo(() => {
    const modifiers = [1, 1.5, 2, 2.5, 3, 4];

    let index = 0;
    if (baseStats.count == 2) {
      index = 1;
    } else if (baseStats.count > 2 && baseStats.count < 7) {
      index = 2;
    } else if (baseStats.count > 6 && baseStats.count < 11) {
      index = 3;
    } else if (baseStats.count > 10 && baseStats.count < 15) {
      index = 4;
    } else if (baseStats.count > 14) {
      index = 5;
    }

    if (partySize < 3 && index < 5)
      index++;
    if (partySize > 5 && index > 0)
      index--;

    return baseStats.xp * modifiers[index];
  }, [baseStats, partySize]);

  const difficulty = useMemo(() => {
    switch (true) {
      case xpAdjusted < thresholds.easy:
        return 'Trivial';
      case xpAdjusted < thresholds.medium:
        return 'Easy';
      case xpAdjusted < thresholds.hard:
        return 'Medium';
      case xpAdjusted < thresholds.deadly:
        return 'Hard';
      default:
        return 'Deadly';
    }
  }, [xpAdjusted, thresholds]);

  return { ...baseStats, xpAdjusted, difficulty } as Stats;
};

export default useStats;
