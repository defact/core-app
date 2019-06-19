import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import withStyles from '@material-ui/core/styles/withStyles';
import { Search } from '@material-ui/icons';

const styles = theme => ({
  input: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '100%',
  },
});

const Sort = ({ filter, classes }) => {
  return (
    <Input 
      onChange={e => filter('email', e.target.value)}
      margin='dense'
      className={classes.input}
      startAdornment={
        <InputAdornment position='start'>
          <Search />
        </InputAdornment>
      }
    />
  );
};

export default withStyles(styles)(Sort);