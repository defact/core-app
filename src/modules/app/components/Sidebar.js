import React, { memo } from 'react';
import { Link } from '@reach/router';
import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { 
  ArrowBack, 
  SupervisedUserCircle, 
  AccountCircle, 
  Drafts, 
  Security, 
  HelpOutline, 
  Search,
  Face } from '@material-ui/icons';

const styles = theme => ({
  list: {
    width: 300,
  },
  toolbar: {
    paddingLeft: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  icon: {
    marginLeft: 4,
    color: 'rgba(0, 0, 0, .5)',
  },
  link: {
    outline: 0,
    textDecoration: 'none',
  },
  manage: {
    visibility: 'hidden',
  },
  search: {
    marginLeft: theme.spacing.unit,
  }
});

const manage = [
  { text: 'Members', to: '/manage/members', Icon: Face },
  { text: 'Groups', to: '/manage/groups', Icon: SupervisedUserCircle },
  { text: 'Roles', to: '/manage/roles', Icon: Security },
  { text: 'Users', to: '/manage/users', Icon: AccountCircle },
];

const other = [
  { text: 'Contact', to: '/contact', Icon: Drafts },
  { text: 'About', to: '/about', Icon: HelpOutline },
];

const NavLink = props => (
  <Link {...props} getProps={({ isPartiallyCurrent }) => {
    return { 
      style: { 
        opacity: isPartiallyCurrent ? 1 : 0.6,
      }
    };
  }} />
);

const Sidebar = memo(({ classes, isOpen, handleClose }) => {
  const Menu = ({ menu }) => (
    <List>
      {menu.map(({ text, to, Icon }) => (
        <ListItem to={to} key={text} button component={NavLink}>
          <ListItemIcon className={classes.icon}>
            <Icon className={classes[text.toLowerCase()]} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
  
  const sp = e => e.stopPropagation();

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

          <div className={classes.margin} onClick={sp} onKeyDown={sp}>
            <Grid container spacing={24} alignItems='flex-end'>
              <Grid item>
                <Search className={classes.icon} />
              </Grid>
              <Grid item>
                <InputBase id='search' placeholder='Search' className={classes.search} />
              </Grid>
            </Grid>
          </div>

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