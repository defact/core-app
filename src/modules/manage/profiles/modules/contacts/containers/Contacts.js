import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/contacts';
import { fetch as classifiers } from '../state/actions/classifiers';

const Contacts = ({ pid, fetch, classifiers, children }) => {
  useEffect(() => {
    classifiers();
  }, []);

  useEffect(() => {
    if (pid) fetch({ id: pid });
  }, [pid]);

  return children;
};

export default connect(null, { fetch: fetch.start, classifiers: classifiers.start })(Contacts);
