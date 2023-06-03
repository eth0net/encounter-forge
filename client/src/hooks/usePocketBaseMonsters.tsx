import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Monster } from "../models/Monster";
import { usePocketBase } from "./usePocketBase";

export function usePocketBaseMonsters() {
  const pb = usePocketBase();

  const { data, ...result } = useQuery({
    queryKey: ["pocketbase", "monsters", "list"],
    queryFn: async () => {
      return await pb
        .collection('monsters')
        .getFullList();
    },
  });

  const monsters = useMemo(() => {
    return data?.map(d => new Monster(d)) ?? [];
  }, [data]);

  return { monsters, ...result };
}

export default usePocketBaseMonsters;
