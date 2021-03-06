import React, { memo } from 'react';

import { ActionMenu } from '../../../app/components';

export const actions = ({ id, remove }) => [
  { label: 'Add Child Group', to: `/manage/groups/${id}/groups/add` },
  { label: 'Upload Photo', to: `/manage/groups/${id}/photos/upload` },
  { label: 'Archive', action: () => remove({ id }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);
