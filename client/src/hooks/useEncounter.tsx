import { useMemo, useState } from 'react';
import { Encounter, Monster } from '../models';

export const useEncounter = () => {
  const [encounter, setEncounter] = useState<Encounter>({});

  const xp = useMemo(() => {
    return Object
      .values(encounter)
      .reduce((sum, { monster, count }) => {
        return sum + monster.xp * count;
      }, 0);
  }, [encounter]);

  const addMonster = (monster: Monster, count = 1) => {
    const newEncounter = { ...encounter };
    if (newEncounter[monster.id]) {
      newEncounter[monster.id].count += count;
    } else {
      newEncounter[monster.id] = { count, monster };
    }
    setEncounter(newEncounter);
  };

  const removeMonster = (monster: Monster, count = 1) => {
    const newEncounter = { ...encounter };
    if (newEncounter[monster.id]) {
      newEncounter[monster.id].count -= count;
      if (newEncounter[monster.id].count <= 0) {
        delete newEncounter[monster.id];
      }
    }
    setEncounter(newEncounter);
  };

  const randomiseEncounter = (monsters: Monster[], minXP: number, maxXP: number) => {
    const encounter: Encounter = {};
    let xp = 0;

    while (xp < minXP) {
      const potentialMonsters = monsters.filter(monster => {
        return monster.xp <= maxXP - xp;
      });
      if (potentialMonsters.length === 0) break;

      const index = Math.floor(Math.random() * potentialMonsters.length);
      const monster = potentialMonsters[index];

      const maxCount = Math.floor((maxXP - xp) / monster.xp);
      if (maxCount < 1) continue;

      const count = Math.floor(Math.random() * maxCount) + 1;
      if (encounter[monster.id]) {
        encounter[monster.id].count += count;
      } else {
        encounter[monster.id] = { count, monster };
      }
      xp += monster.xp * count;
    }

    setEncounter(encounter);
  }

  return {
    encounter,
    setEncounter,
    addMonster,
    removeMonster,
    randomiseEncounter,
    xp,
  };
};
