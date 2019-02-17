import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { redirectTo } from '@reach/router';

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

export default connect(state => ({ ...state.user.me }))(Redirect);