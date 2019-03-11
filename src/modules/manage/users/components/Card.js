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
import { Email, Lock, LockOpen } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

import Actions from './Actions';

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  locked: {
    opacity: 0.5,
  },
  verified: {
    paddingLeft: theme.spacing.unit,
  },
  unverified: {
    color: theme.palette.error.main,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const LockUser = ({ isLocked, handleLock, disabled }) => (
  <IconButton onClick={handleLock} disabled={disabled}>
    <Tooltip title={isLocked ? 'unlock user' : 'lock user'}>
      {isLocked ? <Lock /> : <LockOpen />}
    </Tooltip>
  </IconButton>
);

const Icon = ({ id, classes }) => (
  <Link to={`${id}`}>
    <Avatar aria-label='User' className={classes.avatar} color='secondary'>
      <Email />
    </Avatar>
  </Link>
);

const Verified = ({ classes, isVerified }) => (
  <span className={classnames(!isVerified && classes.unverified, classes.verified)}>
    {isVerified ? null : 'unverified'}
  </span>
);

const User = memo(({ id, email, isLocked, isVerified, disabled, lock, classes }) => {
  const handleLock = () => !disabled && lock({ id });

  return (
    <Card className={classnames(isLocked && classes.locked)}>
      <CardHeader
        avatar={<Icon id={id} classes={classes} />}
        action={<Actions id={id} />}
        title={
          <Link to={`${id}`} className={classes.link}>
            {email}
            <Verified classes={classes} isVerified={isVerified} />
          </Link>}
      />

      <CardActions disableActionSpacing>
        <LockUser handleLock={handleLock} isLocked={isLocked} disabled={disabled} />
      </CardActions>
    </Card>
  );
});

export default withStyles(styles)(User);

