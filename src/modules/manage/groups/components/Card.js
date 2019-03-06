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
import { MoreVert, SupervisedUserCircle, Delete, RestoreFromTrash } from '@material-ui/icons';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'
import withStyles from '@material-ui/core/styles/withStyles';

import { MenuLink } from '../../../app/components';

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  archived: {
    opacity: 0.5,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const Archive = ({ isArchived, handleArchive }) => (
  <IconButton onClick={handleArchive}>
    <Tooltip title={isArchived ? 'restore group' : 'archive group'}>
      {isArchived ? <RestoreFromTrash /> : <Delete />}
    </Tooltip>
  </IconButton>
);

const GroupMenu = ({ id }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: id });

  return (
    <>
      <IconButton variant='contained' color='inherit' {...bindTrigger(popupState)}>
        <MoreVert />
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
    <Avatar aria-label='Group' className={classes.avatar} color='secondary'>
      <SupervisedUserCircle />
    </Avatar>
  </Link>
);

const Group = memo(({ id, name, isArchived = false, save, archive, classes }) => {
  // const handleArchive = () => archive({ id });
  const handleArchive = () => console.log(id);

  return (
    <Card className={classnames(isArchived && classes.archived)}>
      <CardHeader
        avatar={<Icon id={id} classes={classes} />}
        action={<GroupMenu id={id} />}
        title={
          <Link to={`${id}`} className={classes.link}>
            {name}&nbsp;
          </Link>}
      />

      <CardActions disableActionSpacing>
        <Archive handleArchive={handleArchive} isArchived={isArchived} />
      </CardActions>
    </Card>
  );
});

export default withStyles(styles)(Group);


