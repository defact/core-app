import React, { memo } from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Select } from '../../../app/components/form';
import { useSubmit } from '../../../app/hooks';

import validate from '../state/validate/role';

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
    color: 'inherit'
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  },
  separator: {
    marginLeft: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    borderLeft: '1px solid rgba(0,0,0,0.1)',
  }
});

const Header = withStyles(styles)(memo(({ classes }) => {
  return (
    <div className={classes.topBar}>
      <div>
        <Typography variant='h6'>
          <Link className={classes.link} to='/manage/roles'>
            <span className={classes.text}>Roles</span>
          </Link>
          <span className={classnames(classes.text, classes.separator)}>Add</span>
        </Typography>
      </div>
    </div>
  );
}));

const Add = withStyles(styles)(memo(({ claims, error, isSaving, entities, permissions, add, classes }) => {
  const { handleSubmit, Dialog } = useSubmit(add);

  return (
    <>
      <Helmet title={'Roles | Add'} />
      <Header />

      <Paper className={classes.paper}>
        <Form 
          onSubmit={handleSubmit}
          validate={validate}
          initialValues={{ claims: claims }}
          mutators={{ ...arrayMutators }}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} autoComplete='off'>
              
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <Input name='name' label='Role Name' autoFocus />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FieldArray name='claims'>
                    {({ fields }) => (
                      fields.map((name, index) => (
                        <Select 
                          key={index}
                          name={`${name}.right`}
                          label={entities.find(e => e.id === claims[index].entity).name}
                          data={permissions} />
                      )))}
                  </FieldArray>
                </Grid>

                <Grid container item xs={12} justify='flex-end'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    disabled={pristine || isSaving}
                    >
                    Add Role
                  </Button>                
                </Grid>
              </Grid>
            </form>
          )}
        />    
        <Dialog error={error} message='The role has been added' />
      </Paper>
    </>
  );
}));

export default Add;