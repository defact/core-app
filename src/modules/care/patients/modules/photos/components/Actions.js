import React, { memo } from 'react';

import { ActionMenu } from '../../../../../app/components';

export const actions = ({ profile, photo, remove }) => [
  { label: 'Edit', to: `/manage/members/${profile.id}/photos/${photo.id}` },
  { label: 'Delete', action: () => remove({ profile, photo }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);