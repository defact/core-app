import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/users';

const Users = ({ pid, fetch, children }) => {
  useEffect(() => {
    if (pid) fetch({ id: pid });
  }, [pid]);

  return children;
};

export default connect(null, { fetch: fetch.start })(Users);
