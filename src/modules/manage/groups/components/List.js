import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Add } from '@material-ui/icons';

import { Breadcrumbs } from '../../../app/components';
import Card from './Card';

const List = memo(({ groups, ...props }) => (
  <>
    <Breadcrumbs 
      parts={[ { label: 'Groups' } ]} 
      actions={[ { label: 'Add Group', Icon: Add, to: 'add' } ]} />

    <Grid container spacing={24}>
      {groups.groups.map(group => 
        <Grid key={group.id} item xs={12} sm={6} md={4}>
          <Card {...group} {...props} />
        </Grid>
      )}
    </Grid>
  </>
));

export default List;