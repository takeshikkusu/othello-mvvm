import React, { useState } from 'react';
import { BoardViewModel } from '../viewmodel/BoardViewModel';
import { Board } from './Board';

export const App: React.FC = () => {
  const [vm] = useState(new BoardViewModel());
  const [, update] = useState(0);

  const handleClick = () => {
    update(v => v + 1);
  };

  return (
    <div>
      <h1>オセロ MVVM</h1>
      <button onClick={handleClick}>更新</button>
      <Board vm={vm} />
    </div>
  );
};
