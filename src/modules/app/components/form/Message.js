import React, { memo } from 'react';
import classnames from 'classnames';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Info, Block, Warning } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { red, blue, yellow } from '@material-ui/core/colors';

const ICONS = {
  info: Info,
  warning: Warning,
  error: Block,
};

const styles = theme => ({
  message: {
    marginTop: theme.spacing.unit * 2,
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
  centre: {
    textAlign: 'center',
  },
});

const Message = memo(({ classes, message, type='error', theme }) => {
  const Icon = ICONS[type];
  const shouldCentre = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Typography 
      variant='subtitle1' 
      component='p' 
      className={classnames(classes.message, classes[type], shouldCentre && classes.centre)}
    >
      <Icon />
      <span className={classes.text}>{message}</span>
    </Typography>
  )
});

export default withTheme()(withStyles(styles)(Message));