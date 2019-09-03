import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'react-final-form';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select/creatable';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Submit, Message } from '../../../../../app/components/form';
import { useSubmitWithRedirect } from '../../../../../app/hooks';

import validate from '../state/validate/note';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const Add = withStyles(styles)(memo(({ profile, error, started, add, info, classes }) => {
  const onSubmit = data => add({ id: profile.id, ...data, tags: (data.tags || []).map(t => t.value)});
  const onSuccess = () => info(`The note has been recorded`);
  const redirectTo = `/manage/members/${profile.id}/notes`;
  const handleSubmit = useSubmitWithRedirect(onSubmit, { redirectTo, onSuccess });

  return (
    <Paper className={classes.paper}>
      <Form 
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit} autoComplete='off'>
            
            <Grid container spacing={24}>
            <Grid item xs={12}>
                <Input name='text' label='Enter text' multiline autoFocus={true} />
              </Grid>

              <Grid item xs={12}>
                <Field name='tags' type='select'>
                  {({ input: { name, onChange, value, ...restInput }, meta, ...rest }) => (

                    <FormControl fullWidth margin='dense' error={meta.touched && meta.error && true}>
                      <InputLabel htmlFor={name}>Tags</InputLabel>

                      <Select isMulti isClearable 
                        {...rest}
                        id={name}
                        name={name}
                        onChange={onChange}
                        inputProps={restInput}
                        options={colourOptions}
                        autoWidth
                      />
                      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
                    </FormControl>
                  )}
                </Field>

              </Grid>

              <Grid container item xs={12} justify='flex-end'>
                <Submit disabled={pristine || started}>
                  Record Note
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