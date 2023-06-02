import { useMemo } from "react";
import { usePocketBaseMonsters } from "../pocketbase/usePocketBase";
import use5eTools from "./use5eTools";

export function useBestiary({ enable5eTools = true }: { enable5eTools: boolean }) {
  const { monsters: m5e } = use5eTools(enable5eTools);
  const { monsters: mpb } = usePocketBaseMonsters();

  const monsters = useMemo(() => [...m5e, ...mpb], [m5e, mpb]);

  return { monsters };
}

export default useBestiary;
