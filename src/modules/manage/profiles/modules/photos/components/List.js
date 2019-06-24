import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import withStyles from '@material-ui/core/styles/withStyles';

import { Table } from '../../../../../app/components';

import Actions from './Actions';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    backgroundColor: '#fff',
  },
});

const NoEntry = memo(({ text, classes }) => (
  <List>
    <ListItem>
      <ListItemText primary={text} />
    </ListItem>
  </List>
));

const Photos = memo(({ profile, photos, data, remove, classes }) => {
  const actions = photo => <Actions photo={photo} profile={profile} remove={remove} />;

  const image = data => <img src={data.url} width='100%' />

  const columns = [
    { name: 'caption', cellProps: { style: { fontSize: '1rem', paddingRight: 0 }}},
    { name: 'url', cell: image, cellProps: { style: { fontSize: '1rem', paddingRight: 0 }}},
    { name: 'actions', cell: actions, width: 100, cellProps: { align: 'right' }},
  ];

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>

        {data.length === 0 && <NoEntry text={photos.started ? 'Loading...' : 'No photos'} />}

        {data.length > 0 && <Table data={data} columns={columns} />}
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Photos);
