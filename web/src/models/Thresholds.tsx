export class Thresholds {
  easy: number;
  medium: number;
  hard: number;
  deadly: number;
  daily: number;

  constructor(easy = 0, medium = 0, hard = 0, deadly = 0, daily = 0) {
    this.easy = easy;
    this.medium = medium;
    this.hard = hard;
    this.deadly = deadly;
    this.daily = daily;
  }

  get array() {
    return [
      { key: 'Easy', value: this.easy },
      { key: 'Medium', value: this.medium },
      { key: 'Hard', value: this.hard },
      { key: 'Deadly', value: this.deadly },
      { key: 'Daily', value: this.daily },
    ];
  }
}

export default Thresholds;
