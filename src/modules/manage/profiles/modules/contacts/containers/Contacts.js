import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/classifiers';

const Contacts = ({ fetch, children }) => {
  useEffect(() => {
    fetch();
  }, []);

  return children;
};

export default connect(null, { fetch: fetch.start })(Contacts);
