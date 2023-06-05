import { useMemo } from 'react';
import { Encounter, Party, Stats, Thresholds } from '../models';

export const useStats = (party: Party, encounter: Encounter, thresholds: Thresholds) => {
  return useMemo(() => {
    const stats: Stats = {
      difficulty: '',
      cr: 0,
      xp: 0,
      xpAdjusted: 0,
      count: 0,
      each: 0,
    };

    const partySize = party.reduce((total, { count }) => total + count, 0);

    applyXP(stats, encounter);
    applyMultiplier(partySize, stats);
    applyDifficulty(stats, thresholds);

    stats.each = Math.ceil(stats.xpAdjusted / partySize);

    return stats;
  }, [encounter, party, thresholds]);
};

const applyXP = (stats: Stats, encounter: Encounter) => {
  Object.values(encounter).forEach(({ monster: { cr, xp }, count }) => {
    stats.cr += cr * count;
    stats.xp += xp * count;
    stats.count += count;
  });
};

const applyMultiplier = (partySize: number, stats: Stats) => {
  const modifiers = [1, 1.5, 2, 2.5, 3, 4];

  let index = 0;
  if (stats.count == 2) {
    index = 1;
  } else if (stats.count > 2 && stats.count < 7) {
    index = 2;
  } else if (stats.count > 6 && stats.count < 11) {
    index = 3;
  } else if (stats.count > 10 && stats.count < 15) {
    index = 4;
  } else if (stats.count > 14) {
    index = 5;
  }

  if (partySize < 3 && index < 5)
    index++;
  if (partySize > 5 && index > 0)
    index--;

  stats.xpAdjusted = stats.xp * modifiers[index];
};

const applyDifficulty = (stats: Stats, thresholds: Thresholds) => {
  if (stats.xp < thresholds.easy) {
    stats.difficulty = 'Trivial';
  } else if (stats.xp < thresholds.medium) {
    stats.difficulty = 'Easy';
  } else if (stats.xp < thresholds.hard) {
    stats.difficulty = 'Medium';
  } else if (stats.xp < thresholds.deadly) {
    stats.difficulty = 'Hard';
  } else {
    stats.difficulty = 'Deadly';
  }
};
