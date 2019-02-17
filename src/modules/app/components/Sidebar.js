import React, { memo } from 'react';
import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { 
  ArrowBack, 
  SupervisedUserCircle, 
  AccountCircle, 
  Drafts, 
  Security, 
  HelpOutline } from '@material-ui/icons';

const styles = theme => ({
  list: {
    width: 300,
  },
  toolbar: {
    paddingLeft: theme.spacing.unit,
  },
  icon: {
    paddingLeft: 4,
  },
  manage: {
    visibility: 'hidden',
  },
});

const manage = [
  { text: 'Groups', link: '/manage/groups', Icon: SupervisedUserCircle },
  { text: 'Roles', link: '/manage/roles', Icon: Security },
  { text: 'Users', link: '/manage/users', Icon: AccountCircle },
];

const other = [
  { text: 'Contact', link: '/contact', Icon: Drafts },
  { text: 'About', link: '/about', Icon: HelpOutline },
];

const Sidebar = memo(({ classes, isOpen, handleClose }) => {
  const Menu = ({ menu }) => (
    <List>
      {menu.map(({ text, link, Icon }) => (
        <ListItem button key={text}>
          <ListItemIcon className={classes.icon}>
            <Icon className={classes[text.toLowerCase()]} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
  
  return (
    <SwipeableDrawer open={isOpen} onClose={handleClose} onOpen={() => {}}>
      <div
        tabIndex={0}
        role='button'
        onClick={handleClose}
        onKeyDown={handleClose}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <ArrowBack />
          </IconButton>
          </Toolbar>
        <Divider />
        <div className={classes.list}>
          <Menu menu={[{ text: 'Manage', Icon: Drafts }]} />
          <Divider />
          <Menu menu={manage} />
          <Divider />
          <Menu menu={other} />
        </div>    
      </div>
    </SwipeableDrawer>
  );
});

export default withStyles(styles)(Sidebar);