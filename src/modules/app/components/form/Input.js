import React, { memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Field } from 'react-final-form';

export default memo(({ name, label, type='text', ...rest }) => (
  <Field name={name} {...rest}>
    {({ input: { name, value, onChange, ...restInput }, meta, ...rest }) => (
      <FormControl margin='dense' fullWidth error={meta.touched && meta.error && true}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Input {...rest}
          id={name}
          name={name}
          type={type}
          inputProps={{...restInput, autoCapitalize: 'off'}}
          onChange={onChange}
          value={value}  
        />
        <FormHelperText>{meta.touched && meta.error}</FormHelperText>
      </FormControl>
    )}
  </Field>
));
