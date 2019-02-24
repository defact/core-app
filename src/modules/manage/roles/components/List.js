import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet title={'Manage Roles'} />
      {roles.roles.map(role => <Role {...role} permissions={permissions} entities={entities} />)}
    </>
  );
}

export default List;