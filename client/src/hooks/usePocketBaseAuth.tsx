import { useCallback, useMemo, useState } from "react";
import { usePocketBase } from "./usePocketBase";
import { useEffect } from "react";

export function usePocketBaseAuth() {
  const pb = usePocketBase();

  const [token, setToken] = useState(pb.authStore.token);
  const [model, setModel] = useState(pb.authStore.model);

  useEffect(() => {
    pb.authStore.onChange((token, model) => {
      setToken(token);
      setModel(model);
    });
  });

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
}

export default usePocketBaseAuth;
