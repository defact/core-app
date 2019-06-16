import React, { memo } from 'react';

import { ActionMenu } from '../../../../../app/components';

export const actions = ({ profile, contact, remove }) => [
  { label: 'Edit', to: `/manage/members/${profile.id}/contacts/${contact.id}` },
  { label: 'Delete', action: () => remove({ profile, contact }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);