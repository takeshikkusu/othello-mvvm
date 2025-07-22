import { Cell, Disk } from './Cell';

// 盤面モデル
export class Board {
  size: number;
  cells: Cell[][];

  constructor(size: number = 8) {
    this.size = size;
    this.cells = [];

    for (let y = 0; y < size; y++) {
      const row: Cell[] = [];
      for (let x = 0; x < size; x++) {
        row.push(new Cell(x, y));
      }
      this.cells.push(row);
    }

    // 初期配置
    this.cells[3][3].disk = 'white';
    this.cells[4][4].disk = 'white';
    this.cells[3][4].disk = 'black';
    this.cells[4][3].disk = 'black';
  }

  // 石を置く
  placeDisk(x: number, y: number, disk: Disk) {
    if (this.cells[y][x].disk) return false;

    // TODO: 挟めるか判定を実装（簡易版）
    this.cells[y][x].disk = disk;
    return true;
  }
}
