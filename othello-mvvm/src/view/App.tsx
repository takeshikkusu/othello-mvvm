import React, { useState } from 'react';
import { BoardViewModel } from '../viewmodel/BoardViewModel';
import { Board } from './Board';

export const App: React.FC = () => {
  const [vm] = useState(new BoardViewModel());
  const [, update] = useState(0);

  // VMに更新関数を渡す
  const handlePlaceDisk = (x: number, y: number) => {
    vm.placeDisk(x, y);
    update(v => v + 1);
  };

  return (
    <div>
      <h1>オセロ MVVM</h1>
      <Board vm={vm} onPlaceDisk={handlePlaceDisk} />
    </div>
  );
};
