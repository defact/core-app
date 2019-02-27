import React, { memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  select: {
    '&:focus': {
      backgroundColor: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.8)',
    }
  },
});

export default withStyles(styles)(memo(({ name, label, data, classes, ...rest }) => (
  <Field name={name} type='select' {...rest}>
    {({ input: { name, onChange, value, ...restInput }, meta, ...rest }) => (

      <FormControl fullWidth margin='dense' error={meta.touched && meta.error && true}>
        <InputLabel htmlFor={name}>{label}</InputLabel>

        <Select
          {...rest}
          classes={{ select: classes.select}}
          id={name}
          name={name}
          onChange={onChange}
          inputProps={restInput}
          value={value}
          autoWidth
        >                      
          {data.map(item => 
            <MenuItem key={`${item.name}-${item.id}`} value={item.id}>
              {item.name}
            </MenuItem>
          )}                          
        </Select>
        <FormHelperText>{meta.touched && meta.error}</FormHelperText>
      </FormControl>
    )}
  </Field>
)));