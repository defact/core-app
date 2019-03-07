import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Error } from '../components';
import { clear } from '../../me/state/actions/me';

const Denied = ({ clear }) => { 
  useEffect(() => {
    clear();
  }, []);

  return (
    <Error title='Access Denied'>Access denied</Error>  
  );
};

export default connect(null, { clear })(Denied);