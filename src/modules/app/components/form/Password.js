import React, { memo, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Field } from 'react-final-form';

export default memo(({ name='password', label='Password', ...rest }) => {
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <Field name={name} {...rest}>
      {({ input: { name, onChange, value, ...restInput }, meta, ...rest }) => (
        <FormControl margin='dense' fullWidth error={meta.touched && meta.error && true}>
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Input {...rest}
            id={name}
            name={name}
            type={showPassword ? 'text' : 'password'}
            inputProps={restInput}
            onChange={onChange}
            value={value}

            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='Toggle password visibility'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{meta.touched && meta.error}</FormHelperText>
        </FormControl>
      )}
    </Field>
  );
});
