import React, { lazy } from 'react';

import { Error, Content } from '../../app/components';

export default ({ name }) => {
  const Mdx = lazy(() => import(`./content/${name}.mdx`));

  return (
    <Error title='Help' name='help'>
      <Content Mdx={Mdx} />
    </Error>
  );
};
