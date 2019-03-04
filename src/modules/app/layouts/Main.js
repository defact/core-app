import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { Header, Footer } from '../components';
import { signOut } from '../../sessions/state/actions/signout';
import { fetchMe } from '../../me/state/actions/me';
import { meSelector } from '../../me/state/reducers/me';

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

const Main = withStyles(styles)(({ classes, children, ...props }) => (
  <div className={classes.container}>
    <Helmet titleTemplate={'Defacto | %s'} title={'Home'} />
    <Header {...props} />
    <main className={classes.main}>{children}</main>
    <Footer />
  </div>
));

const mapStateToProps = state => ({ me: meSelector(state) });

export default connect(mapStateToProps, { signOut, fetchMe })(Main);

