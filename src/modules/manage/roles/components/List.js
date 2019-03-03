import React from 'react';
import { Helmet } from 'react-helmet';
import Role from './Role';
import Header from './Header';

const List = ({ roles, permissions, entities, save }) => (
  <>
    <Helmet title={'Roles'} />

    <Header />

    {roles.roles.map(role => 
      <Role key={role.id} {...role} save={save} permissions={permissions} entities={entities} />)}
  </>
);

export default List;