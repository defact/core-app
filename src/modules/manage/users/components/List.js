import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import Header from './Header';

const List = memo(({ users, ...props }) => (
  <>
    <Helmet title={'Users'} />

    <Header />

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