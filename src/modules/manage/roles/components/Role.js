import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import setFieldData from 'final-form-set-field-data';
import { FieldArray } from 'react-final-form-arrays';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Select, AutoSave, Submit } from '../../../app/components/form';

const styles = theme => ({
  root: {
    width: 'auto',
    margin: theme.spacing.unit * 6,
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
});

const Role = memo(({ id, name, claims, save, permissions, entities, classes }) => {
  const handleSubmit = (props) => save({ id, ...props });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Form 
          onSubmit={handleSubmit}
          initialValues={{ name, claims }}
          subscription={{ }}
          mutators={{ ...arrayMutators, setFieldData }}
          render={({ form }) => (
            <form autoComplete='off'>
              
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <Input name='name' label='Role' />

                  <AutoSave setFieldData={form.mutators.setFieldData} save={handleSubmit} />
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
              </Grid>
            </form>
          )}
        />    
      </Paper>
    </div>
  );

});

export default withStyles(styles)(Role);

