import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { verify } from '../state/actions/signin';

const Verify = memo(({ verify, code }) => {
  useEffect(() => { 
    verify(code); 
  }, [code]);
});

export default connect(null, { verify })(Verify);
