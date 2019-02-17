import React, { memo } from 'react';
import classnames from 'classnames';
import { Info, Block, Warning } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { red, blue, yellow } from '@material-ui/core/colors';

const ICONS = {
  info: Info,
  warning: Warning,
  error: Block,
};

const styles = theme => ({
  message: {
    marginTop: theme.spacing.unit,
    lineHeight: 1.5,
  },
  error: {
    color: red[700],
  },
  warning: {
    color: yellow[900],
  },
  info: {
    color: blue[800],
  },
  text: {
    paddingLeft: theme.spacing.unit, 
    verticalAlign: 'top'
  },
});

const Message = memo(({ classes, message, type='error' }) => {
  const Icon = ICONS[type];
  return (
    <Typography 
      variant='subtitle1' 
      component='p' 
      className={classnames(classes.message, classes[type])}
    >
      <Icon />
      <span className={classes.text}>{message}</span>
    </Typography>
  )
});

export default withStyles(styles)(Message);