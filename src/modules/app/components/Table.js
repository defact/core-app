import React, { useState } from 'react';

import Table from 'mui-virtualized-table';
import AutoSizer from 'react-virtualized/AutoSizer';

export default ({ data, columns }) => {
  const [ selected, setSelected ] = useState(null);

  const isHovered = (column, row, hoveredColumn, hoveredRow) => row.id && row.id === hoveredRow.id;
  const isSelected = (column, row) => selected === row.id;

  const handleSelect = (column, row) => isSelected(column, row) ? setSelected(null) : setSelected(row.id);

  return (
    <AutoSizer disableHeight>
      {({ width }) => (
        <Table 
          width={width}
          rowHeight={64}
          data={data} 
          columns={columns} 
          isCellHovered={isHovered} 
          isCellSelected={isSelected}
          onCellClick={handleSelect}
        />
      )}
    </AutoSizer>
  );
};
