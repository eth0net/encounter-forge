export class Stats {
  difficulty: string;
  cr: number;
  xp: number;
  count: number;
  each: number;

  constructor(
    difficulty: string,
    cr: number,
    xp: number,
    count: number,
    each: number,
  ) {
    this.difficulty = difficulty;
    this.cr = cr;
    this.xp = xp;
    this.count = count;
    this.each = each;
  }
}

export default Stats;
