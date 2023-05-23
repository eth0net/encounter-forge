import Monster from "../models/Monster";
import MonsterData from "../models/MonsterData";

export function useMonsterData() {
  const monsterData: MonsterData = [
    new Monster('Goblin', 0.25, 50),
    new Monster('Orc', 0.5, 100),
    new Monster('Ogre', 2, 450),
    new Monster('Troll', 5, 1800),
    new Monster('Dragon', 15, 13000),
  ];

  return monsterData;
}

export default useMonsterData;
