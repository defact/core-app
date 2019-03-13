import React, { memo } from 'react';

import { ActionMenu } from '../../../app/components';

export const actions = ({ id, reset, remove }) => [
  { label: 'Reset Password', action: () => reset({ id }) },
  { label: 'Change Password', to: `/manage/users/${id}/password/change` },
  { label: 'Add Member', to: `/manage/users/${id}/members/add` },
  { label: 'Archive', action: () => remove({ id }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);