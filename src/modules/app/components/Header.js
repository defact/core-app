import React, { memo, useState } from 'react';
import classnames from 'classnames';
import { Link, Match, navigate } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AccountCircle, Extension, Menu as MenuIcon, Refresh } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'
import { Sidebar } from './';

import { Switch } from '../../me/containers';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    marginLeft: theme.spacing.unit * 2,
  },
  message: {
    padding: theme.spacing.unit,
  },
  hide: {
    display: 'none',
  },
  link: {
    cursor: 'pointer',
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
  profile: {
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    }
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#000',
  },
});

const MenuLink = memo(({ children, onClick, ...props }) => (
  <Match path={props.to}>
    {({ match }) => (
      <Link {...props} getProps={() => 
        ({ style: { 
          textDecoration: 'none', 
          outline: 0,
        }})}>
        <MenuItem onClick={onClick} selected={match !== null}>
          {children}
        </MenuItem>
      </Link>
    )}
  </Match>  
));

const UserMenu = memo(({ classes, me, fetchMe, handleSignOut }) => {
  const [ showSwitchDialog, setShowSwitchDialog ] = useState(false);
  const popupState = usePopupState({variant: 'popover', popupId: 'me'});

  const handleOpenSwitch = value => setShowSwitchDialog(true);
  const handleCloseSwitch = value => setShowSwitchDialog(false);

  return (
    <div>
      <Button color='inherit' className={classes.profile} onClick={handleOpenSwitch}>
        {me.name}
      </Button>
      <Switch open={showSwitchDialog} onClose={handleCloseSwitch} />

      <IconButton variant='contained' color='inherit' onClick={fetchMe}>
        <Refresh />
      </IconButton>

      <IconButton variant='contained' color='inherit' {...bindTrigger(popupState)}>
        <AccountCircle />
      </IconButton>

      <Menu {...bindMenu(popupState)}>
        <MenuLink to='/me' onClick={popupState.close}>Profile</MenuLink>
        <MenuLink to='/me/password' onClick={popupState.close}>Change Password</MenuLink>
        <MenuItem onClick={() => {
          popupState.close(); handleSignOut();
        }}>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );
});

const NoUserMenu = memo(() => (
  <div>
    <Button color='inherit' onClick={() => navigate('/register')}>
      Register
    </Button>
    <Button color='secondary' onClick={() => navigate('/signin')}>
      Sign In
    </Button>
  </div>
));

const Header = memo(props => {
  const { me, classes } = props;
  const [ sidebar, setSidebar ] = useState(false);

  return (
    <div>
      <Sidebar isOpen={sidebar} handleClose={() => setSidebar(false)} />
      <AppBar position='static' color='secondary' 
        className={classnames(classes.message, me.isVerified && classes.hide)}> 
        <Typography variant='body1' color='primary' align='center'>
          Please verify your email address
        </Typography>
      </AppBar>
      <AppBar position='static' className={classes.grow}> 
        <Toolbar className={classes.toolbar}>
          <Extension className={classes.icon} color='secondary' />
          <Typography variant='h6' color='inherit' 
            className={classnames(classes.grow, classes.link)} onClick={() => navigate('/')}>
            Defacto
          </Typography>

          {!me.isFetching && me.name && <MenuIcon className={classnames(classes.icon, classes.link)} onClick={() => setSidebar(true)} />}

          {me.isFetching && <CircularProgress className={classes.progress} size={20} thickness={3} />}
          {!me.isFetching && me.name && <UserMenu  {...props} />}
          {!me.isFetching && !me.name && <NoUserMenu />}
        </Toolbar>
      </AppBar>
    </div>
  )
});

export default withStyles(styles)(Header);