import axios from "axios";
import deepmerge from "deepmerge";

const baseURL = 'https://raw.githubusercontent.com/5etools-mirror-1/5etools-mirror-1.github.io/master/data/bestiary/';

const bestiary = axios.create({ baseURL });

export async function getIndex() {
  return await bestiary.get('index.json')
    .then(r => r.data as Index);
}

export async function getSource(path: string) {
  return await bestiary.get(path)
    .then(r => r.data as Source);
}

export interface Index {
  [key: string]: string;
}

export interface Source {
  monster: SourceMonster[];
}

export interface SourceMonster {
  name: string;
  source: string;
  cr: number | string | { cr: number | string };
  _copy: {
    name: string;
    source: string;
  };
}

export function hydrateSourceMonster(monster: SourceMonster, monsters: SourceMonster[]): SourceMonster {
  if (!monster._copy) return monster;

  const src = monsters.find(({ name, source }) =>
    name == monster._copy.name && source == monster._copy.source
  );

  if (!src) return monster;

  return deepmerge(hydrateSourceMonster(src, monsters), monster);
}
