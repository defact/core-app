import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/notes';

const Notes = ({ nid, fetch, children }) => {
  useEffect(() => {
    if (nid) fetch({ id: nid });
  }, [nid]);

  return children;
};

export default connect(null, { fetch: fetch.start })(Notes);
