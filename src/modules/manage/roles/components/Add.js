import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Select, Submit } from '../../../app/components/form';
import { Breadcrumbs } from '../../../app/components';
import { useSubmitWithDialog } from '../../../app/hooks';

import validate from '../state/validate/role';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ claims, error, started, entities, permissions, add, classes }) => {
  const { handleSubmit, Dialog } = useSubmitWithDialog(add);

  return (
    <>
      <Breadcrumbs parts={[
        { label: 'Roles', to: '..' },
        { label: 'Add' },
      ]} />

      <Paper className={classes.paper}>
        <Form 
          onSubmit={handleSubmit}
          validate={validate}
          initialValues={{ claims }}
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
                  <Submit disabled={pristine || started}>
                    Add Role
                  </Submit>                
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