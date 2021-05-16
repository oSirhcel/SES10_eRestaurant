import React from 'react';
import MenuTabs from './MenuTabs';
import EditMenuController from './EditMenuController';

const MenuTabController = () => {
    const [tabValue, setTabValue] = React.useState(0);
    

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    }
   
    return (
        <div>
            <MenuTabs 
                tabValue = {tabValue}
                handleTabChange = {handleTabChange}
                menu = {
                    <EditMenuController 
                        tabValue = {tabValue}
                    />
                }
            />            
        </div>
        
    )
}
export default MenuTabController;