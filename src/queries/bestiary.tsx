import { useQueries, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getIndex, getSource, hydrateSourceMonster } from "../api/bestiary";
import { Monster } from "../models/Monster";

export function useBestiary() {
  const index = useQuery({
    queryKey: ['bestiary', 'source', 'index'],
    queryFn: getIndex,
  });

  // todo: filter index to selected sources

  const queries = Object.entries(index.data || {}).map(([name, path]) => ({
    queryKey: ['bestiary', 'source', name, path],
    queryFn: () => getSource(path),
    enabled: index.isSuccess,
  }));

  const results = useQueries({ queries });

  const sourceMonsters = useMemo(() => {
    return results
      .map((r) => r.data)
      .flatMap((source) => source?.monster || []);
  }, [results]);

  const monsters = useMemo(() => {
    return sourceMonsters
      .map((m, _, a) => hydrateSourceMonster(m, a))
      .map((m) => new Monster(m));
  }, [sourceMonsters]);

  // const sort: string = "name";
  // monsters = useMemo(() => {
  //   switch (sort) {
  //     case "name":
  //       return monsters.sort((a, b) => a.name.localeCompare(b.name));
  //     case "cr":
  //       return monsters.sort((a, b) => a.cr - b.cr);
  //     default:
  //       return monsters;
  //   }
  // }, [monsters, sort]);

  return { monsters };
}
