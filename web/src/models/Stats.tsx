export class Stats {
  difficulty: string;
  cr: number;
  xp: number;
  xpAdjusted: number;
  count: number;
  each: number;

  constructor(
    difficulty: string,
    cr: number,
    xp: number,
    xpAdjusted: number,
    count: number,
    each: number,
  ) {
    this.difficulty = difficulty;
    this.cr = cr;
    this.xp = xp;
    this.xpAdjusted = xpAdjusted;
    this.count = count;
    this.each = each;
  }
}

export default Stats;
