import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import StaffAddIcon from '@material-ui/icons/PersonAdd';
import BookingsIcon from '@material-ui/icons/Event';
import StaffRecordsIcon from '@material-ui/icons/People';
import ReportIcon from '@material-ui/icons/Assessment';

export const mainListItems = (
  <div>
    <ListItem button>
        <ListItemIcon> <HomeIcon /> </ListItemIcon>
        <ListItemText primary='Home'></ListItemText>
    </ListItem>
    <ListItem button>
        <ListItemIcon> <BookingsIcon /> </ListItemIcon>
        <ListItemText primary='View Reservations'></ListItemText>
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
        <ListItemIcon> <StaffAddIcon /> </ListItemIcon>
        <ListItemText primary='Register Staff'></ListItemText>
    </ListItem>
    <ListItem button>
        <ListItemIcon> <StaffRecordsIcon /> </ListItemIcon>
        <ListItemText primary='View Staff'></ListItemText>
    </ListItem>
    <ListItem button>
        <ListItemIcon> <ReportIcon /> </ListItemIcon>
        <ListItemText primary='Financial Reporting'></ListItemText>
    </ListItem>
  </div>
);