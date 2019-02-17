import React from 'react';
import { connect } from 'react-redux';

import { Header, Footer } from '../components';
import { signOut } from '../../sessions/actions/signout';

const Main = ({ children, ...props }) => (
  <>
    <Header {...props} />
    {children}
    <Footer />
  </>
);

export default connect(state => ({ me: state.user.me }), { handleSignOut: signOut })(Main);

