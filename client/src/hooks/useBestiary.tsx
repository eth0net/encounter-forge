import { useMemo } from "react";
import { usePocketBaseMonsters } from "./usePocketBaseMonsters";
import use5eToolsMonsters from "./use5eToolsMonsters";

export function useBestiary({ enable5eTools = false }: useBestiaryProps) {
  const { monsters: m5e } = use5eToolsMonsters(enable5eTools);
  const { monsters: mpb } = usePocketBaseMonsters();

  const monsters = useMemo(() => [...m5e, ...mpb], [m5e, mpb]);

  return { monsters };
}

export interface useBestiaryProps {
  enable5eTools: boolean;
}

export default useBestiary;
