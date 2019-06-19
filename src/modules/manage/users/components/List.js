import React, { memo } from 'react';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';

import { Breadcrumbs, ActionButton } from '../../../app/components';

import Filter from './Filter';
import Sort from './Sort';
import Card from './Card';

const SORT_PROPERTIES = { email: 'Email' };

const Control = withTheme()(({ filter, sort, asc, desc, theme }) => {
  const justify = useMediaQuery(theme.breakpoints.down('xs')) ? 'flex-start' : 'flex-end';

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={8}>
        <Filter filter={filter} />
      </Grid>
      <Grid item container xs={12} sm={4} justify={justify}>
        <Sort id='users' sort={sort} asc={asc} desc={desc} properties={SORT_PROPERTIES} />
      </Grid>
    </Grid>
  );
});

const List = memo(({ users, ...props }) => (
  <>
    <Breadcrumbs 
      parts={[ { label: 'Users' } ]} 
      action={<ActionButton label='Register' Icon={Add} to='register' /> } />

    <Control sort={users.sort} {...props} />

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
