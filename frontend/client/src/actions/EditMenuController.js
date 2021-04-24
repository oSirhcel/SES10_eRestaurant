import React from 'react';
import MenuDataGrid from '../components/edit-Menu/MenuDataGrid';
import AddItemDialog from '../components/edit-Menu/AddItemDialog';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const c = [
    { field: 'id', headerName: 'Item ID', width: 70, hide: true },
    { field: 'item', headerName: 'Item', width: 200 },
    { field: 'description', headerName: 'Description', flex: 1},
    { 
        field: 'price', 
        headerName: 'Price', 
        width: 130,
        valueFormatter: (params) => params.value.toFixed(2), 
    },
    { field: 'type', headerName: 'Type', width: 130 },
  ];
  
  const lunchRows = [
    { id: 1, item: 'Oysters', description: '6 oysters with yummy vinegareete and bacon', price: 24.00, type: 'Entree' },
    { id: 2, item: 'Baguette', description: 'Sourdough baguette with smashed avo', price: 15.00, type: 'Entree' },
    { id: 3, item: 'French Onion soup', description: 'Classic French onion soup containing crispy croutons', price: 18.50, type: 'Entree' },
    { id: 4, item: 'Stuffed Quail', description: 'Stuffed quail with dried fig & pancetta stuffing, eggplant & duck liver caviar, cognac jus gras', price: 26.00, type: 'Main' },
    { id: 5, item: 'Fish of the Day', description: 'Market fish pan fried fillet, leek, yellow lentils & walnut ragout, caramelized witlof, sorrel & white balsamic beurre blanc', price: 26.00, type: 'Main' },
    { id: 6, item: 'Duck Leg Confit', description: 'Duck leg confit, spec & napa cabbage pilaf, bigarade sauce', price: 26.00, type: 'Main' },
    { id: 7, item: 'Garden Salad', price: 6.00, type: 'Entree' },
    { id: 8, item: 'Profiteroles', description: '4 custard filled profiteroles dipped in a smooth chocolate ganache', price: 17.00, type: 'Dessert' },
    { id: 9, item: 'Crepes Suzette', description: '2 crepes served with fresh raspberries and a scoop of vanilla bean ice cream', price: 15.00, type: 'Dessert' },
    { id: 10, item: 'Genoise cake', description: 'Genoise cake, candied orange in grand Marnier syrup, crème patissière, Armagnac jelly', price: 10.00, type: 'Dessert' },  
  ];

  const dinnerRows = [
    { id: 1, item: 'Ratatouille', description: 'House special made by the infamous Remy Rat', price: 20.00, type: 'Main' },
    { id: 2, item: 'Lobster Mornay', description: 'A delicious cheesy lobster', price: 40.00, type: 'Main' },
    { id: 3, item: 'Quiche Lorraine', description: 'Classic French quiche with containing bacon', price: 17.50, type: 'Main' },
    { id: 4, item: 'Steak Tartare', description: 'Raw beef that\'s bloody good. (Just don\'t ask Mr Bean)', price: 16.00, type: 'Entree' },
    { id: 5, item: 'Escargots', description: 'Snails', price: 40.00, type: 'Entree' },
    { id: 6, item: 'Coquilles Saint-Jacques (Gratinéed scallops)', description: 'Two poached scallops topped with Gruyere', price: 25.00, type: 'Entree' },
    { id: 7, item: 'Tarte Tatin', description: 'Upside down apple pastry served with a scoop of vanilla bean ice cream', price: 10.00, type: 'Dessert' },
    { id: 8, item: 'Chocolate Soufflé', price: 12.00, type: 'Dessert' },
    { id: 9, item: 'Crème brûlée', description: 'Pure yumminess', price: 15.00, type: 'Dessert' },
    { id: 10, item: 'Macaron', description: 'Three macarons served with fresh strawberries and whipped cream', price: 17.00, type: 'Dessert' },  
  ];



const EditMenuController = ({tabValue}) => {
    const columns = c;
    const [rows, setRows] = React.useState(tabValue == 0 ? lunchRows : dinnerRows);
    const [selectedRow, setSelectedRow] = React.useState('');
    const [selectedCell, setSelectedCell] = React.useState();
    
    const [item, setItem] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [type, setType] = React.useState(''); 

    const handleSubmit = (e) => {        
        const newID = rows[rows.length-1].id + 1;
        const newItem = {id: newID, item: item, description: description, price: price, type: type};
        setRows([...rows, newItem]);        
        e.preventDefault();
    }
    const handleDelete = () => {
        setRows(rows.filter((row, j) => row.id != selectedRow.data.id));
    }

    const handleEdit = () => {
        selectedCell.api.setCellMode(selectedCell.id, selectedCell.field, "edit");
    }

    const handleValueChange = () => {
        const editValue = selectedCell.api.getEditCellValueParams(selectedCell.id, selectedCell.field).value;
        const id = selectedCell.id;
        const field = selectedCell.field;

        setRows(rows.map(
            (row) => {
                if (row.id == id) {
                    return ({ ...row, [field]: editValue })
                } else {
                    return row;
                }
            }
        ))
    }

    return (
        <div>
            <AddItemDialog 
                handleSubmit = {handleSubmit}
                deleteButton = {<Button
                    onClick={handleDelete}
                    disabled={selectedRow == ''}
                >
                 <DeleteIcon />
                </Button>   
                }
                setItem = {setItem}
                setDescription = {setDescription}
                setPrice = {setPrice}
                setType = {setType}
                type = {type}
                />
            <MenuDataGrid
                columns = {columns}
                rows = {rows}
                setSelectedRow = {setSelectedRow}
                setSelectedCell = {setSelectedCell}
                handleEdit = {handleEdit}
                handleValueChange = {handleValueChange}
            />
        </div>
        
    )
}
export default EditMenuController;