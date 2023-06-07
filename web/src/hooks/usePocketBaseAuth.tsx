import { useCallback, useMemo } from "react";
import usePocketBase from "./usePocketBase";

export const usePocketBaseAuth = () => {
  const { pb, token, model } = usePocketBase();

  const authWithDiscord = useCallback(async () => {
    return await pb
      .collection('users')
      .authWithOAuth2({
        provider: 'discord',
      });
  }, [pb]);

  const clearAuth = useCallback(() => {
    return pb.authStore.clear();
  }, [pb]);

  const isAuthed = useMemo(() => {
    return pb.authStore.isValid;
  }, [pb.authStore.isValid]);

  return { authWithDiscord, clearAuth, isAuthed, token, model };
};

export default usePocketBaseAuth;
