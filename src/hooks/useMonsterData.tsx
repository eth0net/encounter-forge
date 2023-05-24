import Monster from "../models/Monster";
import MonsterData from "../models/MonsterData";

export function useMonsterData() {
  const monsterData: MonsterData = [
    new Monster('Goblin', 0.25),
    new Monster('Orc', 0.5),
    new Monster('Ogre', 2),
    new Monster('Troll', 5),
    new Monster('Dragon', 15),
  ];

  return monsterData;
}

export default useMonsterData;
