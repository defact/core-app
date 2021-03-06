import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Face } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { Form } from 'react-final-form';

import { Input, Password, Header, Message, Submit } from '../../app/components/form';
import { Form as Layout } from '../../app/layouts';

import validate from '../state/validate/member';
import api from '../../../api';

import { isEmail } from '../../app/state/validator';

const emailAvailable = async email => {  
  if (email === undefined || isEmail()(email)) return;
  return api().get(`users/email/${email}`).then(data => {
    if (data.user) return 'Already registered';
  });
};

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
});

const Register = memo(({ classes, register, error, started }) => (
  <Layout>
    <Helmet title={'Register'} />
    <Header Icon={Face} isSubmitting={started}>Register</Header>
    
    <Form onSubmit={register} validate={validate}
      render={({ handleSubmit, pristine }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input name='name' label='Name' autoFocus/>
          <Input name='email' label='Email Address' />
          <Password />

          <Submit disabled={pristine || started} fullWidth={true}>Register</Submit>
        </form>
      )}
    />

    {error && <Message {...error} />}
  </Layout>
));

export default withStyles(styles)(Register);
