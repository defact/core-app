import React, { useEffect } from 'react';
import Role from './Role';

const List = ({ roles, permissions, entities, fetchRoles, fetchPermissions, fetchEntities }) => {
  useEffect(() => {
    fetchRoles();
  }, []);

  useEffect(() => {
    fetchPermissions();
  }, []);

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <>
      {roles.roles.map(role => <Role {...role} permissions={permissions} entities={entities} />)}
    </>
  );
}

export default List;