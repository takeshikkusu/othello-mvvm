import React from 'react';
import { Cell as CellModel } from '../model/Cell';

type Props = {
  cell: CellModel;
  onClick: () => void;
};

export const Cell: React.FC<Props> = ({ cell, onClick }) => {
  const getColor = () => {
    if (cell.disk === 'black') return '⚫️';
    if (cell.disk === 'white') return '⚪️';
    return '🟩';
  };

  return (
    <div
      onClick={onClick}
      style={{
        width: 40,
        height: 40,
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      {getColor()}
    </div>
  );
};
