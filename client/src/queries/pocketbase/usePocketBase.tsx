import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { authWithDiscord, clearAuth, listMonsters } from "../../api/pocketbase";
import { Monster } from "../../models/Monster";

export function usePocketBaseAuth() {
  return { authWithDiscord, clearAuth, };
}

export default usePocketBaseAuth;

export function usePocketBaseMonsters() {
  const result = useQuery({
    queryKey: ["pocketbase", "monsters", "list"],
    queryFn: listMonsters,
  });

  const monsters = useMemo(() => {
    return (result.data || []).map(r => new Monster(r))
  }, [result.data]);

  return { monsters, ...result };
}
