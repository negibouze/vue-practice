export default class Winner {
  player: string;
  line: number[];
  constructor(player: string = '', line: number[] = []) {
    this.player = player;
    this.line = line;
  }
}
