import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function authWithDiscord() {
  return await pb
    .collection('users')
    .authWithOAuth2({
      provider: 'discord',
    });
}

export function clearAuth() {
  pb.authStore.clear();
}

export async function listMonsters() {
  return await pb
    .collection('monsters')
    .getFullList();
}
