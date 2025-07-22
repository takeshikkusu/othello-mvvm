import React from 'react';
import { BoardViewModel } from '../viewmodel/BoardViewModel';
import { Cell } from './Cell';

type Props = {
  vm: BoardViewModel;
};

export const Board: React.FC<Props> = ({ vm }) => {
  return (
    <div>
      {vm.cells.map((row, y) => (
        <div style={{ display: 'flex' }} key={y}>
          {row.map((cell, x) => (
            <Cell
              key={`${x}-${y}`}
              cell={cell}
              onClick={() => {
                vm.placeDisk(x, y);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
