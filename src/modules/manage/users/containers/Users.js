import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/users';

const Users = ({ fetch, children }) => {
  useEffect(() => {
    fetch();
  }, []);

  return children;
};

export default connect(null, { fetch })(Users);
