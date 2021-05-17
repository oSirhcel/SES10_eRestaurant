import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const MenuDataGrid = ({columns, rows, setSelectedRow, setSelectedCell, handleEdit, handleValueChange}) => {
  return (
   <div>
      <div style={{ width: '100%' }}>
          
        <DataGrid 
          rows={rows} 
          rowHeight={200}
          columns={columns} 
          pageSize={10}
          autoHeight
          density = {'compact'} 
          checkboxSelection = {false}
          onRowSelected = {setSelectedRow}
          onCellClick = {setSelectedCell}
          onCellDoubleClick={handleEdit}
          onCellValueChange={handleValueChange}
        />
      </div>
    </div> 
  );
}

export default MenuDataGrid;
