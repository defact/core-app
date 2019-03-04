import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Error } from '../components';
import { clearMe } from '../../me/state/actions/me';

const Denied = ({ clearMe }) => { 
  useEffect(() => {
    clearMe();
  }, []);

  return (
    <Error title='Access Denied'>Access denied</Error>  
  );
};

export default connect(null, { clearMe })(Denied);