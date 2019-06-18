import React from 'react';
import classnames from 'classnames';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { Info, Block, Warning } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { red, blue, yellow } from '@material-ui/core/colors';

const ICONS = {
  info: Info,
  warning: Warning,
  error: Block,
};

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    minHeight: 64,
    zIndex: 1101,
    width: '100%',
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      minHeight: 56,
    },
  },
  message: {
  },
  error: {
    color: red[700],
    borderBottom: `1px solid ${red[400]}`,
    backgroundColor: red[100],
  },
  warning: {
    color: yellow[900],
    borderBottom: `1px solid ${yellow[600]}`,
    backgroundColor: yellow[100],
  },
  info: {
    color: blue[700],
    borderBottom: `1px solid ${blue[400]}`,
    backgroundColor: blue[100],
  },
  text: {
    display: 'inline-block',
    paddingLeft: theme.spacing.unit, 
    verticalAlign: 'top',
  },
});

const Flash = ({ message, type='info', isActive, dismiss, classes }) => {
  const active = message !== '' && isActive;
  const Icon = ICONS[type];

  return (
    <Slide direction='down' in={active} timeout={500} mountOnEnter unmountOnExit>
      <div className={classnames(classes.root, classes[type])} onClick={dismiss}>
        <div className={classes.message}>
          <Icon />
          <Typography variant='body1' className={classes.text} color='inherit'>{message}</Typography>
        </div>
      </div>
    </Slide>
  );
};

export default withStyles(styles)(Flash);