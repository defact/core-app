import React, { memo } from 'react';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import { withStyles, withTheme } from '@material-ui/core/styles';

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const Submit = memo(({ children, disabled, color='secondary', fullWidth=false, theme, classes }) => {
  if (fullWidth === false) fullWidth = useMediaQuery(theme.breakpoints.down('xs'));
  
  return (
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
  );
});

export default withTheme()(withStyles(styles)(Submit));