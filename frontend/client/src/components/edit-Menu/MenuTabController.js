import React from 'react';
import MenuTabs from './MenuTabs';
import EditMenuController from './EditMenuController';
import Container from '@material-ui/core/Container';
import Header from "../margins/staffHeader";

const MenuTabController = () => {
    const [tabValue, setTabValue] = React.useState(0);
    

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    }
   
    return (
        <div>
            <Container maxWidth="xl">
                <Header/>
            </Container>
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