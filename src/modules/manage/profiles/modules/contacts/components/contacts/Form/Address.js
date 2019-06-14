import React from 'react';

import { Input } from '../../../../../../../app/components/form';

export default props => {
  return (
    <>
      <Input name='value.street' label='Street' autoFocus />
      <Input name='value.city' label='City' />
      <Input name='value.postcode' label='Postcode' />
    </>
  )
};