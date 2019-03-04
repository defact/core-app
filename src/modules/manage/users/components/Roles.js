import React, { memo, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import arrayMutators, { remove } from 'final-form-arrays';
import setFieldData from 'final-form-set-field-data';
import { FieldArray } from 'react-final-form-arrays';
import withStyles from '@material-ui/core/styles/withStyles';

import { Checkbox, AutoSave } from '../../../app/components/form';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  }
});

const Roles = memo(({ user, fetch, save, classes }) => {
  useEffect(() => {
    fetch();
  }, []);

  const handleSubmit = ({ roles }) => {
    const changes = roles.filter(role => {
      return user.roles.find(r => r.id === role.id).has !== role.has;
    });

    changes.forEach(role => save({ user, role }));
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>
        <Form 
          onSubmit={handleSubmit}
          initialValues={{ roles: user.roles }}
          subscription={{ }}
          mutators={{ ...arrayMutators, setFieldData }}
          render={({ form }) => (
            <form autoComplete='off'>
              
              <Grid container spacing={0}>
                <AutoSave setFieldData={form.mutators.setFieldData} 
                  save={handleSubmit}>
                  Saving...
                </AutoSave>

                <FieldArray name='roles'>
                  {({ fields }) => (
                    fields.map((name, index) => (
                      <Grid key={index} item xs={12}>
                        <Checkbox
                          name={`${name}.has`}
                          label={`${user.roles[index].name}`}
                        />
                        </Grid>
                    )))}
                </FieldArray>
              </Grid>
            </form>
          )}
        />    
      </div>
    </Paper>
  );

});

export default withStyles(styles)(Roles);

