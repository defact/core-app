import React, { memo } from 'react';

import { ActionMenu } from '../../../app/components';

export const actions = ({ id, remove }) => [
  { label: 'Upload Photo', to: `/care/patients/${id}/photos/add` },
  { label: 'Add a Contact', to: `/care/patients/${id}/contacts/add` },
  { label: 'Record a Note', to: `/care/patients/${id}/notes/add` },
  { label: 'Archive', action: () => remove({ id }) },
];

export default memo(props => <ActionMenu actions={actions(props)} {...props} />);