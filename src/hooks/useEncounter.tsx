import { useState } from "react";
import Encounter from "../models/Encounter";
import Monster from "../models/Monster";

export function useEncounter() {
  const initial: Encounter = {
    'Goblin': { monster: new Monster('Goblin', 0.25, 10), count: 1 },
  };

  return useState(initial);
}

export default useEncounter;
