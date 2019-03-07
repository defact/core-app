import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { Header, Footer, Alert, Flash } from '../components';
import { close } from '../state/actions/alert';
import { fetch } from '../../me/state/actions/me';
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

const Main = withStyles(styles)(({ classes, children, alert, flash, close, ...props }) => (
  <div className={classes.container}>
    <Helmet titleTemplate={'Defacto | %s'} title={'Home'} />
    <Flash {...flash} />
    <Header {...props} />
    <main className={classes.main}>{children}</main>
    <Footer />
    <Alert open={alert.isOpen} handleClose={close} type={alert.type}>
      {alert.message}
    </Alert>
  </div>
));

const mapStateToProps = state => ({ 
  me: meSelector(state),
  alert: state.app.alert,
  flash: state.app.flash,
});

export default connect(mapStateToProps, { fetch: fetch.start, signOut: signOut.start, close })(Main);

