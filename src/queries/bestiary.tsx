import { useQueries, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getIndex, getSource } from "../api/bestiary";
import { Monster } from "../models/Monster";
import deepmerge from "deepmerge";

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

  const monsters = useMemo(() => {
    return results.flatMap(({ data }) => data?.monster || [])
      .map((m, _, a) => {
        const src = a.find(({ name, source }) => {
          return name === m.name && source !== m.source;
        });

        return deepmerge(m, src || {});
      })
      .map(({ name, source, cr }) => new Monster(name, source, parseInt(cr)))
  }, [results]);

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
