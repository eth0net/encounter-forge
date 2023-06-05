import { useQueries, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getIndex, getSource, hydrateSourceMonster } from "../api/bestiary";
import Monster from "../models/Monster";

export const use5eToolsMonsters = (enabled: boolean) => {
  const index = useQuery({
    queryKey: ['5etools', 'source', 'index'],
    queryFn: getIndex,
    enabled,
  });

  // todo: filter index to selected sources

  const queries = useMemo(() => {
    return Object.entries(index.data || {})
      .map(([name, path]) => ({
        queryKey: ['5etools', 'source', name, path],
        queryFn: () => getSource(path),
        enabled: enabled && index.isSuccess,
      }));
  }, [index, enabled]);

  const results = useQueries({ queries });

  const sourceMonsters = useMemo(() => {
    if (!enabled) return [];
    return results
      .map((r) => r.data)
      .flatMap((source) => source?.monster || []);
  }, [results, enabled]);

  const monsters = useMemo(() => {
    return sourceMonsters
      .map((m, _, a) => hydrateSourceMonster(m, a))
      .map((m) => new Monster(m));
  }, [sourceMonsters]);

  return { monsters };
};

export default use5eToolsMonsters;
