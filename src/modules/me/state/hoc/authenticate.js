import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { redirectTo } from '@reach/router';

import { meSelector } from '../reducers/me';

const authenticate = Component => {
  const mapStateToProps = state => ({
    me: meSelector(state)
  });

  return connect(mapStateToProps)(({ me, ...props }) => {
    const { id, isFetching } = me;
    
    useEffect(() => {
      if (!id && !isFetching) return redirectTo('/signin');
    }, [ id, isFetching ]);

    return <Component {...props} me={me} />
  });
};

export default authenticate;
