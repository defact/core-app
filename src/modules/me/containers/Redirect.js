import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { redirectTo } from '@reach/router';
import { meSelector } from '../state/selectors/me';

const PASSWORD_URL = '/me/password';

const Redirect = ({ pathname, me: { forceChangePassword }, children }) => {
  useEffect(() => {
    if (forceChangePassword && pathname !== PASSWORD_URL) redirectTo(PASSWORD_URL);
  }, [pathname, forceChangePassword]);

  return children || null;
};

export default connect(state => ({ me: meSelector(state) }))(Redirect);