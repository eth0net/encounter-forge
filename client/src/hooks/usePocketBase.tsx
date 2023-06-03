import { useContext } from "react";
import { PocketBaseContext } from "../contexts/PocketBaseContext";

export const usePocketBase = () => {
  const client = useContext(PocketBaseContext);

  if (!client) {
    throw new Error("usePocketBase must be used within a PocketBaseProvider");
  }

  return client;
};
