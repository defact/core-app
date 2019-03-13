import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Add } from '@material-ui/icons';

import { Breadcrumbs, ActionButton } from '../../../app/components';
import Card from './Card';

const List = memo(({ profiles, ...props }) => (
  <>
    <Breadcrumbs 
      parts={[ { label: 'Members' } ]} 
      action={<ActionButton label='Register' Icon={Add} to='register' /> } />

    <Grid container spacing={24}>
      {profiles.profiles.map(profile => 
        <Grid key={profile.id} item xs={12} sm={6} md={4}>
          <Card {...profile} {...props} />
        </Grid>
      )}
    </Grid>
  </>
));

export default List;