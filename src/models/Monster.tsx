export class Monster {
  id: string
  name: string;
  cr: number;
  xp: number;

  constructor(name: string, cr: number, xp: number) {
    this.id = name.toLowerCase().replace(/ /g, '-');
    this.name = name;
    this.cr = cr;
    this.xp = xp;
  }
}

export default Monster;
