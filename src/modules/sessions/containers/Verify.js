import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { verify } from '../actions/signin';

const Verify = memo(({ handleVerify, code }) => {
  useEffect(() => { 
    handleVerify(code); 
  }, [code]);
});

export default connect(null, { handleVerify: verify })(Verify);
