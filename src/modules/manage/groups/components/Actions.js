import React, { memo } from 'react';

import { ActionMenu } from '../../../app/components';

export default memo(({ id }) => (
  <ActionMenu id={id} actions={[
    { to: `${id}/groups/add`, label: 'Add Child Group' },
    { to: `${id}/archive`, label: 'Archive' },
  ]} />
));
