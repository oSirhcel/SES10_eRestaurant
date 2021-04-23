import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import NewIcon from '@material-ui/icons/AddBox';
import ViewIcon from '@material-ui/icons/Event';
import DiscountIcon from '@material-ui/icons/LocalOffer';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ProfileIcon />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NewIcon />
      </ListItemIcon>
      <ListItemText primary="Book a Table" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ViewIcon />
      </ListItemIcon>
      <ListItemText primary="View Reservations" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DiscountIcon />
      </ListItemIcon>
      <ListItemText> Discounts <br /> and Rewards </ListItemText>
    </ListItem>
  </div>
);