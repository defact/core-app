import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({});

const Switch = memo(({ classes, me, profile = 7, ...props }) => {
  const [ value, setValue ] = useState(profile);

  const handleOk = () => props.onClose(value);
  const handleCancel = () => props.onClose(profile);
  const handleChange = (event, value) => setValue(value);

  return (
    <Dialog {...props} fullWidth={true} maxWidth='xs'>
      <DialogTitle>Switch Profile</DialogTitle>
      <DialogContent>
        <RadioGroup
            aria-label='Profile'
            name='profile'
            value={value.toString()}
            onChange={handleChange}
          >
            {me.profiles.map(({ id, name }) => (
              <FormControlLabel value={id.toString()} key={id} control={<Radio />} label={name} />
            ))}
          </RadioGroup>    
        </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color='inherit'>
          Cancel
        </Button>
        <Button onClick={handleOk} color='secondary' autoFocus>
          Switch Profile
        </Button>
      </DialogActions>
    </Dialog>
  )
});

export default withMobileDialog({breakpoint: 'xs'})(withStyles(styles)(Switch));
