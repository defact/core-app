import React, { memo } from 'react';
import { Field } from 'react-final-form';

export default memo(({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
));