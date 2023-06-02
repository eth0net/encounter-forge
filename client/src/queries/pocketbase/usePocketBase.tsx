import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

export function usePocketBase() {
  const [pocketBase, setPocketBase] = useState<PocketBase>();

  useEffect(() => {
    const pocketBase = new PocketBase('http://127.0.0.1:8090');
    setPocketBase(pocketBase);
  }, []);

  const loginWithDiscord = async () => {
    pocketBase?.collection('users').authWithOAuth2({
      provider: 'discord',
    });
  };

  const logout = async () => {
    pocketBase?.authStore.clear();
  };

  return { pocketBase, loginWithDiscord, logout };
}
