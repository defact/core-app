import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { redirectTo } from '@reach/router';
import { meSelector } from '../state/reducers/me';

const PASSWORD_URL = '/me/password';

const Redirect = ({ pathname, forceChangePassword, children }) => {
  useEffect(() => {
    try {
      if (forceChangePassword && pathname !== PASSWORD_URL) redirectTo(PASSWORD_URL);
    } catch(e) {
      // Swallow weird error
    }
  }, [pathname, forceChangePassword]);

  return children || null;
};

export default connect(state => ({ me: meSelector(state) }))(Redirect);