import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export function authWithDiscord() {
  const authData = pb
    .collection('users')
    .authWithOAuth2({
      provider: 'discord'
    });

  console.log(pb?.authStore?.isValid);
  console.log(pb?.authStore?.token);
  console.log(pb?.authStore?.model?.id);
  console.log(authData);

  // pb.authStore.clear();
}
