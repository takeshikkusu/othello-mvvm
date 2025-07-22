// 盤面の1マスを表すモデル
export type Disk = 'black' | 'white' | null;

export class Cell {
  x: number;
  y: number;
  disk: Disk;

  constructor(x: number, y: number, disk: Disk = null) {
    this.x = x;
    this.y = y;
    this.disk = disk;
  }
}
