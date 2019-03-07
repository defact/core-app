import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/groups';

const Groups = ({ fetch, children }) => {
  useEffect(() => {
    fetch();
  }, []);

  return children;
};

export default connect(null, { fetch: fetch.start })(Groups);
