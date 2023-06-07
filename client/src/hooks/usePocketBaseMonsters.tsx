import { useMutation, useQuery } from "@tanstack/react-query";
import Monster from "../models/Monster";
import usePocketBase from "./usePocketBase";

export const usePocketBaseMonsters = () => {
  const { pb, model } = usePocketBase();

  const query = useQuery({
    queryKey: ["pocketbase", "monsters", "list", model?.id],
    queryFn: async () => {
      return await pb
        .collection('monsters')
        .getFullList()
        .then(records => records.map(r => new Monster(r)));
    },
    initialData: [],
  });

  const create = useMutation({
    mutationKey: ["pocketbase", "monsters", "create"],
    mutationFn: async (monster: Monster) => {
      return await pb
        .collection('monsters')
        .create({
          creator: pb.authStore.model?.id,
          name: monster.name,
          source: monster.source,
          cr: monster.cr,
          shared: monster.shared,
        })
        .then(r => new Monster(r));
    },
    onSuccess: () => query.refetch(),
  });

  return { query, create };
};

export type PocketBaseMonsters = ReturnType<typeof usePocketBaseMonsters>;

export default usePocketBaseMonsters;
