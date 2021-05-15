import React from 'react';
import MenuDataGrid from './MenuDataGrid';
import AddItemDialog from './AddItemDialog';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const c = (showItem) => {
    return (
        [
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
            { 
                field: 'image', 
                headerName: 'Image', 
                width: 200,
                renderCell: (params) => (
                    <div
                        style={{
                            background: `url("${params.value}") no-repeat center/cover`, width: 150, height: 150}
                        }
                    />
                ) 
            },
            { 
                field: 'detailsBtn', 
                headerName: ' ',
                width: 130,
                valueGetter: (params) => (
                    `${params.getValue('item')}`  
                ),
                renderCell: () => (
                  showItem()
                )
              },
        ]
    )
}
    
  
//Dummy Data
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


//Rows depend on whether the lunch or dinner tab was selected.
const EditMenuController = ({tabValue}) => {
    const columns = c;
    const [rows, setRows] = React.useState(tabValue == 0 ? lunchRows : dinnerRows);
    const [selectedRow, setSelectedRow] = React.useState('');
    const [selectedCell, setSelectedCell] = React.useState();
    
    //These are for when a new item is added.
    const [item, setItem] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [type, setType] = React.useState(''); 
    const [img, setImg] = React.useState(null);
    const [error, setError] = React.useState(false);

    // This is to handle when a new item is added. Need to update database.
    const handleSubmit = (e) => {        
        const newID = rows[rows.length-1].id + 1;
        const newItem = {id: newID, item: item, description: description, price: price, type: type, image: img};
        setRows([...rows, newItem]);        
        e.preventDefault();
        setImg(null);
    }
    const handleDelete = () => {
        setRows(rows.filter((row, j) => row.id != selectedRow.data.id));
    }

    const handleEdit = () => {
        if (selectedCell.colIndex != 4) {
            selectedCell.api.setCellMode(selectedCell.id, selectedCell.field, "edit");
        }
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

    const handleImageSelection = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        const reader = new FileReader();
        var url = reader.readAsDataURL(selected);
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
          console.log("accepted");
          reader.onloadend = () => {
              setImg(reader.result);
              //console.log(reader.result);
          }
          //console.log(url);
          

        } else {
            setError(true);
        }
           
    }

    const showItem = () => {
        return (
            <AddItemDialog 
                buttonIcon = {<EditIcon />}
                handleSubmit = {handleSubmit}
                handleImageSelection = {handleImageSelection}
                setImgPreview = {setImg}
                item = {item}
                description = {description}
                price = {price}
                type = {type}
                error = {error}
                img = {img}
                setItem = {setItem}
                setDescription = {setDescription}
                setPrice = {setPrice}
                setType = {setType}
                imgPreview = {img}
            />
        )
    }

    return (
        <div>
            <AddItemDialog 
                buttonIcon = {<AddIcon/>}
                handleSubmit = {handleSubmit}
                handleImageSelection = {handleImageSelection}
                setImgPreview = {setImg}
                item = {item}
                description = {description}
                price = {price}
                type = {type}
                error = {error}
                img = {img}
                deleteButton = {
                    <Button
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
                imgPreview = {img}
            />
            <MenuDataGrid
                columns = {columns(showItem)}
                rows = {rows}
                setSelectedRow = {(e) => {setSelectedRow(e); console.log(selectedRow)}}
                setSelectedCell = {setSelectedCell}
                handleEdit = {handleEdit}
                handleValueChange = {handleValueChange}
            />
        </div>
        
    )
}
export default EditMenuController;