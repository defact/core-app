import React, { memo, useState } from 'react';
import classnames from 'classnames';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AccountCircle, Extension, Menu as MenuIcon, Refresh } from '@material-ui/icons';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'
import withStyles from '@material-ui/core/styles/withStyles';

import { Sidebar, MenuLink } from './';
import { Switch } from '../../me/containers';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    marginLeft: (theme.spacing.unit * 2) + 4,
    marginRight: theme.spacing.unit * 2,
  },
  message: {
    padding: theme.spacing.unit,
  },
  hide: {
    display: 'none',
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
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
  resend: {
    marginLeft: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    cursor: 'pointer',
  },
});

const Verify = memo(({ me, resend, classes }) => (
  <AppBar position='static' color='secondary' 
    className={classnames(classes.message, (!me.id || me.isVerified) && classes.hide)}> 
    <Typography variant='body1' color='primary' align='center'>
      Please verify your email address
      <span className={classes.resend} onClick={resend}>Resend verification email?</span>
    </Typography>
  </AppBar>
));

const Logo = memo(({ me, children, classes }) => {
  const [ sidebar, setSidebar ] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebar} handleClose={() => setSidebar(false)} />
      {me.name && <MenuIcon className={classnames(classes.icon, classes.link)} onClick={() => setSidebar(true)} />}
      <Extension className={classes.icon} color='secondary' />
      <Typography variant='h6' color='inherit' component={Link} to='/'
        className={classnames(classes.grow, classes.link)}>
        {children}
      </Typography>
    </>
  )
});

const UserMenu = memo(({ classes, me, fetch, signOut }) => {
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

      <IconButton variant='contained' color='inherit' onClick={fetch}>
        <Refresh />
      </IconButton>

      <IconButton variant='contained' color='inherit' {...bindTrigger(popupState)}>
        <AccountCircle />
      </IconButton>

      <Menu {...bindMenu(popupState)}>
        <MenuLink to='/me' onClick={popupState.close}>Profile</MenuLink>
        <MenuLink to='/me/password' onClick={popupState.close}>Change Password</MenuLink>
        <MenuItem onClick={() => {
          popupState.close(); 
          signOut();
        }}>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );
});

const NoUserMenu = memo(() => (
  <div>
    <Button color='inherit' component={Link} to='/register'>
      Register
    </Button>
    <Button color='secondary' component={Link} to='/signin'>
      Sign In
    </Button>
  </div>
));

const Header = memo(({ me, fetch, signOut, resend, classes }) => (
  <div>
    <Verify me={me} resend={resend} classes={classes} />

    <AppBar position='static' className={classes.grow}> 
      <Toolbar className={classes.toolbar}>
        <Logo me={me} classes={classes}>Defacto</Logo>

        {me.isFetching && <CircularProgress className={classes.progress} size={20} thickness={3} />}
        {!me.isFetching && me.name && <UserMenu me={me} fetch={fetch} signOut={signOut} classes={classes} />}
        {!me.isFetching && !me.name && <NoUserMenu />}
      </Toolbar>
    </AppBar>
  </div>
));

export default withStyles(styles)(Header);