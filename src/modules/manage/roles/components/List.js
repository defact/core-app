import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Add } from '@material-ui/icons';

import { Breadcrumbs, ActionButton } from '../../../app/components';
import Card from './Card';

const List = memo(({ roles, ...props }) => (
  <>
    <Breadcrumbs 
      parts={[ { label: 'Roles' } ]} 
      action={<ActionButton label='Add Role' Icon={Add} to='add' /> } />

    <Grid container spacing={24}>
      {roles.roles.map(role => 
        <Grid key={role.id} item xs={12} sm={6} md={4}>
          <Card {...role} {...props} />
        </Grid>
      )}
    </Grid>
  </>
));

export default List;