import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import Monster from "../models/Monster";
import { usePocketBase } from "./usePocketBase";

export const usePocketBaseMonsters = () => {
  const pb = usePocketBase();

  const { data, ...result } = useQuery({
    queryKey: ["pocketbase", "monsters", "list", pb.authStore.isValid],
    queryFn: async () => {
      return await pb
        .collection('monsters')
        .getFullList();
    },
    enabled: pb.authStore.isValid,
  });

  const monsters = useMemo(() => {
    return data?.map(d => new Monster(d)) ?? [];
  }, [data]);

  return { monsters, ...result };
};

export default usePocketBaseMonsters;
