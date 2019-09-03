import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/photos';

const Photos = ({ pid, fetch, children }) => {
  useEffect(() => {
    if (pid) fetch({ id: pid });
  }, [pid]);

  return children;
};

export default connect(null, { fetch: fetch.start })(Photos);
