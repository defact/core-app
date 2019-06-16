import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { redirectTo } from '@reach/router';

import { meSelector } from '../selectors/me';

const authenticate = Component => {
  const mapStateToProps = state => ({
    me: meSelector(state)
  });

  return connect(mapStateToProps)(({ me, ...props }) => {
    const { id, started } = me;
    const { location: { pathname }} = props;

    useEffect(() => {
      if (!id && !started) {
        return redirectTo(`/signin?return=${pathname}`);
      }
    }, [ id, started, pathname ]);

    return <Component {...props} me={me} />
  });
};

export default authenticate;
