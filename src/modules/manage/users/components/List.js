import React, { memo } from 'react';
import { Add } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

import { Breadcrumbs } from '../../../app/components';
import Card from './Card';

const List = memo(({ users, ...props }) => (
  <>
    <Breadcrumbs 
      parts={[ { label: 'Users' } ]} 
      actions={[ { label: 'Register', Icon: Add, to: 'register' } ]} />

    <Grid container spacing={24}>
      {users.users.map(user => 
        <Grid key={user.id} item xs={12} sm={6} md={4}>
          <Card {...user} {...props} />
        </Grid>
      )}
    </Grid>
  </>
));

export default List;