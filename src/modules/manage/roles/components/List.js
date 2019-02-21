import React, { useEffect } from 'react';
import Role from './Role';

const List = ({ roles, isFetched, isFetching, handleFetch }) => {
  useEffect(() => {
    handleFetch();
  }, [ isFetched ]);

  return (
    <>
      {roles.ids.map(role => <Role role={role} />)}
    </>
  );
}

export default List;