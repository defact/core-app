import React, { memo } from 'react';

import { ActionMenu } from '../../../app/components';

export default memo(({ id }) => (
  <ActionMenu id={id} actions={[
    { to: `${id}/users/add`, label: 'Add User' },
    { to: `${id}/photos/upload`, label: 'Upload Photo' },
    { to: `${id}/archive`, label: 'Archive' },
  ]}/>
));