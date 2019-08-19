import React, { memo } from 'react';

import { ActionMenu } from '../../../app/components';

export const actions = ({ id, remove }) => [
  { label: 'Add User', to: `/manage/members/${id}/users/add` },
  { label: 'Upload Photo', to: `/manage/members/${id}/photos/add` },
  { label: 'Add a Contact', to: `/manage/members/${id}/contacts/add` },
  { label: 'Record a Note', to: `/manage/members/${id}/notes/add` },
  { label: 'Archive', action: () => remove({ id }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);