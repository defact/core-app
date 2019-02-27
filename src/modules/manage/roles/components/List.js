import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Role from './Role';

const List = ({ roles, permissions, entities, save, fetchRoles, fetchPermissions, fetchEntities }) => {
  useEffect(() => {
    fetchEntities();
  }, []);

  useEffect(() => {
    fetchPermissions();
  }, []);

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <>
      <Helmet title={'Manage Roles'} />
      {roles.roles.map(role => 
        <Role key={role.id} {...role} save={save} permissions={permissions} entities={entities} />)}
    </>
  );
}

export default List;