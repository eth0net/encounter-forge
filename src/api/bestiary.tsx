import axios from "axios";

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
  monster: Monster[];
}

export interface Monster {
  name: string;
  source: string;
  cr: string;
  _copy: {
    name: string;
    source: string;
  };
}
