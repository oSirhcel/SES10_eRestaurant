import React from 'react';
import MenuDataGrid from './MenuDataGrid';
import AddPromoDialog from './AddPromoDialog';
import EditPromoDialog from './EditPromoDialog';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const c =  
        [
            { field: 'id', headerName: 'Item ID', width: 70, hide: true },
            { field: 'description', headerName: 'Promotion Description', flex: 1},
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
    {
        id: 1,
        description: "Buy 1 Croissant Get 1 Free",
        image:
          "https://secureservercdn.net/198.71.189.253/b6d.5c9.myftpupload.com/wp-content/uploads/2019/10/inside-vegan-croissant-stacked.jpg",
      },
    
      {
        id: 2,
        description: "Get 15% off when you spend $20",
        image:
          "https://www.kids-world-travel-guide.com/images/xfrench_food_macarons_shutterstock_62967172-2.jpg.pagespeed.ic.1_Cll_AGWX.jpg",
      },
    
      {
        id: 3,
        description: "Add 1 Free Crêpe to your order",
        image:
          "https://www.goway.com/media/cache/70/22/702291eb1a1895e3bc3d124cc5ae4da9.jpg",
      },

  ];

  const dinnerRows = [
    {
        id: 1,
        description: "Buy 1 Croissant Get 1 Free",
        image:
          "https://secureservercdn.net/198.71.189.253/b6d.5c9.myftpupload.com/wp-content/uploads/2019/10/inside-vegan-croissant-stacked.jpg",
      },
    
      {
        id: 2,
        description: "Get 15% off when you spend $20",
        image:
          "https://www.kids-world-travel-guide.com/images/xfrench_food_macarons_shutterstock_62967172-2.jpg.pagespeed.ic.1_Cll_AGWX.jpg",
      },
    
      {
        id: 3,
        description: "Add 1 Free Crêpe to your order",
        image:
          "https://www.goway.com/media/cache/70/22/702291eb1a1895e3bc3d124cc5ae4da9.jpg",
      },
      

  ];



//Rows depend on whether the lunch or dinner tab was selected.
const EditPromoController = ({tabValue}) => {
    const columns = c;
    const [rows, setRows] = React.useState(tabValue == 0 ? lunchRows : dinnerRows);
    const [selectedRow, setSelectedRow] = React.useState('');
    const [selectedCell, setSelectedCell] = React.useState();
    
    //These are for when a new item is added.
    const [description, setDescription] = React.useState('');
    const [img, setImg] = React.useState(null);
    const [error, setError] = React.useState(false);

    // This is to handle when a new item is added. Need to update database.
    const handleSubmit = (e) => {        
        const newID = rows[rows.length-1].id + 1;
        const newItem = {id: newID,description: description, image: img,};
        setRows([...rows, newItem]);        
        e.preventDefault();
        setImg(null);
    }
    const handleDelete = () => {
        setRows(rows.filter((row, j) => row.id != selectedRow.data.id));
    }

    const handleEdit = () => {
        return (
            <EditPromoDialog 
                buttonIcon = {<EditIcon />}
                handleSubmit = {handleSubmit}
                handleImageSelection = {handleImageSelection}
                setImgPreview = {setImg}
                description = {selectedRow ? selectedRow.data.description : description}
                error = {error}
                setDescription = {setDescription}
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
            <EditPromoDialog
                buttonIcon = {<EditIcon />}
                handleSubmit = {handleSubmit}
                handleImageSelection = {handleImageSelection}
                setImgPreview = {setImg}
                description = {params.getValue("description")}
                error = {error}
                setDescription = {setDescription}
                defaultImg = {params.getValue("image")}
                imgPreview = {img}
            />
        )
    }

    const editItem = handleEdit();

    return (
        <div>
            <AddPromoDialog 
                buttonIcon = {<AddIcon/>}
                handleSubmit = {handleSubmit}
                handleImageSelection = {handleImageSelection}
                setImgPreview = {setImg}
                description = {description}
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
                setDescription = {setDescription}
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
export default EditPromoController;