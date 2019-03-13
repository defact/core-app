import React, { memo, createRef } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import setFieldData from 'final-form-set-field-data';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, AutoSave } from '../../../app/components/form';
import { TabBar, Breadcrumbs } from '../../../app/components';

import Actions from './Actions';
import validate from '../state/validate/user';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    padding: theme.spacing.unit * 3,
  },
});

const User = memo(({ uid, email, save, classes, children, ...props }) => {
  const handleSubmit = (props) => save({ id: uid, ...props });
  const containerRef = createRef();

  return (
    <>
      <Breadcrumbs parts={[
        { label: 'Users', to: '..' },
        { label: email },
      ]} action={<Actions id={uid} {...props} />} />

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
                    <Input name='email' label='Email Address' autoFocus disabled={props.disabled} />
                    <AutoSave setFieldData={form.mutators.setFieldData} 
                      save={handleSubmit} container={containerRef} />
                  </Grid>
                </Grid>
              </form>
            )}
          />  
        </div>  
      </Paper>

      <TabBar selected={props['*']} tabs={[
        { label: 'Roles', to: 'roles' },
        { label: 'Members', to: 'members' },
      ]} />

      {children}
    </>
  );
});

export default withStyles(styles)(User);