import Tap from './tap'

export default class History {
  turn: number;
  board: string[];
  tap: Tap;
  constructor(turn: number, board: string[], tap: Tap) {
    this.turn = turn;
    this.board = board;
    this.tap = tap;
  }
}
