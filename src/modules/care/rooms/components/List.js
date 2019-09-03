import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Add } from '@material-ui/icons';

import { Breadcrumbs, ActionButton } from '../../../app/components';
// import Card from './Card';

const List = memo(({ rooms, ...props }) => (
  <>
    <Breadcrumbs 
      parts={[ { label: 'Rooms' } ]} 
      action={<ActionButton label='Add' Icon={Add} to='add' /> } />

    <Grid container spacing={24}>
      {rooms.rooms.map(room => 
        <Grid key={room.id} item xs={12} sm={6} md={4}>
          {/* <Card {...room} {...props} /> */}
        </Grid>
      )}
    </Grid>
  </>
));

export default List;