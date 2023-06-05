import { useMemo } from "react";
import use5eToolsMonsters from "./use5eToolsMonsters";
import usePocketBaseMonsters from "./usePocketBaseMonsters";

export const useBestiary = ({ enable5eTools = false, search = '' }: useBestiaryProps) => {
  const { monsters: m5e } = use5eToolsMonsters(enable5eTools);
  const { monsters: mpb } = usePocketBaseMonsters();

  const monsters = useMemo(() => [...m5e, ...mpb], [m5e, mpb]);

  const filtered = useMemo(() => {
    return monsters.filter(monster => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [monsters, search]);

  return {
    monsters, monsterCount: monsters.length,
    filtered, filteredCount: filtered.length,
  };
};

export interface useBestiaryProps {
  enable5eTools: boolean;
  search: string;
}

export default useBestiary;
