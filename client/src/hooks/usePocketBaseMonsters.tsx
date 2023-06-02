import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { listMonsters } from "../api/pocketbase";
import { Monster } from "../models/Monster";

export function usePocketBaseMonsters() {
  const { data, ...result } = useQuery({
    queryKey: ["pocketbase", "monsters", "list"],
    queryFn: listMonsters,
  });

  const monsters = useMemo(() => {
    return data?.map(d => new Monster(d)) ?? [];
  }, [data]);

  return { monsters, ...result };
}

export default usePocketBaseMonsters;
