import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../../../../roles/state/actions/roles';

const Roles = ({ fetch, children }) => {
  useEffect(() => {
    fetch();
  }, []);

  return children;
};

export default connect(null, { fetch: fetch.start })(Roles);
