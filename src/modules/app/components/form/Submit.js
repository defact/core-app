import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const Submit = memo(({ classes, children, disabled, color='secondary', fullWidth=true }) => (
  <Button
    type='submit'
    fullWidth={fullWidth}
    variant='contained'
    color={color}
    className={classes.submit}
    disabled={disabled}
    >
    {children}
  </Button>
));

export default withStyles(styles)(Submit);