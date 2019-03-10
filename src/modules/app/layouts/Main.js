import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { Header, Footer, Alert, Flash } from '../components';
import { close } from '../state/actions/alert';
import { fetch } from '../../me/state/actions/me';
import { resend } from '../../me/state/actions/verification';
import { signOut } from '../../sessions/state/actions/signout';
import { meSelector } from '../../me/state/selectors/me';

const styles = theme => ({
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  }
});

const Main = withStyles(styles)(({ classes, children, alert, flash, ...props }) => (
  <div className={classes.container}>
    <Helmet titleTemplate={'Defacto | %s'} title={'Home'} />
    <Flash {...flash} />
    <Alert {...alert} />
    <Header {...props} />
    <main className={classes.main}>{children}</main>
    <Footer />
  </div>
));

const mapStateToProps = state => ({ 
  me: meSelector(state),
  alert: state.app.alert,
  flash: state.app.flash,
});

const mapActions = ({ 
  fetch: fetch.start, 
  resend: resend.start,
  signOut: signOut.start, 
  close 
});

export default connect(mapStateToProps, mapActions)(Main);

