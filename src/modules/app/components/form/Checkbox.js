import React, { memo } from 'react';
import Checkbox from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field } from 'react-final-form';

export default memo(({ name, label, ...rest }) => (
  <Field name={name} {...rest} type='checkbox'>
    {({ input: { name, onChange, checked, ...restInput }, meta, ...rest }) => (

      <FormControlLabel label={label} control={
        <Checkbox {...rest}
          color='secondary'
          inputProps={restInput}
          onChange={onChange}
          checked={!!checked}
        />}
      />             
    )}
  </Field>
));
