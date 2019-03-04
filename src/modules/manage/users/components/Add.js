import React, { memo } from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Form } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input } from '../../../app/components/form';
import { useSubmit } from '../../../app/hooks';

import validate from '../state/validate/user';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
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
    borderLeft: '1px solid rgba(0,0,0,0.1)',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const Header = withStyles(styles)(memo(({ classes }) => {
  return (
    <div className={classes.topBar}>
      <div>
        <Typography variant='h6'>
          <Link className={classes.link} to='/manage/users'>
            <span className={classes.text}>Users</span>
          </Link>
          <span className={classnames(classes.text, classes.separator)}>Register</span>
        </Typography>
      </div>
    </div>
  );
}));

const Add = withStyles(styles)(memo(({ error, isSaving, add, classes }) => {
  const { handleSubmit, Dialog } = useSubmit(add);

  return (
    <>
      <Helmet title={'Users | Register'} />
      <Header />

      <Paper className={classes.paper}>
        <Form 
          onSubmit={handleSubmit}
          validate={validate}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} autoComplete='off'>
              
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <Input name='email' label='Email Address' autoFocus />
                </Grid>

                <Grid container item xs={12} justify='flex-end'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    disabled={pristine || isSaving}
                    >
                    Add User
                  </Button>                
                </Grid>
              </Grid>
            </form>
          )}
        />    
        <Dialog error={error} message='The user has been added' />
      </Paper>
    </>
  );
}));

export default Add;