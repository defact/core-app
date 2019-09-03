import React, { memo, createRef } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import setFieldData from 'final-form-set-field-data';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, AutoSave } from '../../../app/components/form';
import { TabBar, Breadcrumbs } from '../../../app/components';
import Actions, { actions } from './Actions';

import validate from '../state/validate/profile';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    padding: theme.spacing.unit * 3,
  },
});

const Profile = withStyles(styles)(memo(({ pid, name, disabled, save, classes, children, ...props }) => {
  const handleSubmit = (props) => save({ id: pid, ...props });
  const containerRef = createRef();

  return (
    <>
      <Breadcrumbs parts={[
        { label: 'Patients', to: '..' },
        { label: name },
      ]} action={<Actions id={pid} {...props} />} />

      <Paper className={classes.paper}>
        <div ref={containerRef} className={classes.card}>
          <Form 
            onSubmit={handleSubmit}
            initialValues={{ name }}
            subscription={{ }}
            mutators={{ setFieldData }}
            validate={validate}
            render={({ form }) => (
              <form onSubmit={handleSubmit} autoComplete='off'>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={6}>
                    <Input name='name' label='Name' autoFocus disabled={disabled} />
                    <AutoSave setFieldData={form.mutators.setFieldData} 
                      save={handleSubmit} container={containerRef} />
                  </Grid>
                </Grid>
              </form>
            )}
          />  
        </div>  
      </Paper>

      <TabBar id='profile' tabs={[
        { label: 'Notes', to: 'notes' },
        { label: 'Contacts', to: 'contacts' },
        { label: 'Photos', to: 'photos' },
      ]} actions={actions({ id: pid, ...props })} />

      {children}
    </>
  );
}));

export default Profile;