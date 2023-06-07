import { useContext, useEffect, useState } from "react";
import PocketBaseContext from "../contexts/PocketBaseContext";

export const usePocketBase = () => {
  const pb = useContext(PocketBaseContext);

  const [token, setToken] = useState(pb?.authStore.token);
  const [model, setModel] = useState(pb?.authStore.model);

  useEffect(() => {
    pb?.authStore.onChange((token, model) => {
      setToken(token);
      setModel(model);
    });
  }, [pb?.authStore]);

  if (!pb) {
    throw new Error("usePocketBase must be used within a PocketBaseProvider");
  }

  return { pb, token, model };
};

export default usePocketBase;
