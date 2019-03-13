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
import { Security, Delete, RestoreFromTrash } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

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

const Archive = ({ isArchived, handleArchive, disabled }) => (
  <IconButton onClick={handleArchive} disabled={disabled}>
    <Tooltip title={isArchived ? 'restore role' : 'archive role'}>
      {isArchived ? <RestoreFromTrash /> : <Delete />}
    </Tooltip>
  </IconButton>
);

const Icon = ({ id, classes }) => (
  <Link to={`${id}`}>
    <Avatar aria-label='Role' className={classes.avatar} color='secondary'>
      <Security />
    </Avatar>
  </Link>
);

const Role = memo(({ id, name, classes, props }) => {
  const handleArchive = () => !props.disabled && props.remove({ id });

  return (
    <Card className={classnames(props.isArchived && classes.archived)}>
      <CardHeader
        avatar={<Icon id={id} classes={classes} />}
        title={<Link to={`${id}`} className={classes.link}>{name}</Link>}
      />

      <CardActions disableActionSpacing>
        <Archive handleArchive={handleArchive} {...props} />
      </CardActions>
    </Card>
  );
});

export default withStyles(styles)(Role);


