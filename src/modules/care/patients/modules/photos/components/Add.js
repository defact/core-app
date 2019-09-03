import React, { memo, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, File, Submit, Message } from '../../../../../app/components/form';
import { useSubmitWithRedirect } from '../../../../../app/hooks';

import validate from '../state/validate/photo';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ profile, error, started, add, info, classes }) => {
  const [ image, setImage ] = useState(null);
  
  const onSubmit = data => add({ id: profile.id, ...data });
  const onSuccess = () => info(`The photo has been added`);
  const redirectTo = `/manage/members/${profile.id}/photos`;
  const handleSubmit = useSubmitWithRedirect(onSubmit, { redirectTo, onSuccess });

  const handleChangeFile = (e, form) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      form.change('file', file);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Paper className={classes.paper}>
      <Form 
        onSubmit={handleSubmit}
        validate={validate}
        render={({ form, handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit} autoComplete='off'>
            
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <Input name='caption' label='Caption' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <File name='file' form={form} />
              </Grid>

              <Grid container item xs={12} justify='flex-end'>
                <Submit disabled={pristine || started}>
                  Add Photo
                </Submit>         
              </Grid>
            </Grid>
          </form>
        )}
      />    
      {error && <Message {...error} />}
    </Paper>
  );
}));

export default Add;