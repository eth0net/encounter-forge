import Monster from "./Monster";

export interface Encounter {
  [id: string]: MonsterCount;
}

export interface MonsterCount {
  monster: Monster;
  count: number;
}

export default Encounter;
