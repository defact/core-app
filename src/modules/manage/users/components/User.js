import React, { memo, useState, useEffect, createRef } from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Form } from 'react-final-form';
import setFieldData from 'final-form-set-field-data';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, AutoSave } from '../../../app/components/form';

import validate from '../state/validate/user';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    padding: theme.spacing.unit * 3,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.5)',
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  },
  separator: {
    marginLeft: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    borderLeft: `1px solid ${theme.palette.divider}`,
  }
});

const Header = withStyles(styles)(memo(({ email, classes }) => (
  <div className={classes.topBar}>
    <Typography variant='h6'>
      <Link className={classes.link} to='/manage/users'>
        <span className={classes.text}>Users</span>
      </Link>
      <span className={classnames(classes.text, classes.separator)}>{email}</span>
    </Typography>
  </div>
)));

const TabBar = withStyles(styles)(memo(({ classes }) => {
  const [ value, setValue ] = useState(0);

  const handleChange = (e, value) => setValue(value);

  return (
    <Paper>
      <Tabs value={value} onChange={handleChange}>
        <Tab label='Roles' component={Link} to='roles' />
        <Tab label='Profiles' component={Link} to='profiles' />
      </Tabs>
    </Paper>
  );
}));

const User = withStyles(styles)(memo(({ id, email, save, select, classes, children }) => {
  useEffect(() => {
    select(id);
  }, [ id ]);
  
  const handleSubmit = (props) => save({ id, ...props });
  const containerRef = createRef();

  return (
    <>
      <Helmet title={`Users | ${email}`} />
      <Header email={email} />

      <Paper className={classes.paper}>
        <div ref={containerRef} className={classes.card}>
          <Form 
            onSubmit={handleSubmit}
            initialValues={{ email }}
            subscription={{ }}
            mutators={{ setFieldData }}
            validate={validate}
            render={({ form }) => (
              <form onSubmit={handleSubmit} autoComplete='off'>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={6}>
                    <Input name='email' label='Email Address' autoFocus />
                    <AutoSave setFieldData={form.mutators.setFieldData} 
                      save={handleSubmit} container={containerRef} />
                  </Grid>
                </Grid>
              </form>
            )}
          />  
        </div>  
      </Paper>

      <TabBar />

      {children}
    </>
  );
}));

export default User;