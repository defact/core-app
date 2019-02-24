import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Info, Block, Warning } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { red, blue, yellow } from '@material-ui/core/colors';

const ICONS = {
  info: Info,
  warning: Warning,
  error: Block,
};

const styles = theme => ({
  error: {
    color: red[700],
  },
  warning: {
    color: yellow[900],
  },
  info: {},
  text: {
    paddingLeft: theme.spacing.unit, 
    verticalAlign: 'top'
  },
});

const Transition = (props) => <Slide direction='up' {...props} />;

const Alert = ({ classes, open, title, children, type='info', handleClose }) => {
  const Icon = ICONS[type];

  return (
    <Dialog open={open} keepMounted TransitionComponent={Transition}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText className={classes[type]}>
          <Icon />
          <span className={classes.text}>{children}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(Alert);