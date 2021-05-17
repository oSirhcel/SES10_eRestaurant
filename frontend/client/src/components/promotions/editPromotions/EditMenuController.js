import React from 'react';
import MenuDataGrid from './MenuDataGrid';
import AddItemDialog from './AddItemDialog';
import EditItemDialog from './EditItemDialog';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const c =  
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
        ]


    
  
//Dummy Data
  const lunchRows = [
    { id: 1, item: 'TARTE FLAMBÉE', description: 'A Speciality from Alsace, thin baked Bread Dough covered with Crème Fraîche, Onions, Speck and Gruyère Cheese', price: 22.00, type: 'Entree', image: 'https://img.taste.com.au/WlcBsJrw/w1200-h630-cfill/taste/2020/01/tarte-flambee-158042-2.jpg ' },
    { id: 2, item: 'SALADE DE CHÈVRE', description: 'Goat Cheese Salad with Pears, Walnuts and Seeded Mustard Dressing', price: 21.00, type: 'Entree', image: 'https://images.unsplash.com/photo-1505576733088-f8a0f2f4b8a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80' },
    { id: 3, item: 'MOULES MARINIÈRE', description: 'Steamed Black Mussels with White Wine, Thyme, Garlic, Butter and Parsley Served with Baguette (GF Bread on request)', price: 22, type: 'Entree', image: 'https://images.immediate.co.uk/production/volatile/sites/2/2018/02/moules_charlie-richards-4a780e0.jpg?quality=90&resize=960%2C408' },
    { id: 4, item: 'RACLETTE (GF)', description: 'Hot Melted Raclette Cheese Served with Potatoes, Paris Ham, Coppa, Bresaola and Salami and Pickles', price: 40.00, type: 'Main', image: 'https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/smashed-potatoes-with-ham-raclette-cheese.jpg.jpeg?itok=2RA6B8T3' },
    { id: 5, item: 'BOEUF BOURGUIGNON (GF)', description: 'Beef Burgundy, slow cooked in Red Wine with Carrots, Mushrooms and Thyme, Served with Paris Mash', price: 42.00, type: 'Main', image: 'https://img.taste.com.au/ckuv9INi/taste/2016/11/boeuf-bourguignon-102743-1.jpeg' },
    { id: 6, item: 'CONFIT DE CANARD', description: 'Confit of Duck Legs Served with Paris Mash, Roasted Trust Tomatoes and Red Wine Shallot Sauce', price: 41.00, type: 'Main', image: 'https://assets.epicurious.com/photos/58487dec3b047eac0f3b3494/master/pass/duck-confit-120716.jpg' },
    { id: 7, item: 'PROFITEROLES', desciption: 'with Vanilla Ice Cream and Hot Chocolate Sauce', price: 22.00, type: 'Dessert', image: 'https://www.browneyedbaker.com/wp-content/uploads/2021/04/profiteroles-8-square-1.jpg' },
    { id: 8, item: 'ICE CREAM AND SORBETS', description: 'Vanilla, Macadamia and Honey, Lemon Sorbet', price: 6.00, type: 'Dessert', image: 'https://www.asweetpeachef.com/wp-content/uploads/2017/07/easy-fruit-sorbet-recipes.jpg' },
    { id: 9, item: 'LE COLONEL', description: 'Palate Cleanser with Lemon & Lime Sorbet served with Vodka', price: 8.50, type: 'Dessert', image: 'https://images.ctfassets.net/3s5io6mnxfqz/4BpiEeIH12fQl3C6YvGady/e99604ae8f3e4bf7b669640193829652/AdobeStock_191370402.jpeg' },
  ];



//Rows depend on whether the lunch or dinner tab was selected.
const EditMenuController = ({tabValue}) => {
    
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
        const newItem = {id: newID, item: item, description: description, price: price, image: img, type: type};
        setRows([...rows, newItem]);        
        e.preventDefault();
        setImg(null);
    }
    const handleDelete = () => {
        setRows(rows.filter((row, j) => row.id != selectedRow.data.id));
    }

    const handleEdit = () => {
        return (
            <EditItemDialog 
                buttonIcon = {<EditIcon />}
                handleSubmit = {handleSubmit}
                handleImageSelection = {handleImageSelection}
                setImgPreview = {setImg}
                item = {selectedRow ? selectedRow.data.item : item}
                description = {selectedRow ? selectedRow.data.description : description}
                price = {selectedRow ? selectedRow.data.price : price}
                type = {selectedRow ? selectedRow.data.type : type}
                error = {error}
                setItem = {setItem}
                setDescription = {setDescription}
                setPrice = {setPrice}
                setType = {setType}
                defaultImg = {selectedRow ? selectedRow.data.image : img}
                imgPreview = {img}
                disable= {selectedRow == ''}
            />
        )
        /*if (selectedCell.colIndex != 4) {
            selectedCell.api.setCellMode(selectedCell.id, selectedCell.field, "edit");
        }*/
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

    const showItem = (params) => {

        return (
            <EditItemDialog 
                buttonIcon = {<EditIcon />}
                handleSubmit = {handleSubmit}
                handleImageSelection = {handleImageSelection}
                setImgPreview = {setImg}
                description = {params.getValue("description")}
                expiry = {params.getValue("expiry")}
                error = {error}
                setDescription = {setDescription}
                setExpiry = {setExpiry}
                defaultImg = {params.getValue("image")}
                imgPreview = {img}
            />
        )
    }

    const editItem = handleEdit();

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
            {editItem}
            <MenuDataGrid
                columns = {columns}
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