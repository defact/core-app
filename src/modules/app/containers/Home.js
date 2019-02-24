import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { redirectTo } from '@reach/router';

import { Error } from '../components';
import { meSelector } from '../../me/state/reducers/me';

const Home = ({ me }) => (
  <Error title='Defacto'>Home {me && me.name}</Error>  
);

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

export default authenticate(Home);
