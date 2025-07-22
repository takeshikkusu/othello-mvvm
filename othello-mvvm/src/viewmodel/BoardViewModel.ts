import { Board, Disk } from '../model/Board';

export class BoardViewModel {
  board: Board;
  currentDisk: Disk;

  constructor() {
    this.board = new Board();
    this.currentDisk = 'black';
  }

  placeDisk(x: number, y: number) {
    const success = this.board.placeDisk(x, y, this.currentDisk);
    if (success) {
      this.currentDisk = this.currentDisk === 'black' ? 'white' : 'black';
    }
  }

  get cells() {
    return this.board.cells;
  }
}
