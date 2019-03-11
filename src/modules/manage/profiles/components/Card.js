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
import { Face, Delete, RestoreFromTrash } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

import Actions from './Actions';

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
    <Tooltip title={isArchived ? 'restore member' : 'archive member'}>
      {isArchived ? <RestoreFromTrash /> : <Delete />}
    </Tooltip>
  </IconButton>
);

const Icon = ({ id, classes }) => (
  <Link to={`${id}`}>
    <Avatar aria-label='Profile' className={classes.avatar} color='secondary'>
      <Face />
    </Avatar>
  </Link>
);

const Profile = memo(({ id, name, isArchived = false, save, archive, classes }) => {
  // const handleArchive = () => archive({ id });
  const handleArchive = () => console.log(id);

  return (
    <Card className={classnames(isArchived && classes.archived)}>
      <CardHeader
        avatar={<Icon id={id} classes={classes} />}
        action={<Actions id={id} />}
        title={<Link to={`${id}`} className={classes.link}>{name}</Link>}
      />

      <CardActions disableActionSpacing>
        <Archive handleArchive={handleArchive} isArchived={isArchived} />
      </CardActions>
    </Card>
  );
});

export default withStyles(styles)(Profile);


