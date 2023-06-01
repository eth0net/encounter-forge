import Monster from "./Monster";

export interface Encounter {
  [key: string]: EncounterItem;
}

export interface EncounterItem {
  monster: Monster;
  count: number;
}

export default Encounter;
