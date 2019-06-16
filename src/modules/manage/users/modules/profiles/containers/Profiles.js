import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/profiles';

const Profiles = ({ uid, fetch, children }) => {
  useEffect(() => {
    if (uid) fetch({ id: uid });
  }, [uid]);

  return children;
};

export default connect(null, { fetch: fetch.start })(Profiles);
