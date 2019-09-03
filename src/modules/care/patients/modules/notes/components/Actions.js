import React, { memo } from 'react';

import { ActionMenu } from '../../../../../app/components';

export const actions = ({ profile, note, cancel }) => [
  { label: 'Cancel', action: () => cancel({ profile, note }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);