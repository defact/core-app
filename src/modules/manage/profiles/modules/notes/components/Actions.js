import React, { memo } from 'react';

import { ActionMenu } from '../../../../../app/components';

export const actions = ({ profile, note, remove }) => [
  { label: 'Cancel', action: () => remove({ profile, note }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);