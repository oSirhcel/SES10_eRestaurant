import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const MenuDataGrid = ({columns, rows, setSelectedRow, setSelectedCell, handleEdit, handleValueChange}) => {
  return (
    <div style={{ height: 300, width: '100%' }}>
         
      <DataGrid 
      rows={rows} 
      columns={columns} 
      pageSize={10}
      density = {'compact'} 
      checkboxSelection = {false}
      onRowSelected = {setSelectedRow}
      onCellClick = {setSelectedCell}
      onCellDoubleClick={handleEdit}
      onCellValueChange={handleValueChange}
      />
    </div>
  );
}

export default MenuDataGrid;
