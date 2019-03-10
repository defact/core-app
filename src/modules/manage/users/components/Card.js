import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '@reach/router';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import { Menu as MenuIcon, Email, Lock, LockOpen } from '@material-ui/icons';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'
import withStyles from '@material-ui/core/styles/withStyles';

import { MenuLink } from '../../../app/components';

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  locked: {
    opacity: 0.5,
  },
  unverified: {
    color: theme.palette.error.main,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const LockUser = ({ isLocked, handleLock }) => (
  <IconButton onClick={handleLock}>
    <Tooltip title={isLocked ? 'unlock user' : 'lock user'}>
      {isLocked ? <Lock /> : <LockOpen />}
    </Tooltip>
  </IconButton>
);

const ActionMenu = ({ id }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: id });

  return (
    <>
      <IconButton variant='contained' color='inherit' {...bindTrigger(popupState)}>
        <MenuIcon />
      </IconButton>

      <Menu {...bindMenu(popupState)}>
        <MenuLink to={`${id}/profile`} onClick={popupState.close}>Profile</MenuLink>
        <MenuLink to={`${id}/roles`} onClick={popupState.close}>Manage Roles</MenuLink>
        <MenuLink to={`${id}/roles`} onClick={popupState.close}>Reset Password</MenuLink>
        <MenuLink to={`${id}/roles`} onClick={popupState.close}>Archive</MenuLink>
      </Menu>
    </>
  );
};

const Icon = ({ id, classes }) => (
  <Link to={`${id}`}>
    <Avatar aria-label='User' className={classes.avatar} color='secondary'>
      <Email />
    </Avatar>
  </Link>
);

const Verified = ({ classes, isVerified }) => (
  <span className={classnames(!isVerified && classes.unverified)}>
    {isVerified ? null : 'unverified'}
  </span>
);

const User = memo(({ id, email, isLocked, isVerified, save, lock, classes }) => {
  const handleLock = () => lock({ id });

  return (
    <Card className={classnames(isLocked && classes.locked)}>
      <CardHeader
        avatar={<Icon id={id} classes={classes} />}
        action={<ActionMenu id={id} />}
        title={
          <Link to={`${id}`} className={classes.link}>
            {email}&nbsp;
            <Verified classes={classes} isVerified={isVerified} />
          </Link>}
      />

      <CardActions disableActionSpacing>
        <LockUser handleLock={handleLock} isLocked={isLocked} />
      </CardActions>
    </Card>
  );
});

export default withStyles(styles)(User);

