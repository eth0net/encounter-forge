import { useContext } from "react";
import PocketBaseContext from "../contexts/PocketBaseContext";

export const usePocketBase = () => {
  const pb = useContext(PocketBaseContext);

  if (!pb) {
    throw new Error("usePocketBase must be used within a PocketBaseProvider");
  }

  return pb;
};

export default usePocketBase;
