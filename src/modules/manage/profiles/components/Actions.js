import React, { memo } from 'react';

import { ActionMenu } from '../../../app/components';

export const actions = ({ id, remove }) => [
  { label: 'Add User', to: `/manage/members/${id}/users/add` },
  { label: 'Upload Photo', to: `/manage/members/${id}/photos/upload` },
  { label: 'Archive', action: () => remove({ id }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);