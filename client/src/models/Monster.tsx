import { Record } from 'pocketbase';
import { SourceMonster } from '../api/bestiary';

type cr = number | string | { cr: number | string };

export class Monster {
  id: string
  name: string;
  source: string;
  cr: number;
  xp: number;

  constructor(from: SourceMonster | Record) {
    const { name, source, cr } = from;

    if (Object.hasOwn(from, "id")) {
      const { id } = from as Record;
      this.id = id;
    } else {
      this.id = (`${name}-${source}`).toLowerCase().replace(/ /g, '-');
    }

    this.name = name;
    this.source = source;
    this.cr = this.parseCR(cr);
    this.xp = this.calculateXP();
  }

  private parseCR(cr: cr): number {
    switch (typeof cr) {
      case "number": return cr;
      case "object": return this.parseCR(cr.cr);
      case "string":
        switch (cr) {
          case "Unknown": return 0;
          case "1/8": return 1 / 8;
          case "1/4": return 1 / 4;
          case "1/2": return 1 / 2;
          default: return parseInt(cr);
        }
      default: return 0;
    }
  }

  private calculateXP(): number {
    switch (this.cr) {
      case 0: return 10;
      case 1 / 8: return 25;
      case 1 / 4: return 50;
      case 1 / 2: return 100;
      case 1: return 200;
      case 2: return 450;
      case 3: return 700;
      case 4: return 1100;
      case 5: return 1800;
      case 6: return 2300;
      case 7: return 2900;
      case 8: return 3900;
      case 9: return 5000;
      case 10: return 5900;
      case 11: return 7200;
      case 12: return 8400;
      case 13: return 10000;
      case 14: return 11500;
      case 15: return 13000;
      case 16: return 15000;
      case 17: return 18000;
      case 18: return 20000;
      case 19: return 22000;
      case 20: return 25000;
      case 21: return 33000;
      case 22: return 41000;
      case 23: return 50000;
      case 24: return 62000;
      case 25: return 75000;
      case 26: return 90000;
      case 27: return 105000;
      case 28: return 120000;
      case 29: return 135000;
      case 30: return 155000;
    }
    console.error(`Unknown CR: ${this.cr} for monster ${this.id}`);
    return 0;
  }
}

export default Monster;
