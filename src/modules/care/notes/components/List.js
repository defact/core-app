import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Add } from '@material-ui/icons';

import { Breadcrumbs, ActionButton } from '../../../app/components';
// import Card from './Card';

const List = memo(({ notes, ...props }) => (
  <>
    <Breadcrumbs 
      parts={[ { label: 'Notes' } ]} 
      action={<ActionButton label='Record' Icon={Add} to='add' /> } />

    <Grid container spacing={24}>
      {notes.notes.map(note => 
        <Grid key={note.id} item xs={12} sm={6} md={4}>
          {/* <Card {...note} {...props} /> */}
        </Grid>
      )}
    </Grid>
  </>
));

export default List;