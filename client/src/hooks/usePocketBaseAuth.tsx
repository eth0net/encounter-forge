import { authWithDiscord, clearAuth } from "../api/pocketbase";

export function usePocketBaseAuth() {
  return { authWithDiscord, clearAuth };
}

export default usePocketBaseAuth;
