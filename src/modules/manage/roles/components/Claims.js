import React, { memo, createRef } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import setFieldData from 'final-form-set-field-data';
import { FieldArray } from 'react-final-form-arrays';
import withStyles from '@material-ui/core/styles/withStyles';

import { Select, AutoSave } from '../../../app/components/form';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    padding: theme.spacing.unit * 3,
  },
});

const Claims = memo(({ role, save, permissions, entities, classes }) => {
  const handleSubmit = (props) => save({ ...role, ...props });
  const containerRef = createRef();

  if (role.claims.length === 0) return;

  return (
    <Paper className={classes.paper}>
      <div ref={containerRef} className={classes.card}>
        <Form 
          onSubmit={handleSubmit}
          initialValues={{ claims: role.claims }}
          subscription={{ }}
          mutators={{ ...arrayMutators, setFieldData }}
          render={({ form }) => (
            <form autoComplete='off'>
              
              <Grid container spacing={24}>

                <Grid item xs={12} sm={6}>
                  <AutoSave setFieldData={form.mutators.setFieldData} 
                    save={handleSubmit} container={containerRef} />
                  <FieldArray name='claims'>
                    {({ fields }) => (
                      fields.map((name, index) => (
                        <Select 
                          key={index}
                          name={`${name}.right`}
                          label={entities.find(e => e.id === role.claims[index].entity).name}
                          data={permissions} />
                      )))}
                  </FieldArray>
                </Grid>
              </Grid>
            </form>
          )}
        />    
      </div>
    </Paper>
  );

});

export default withStyles(styles)(Claims);