import React, { memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const Question = memo(({ open, accept, dismiss, label }) => {
  return (
    <Dialog
      open={open}
      onClose={dismiss}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {label}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color='secondary' onClick={dismiss}>
          No
        </Button>
        <Button color='secondary' autoFocus onClick={accept}>
          Yes
        </Button> 
      </DialogActions>
    </Dialog>
  );
});

export default Question;