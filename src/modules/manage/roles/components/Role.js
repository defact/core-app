import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Select, Submit } from '../../../app/components/form';

const styles = theme => ({
  root: {
    width: 'auto',
    margin: theme.spacing.unit * 6,
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
  formControl: {
    width: '100%',
  },
  select: {
    '&:focus': {
      background: '#fff',
      borderBottom: '1px solid black'
    }
  },
});

const Role = memo(({ id, name, claims, permissions, entities, classes }) => {
  const handleSubmit = props => console.log(props);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Form onSubmit={handleSubmit} initialValues={{ name, claims }}
          mutators={{ ...arrayMutators }}
          render={({ handleSubmit }) => (
            <form className={classes.form} onSubmit={handleSubmit} autoComplete='off'>

              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <Input name='name' label='Role' />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FieldArray name='claims'>
                    {({ fields }) => (
                      fields.map((name, index) => (
                        <Select 
                          name={`${name}.right`}
                          label={claims[index].entity}
                          data={permissions} />
                      )))}
                  </FieldArray>
                </Grid>
              </Grid>

              <Submit>Save</Submit>
            </form>
          )}
        />    
      </Paper>
    </div>
  );

});

export default withStyles(styles)(Role);

