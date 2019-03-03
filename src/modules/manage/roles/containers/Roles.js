import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRoles } from '../state/actions/roles';
import { fetchEntities } from '../state/actions/entities';
import { fetchPermissions } from '../state/actions/permissions';

const Roles = ({ fetchRoles, fetchPermissions, fetchEntities, children }) => {
  useEffect(() => {
    fetchEntities();
  }, []);

  useEffect(() => {
    fetchPermissions();
  }, []);

  useEffect(() => {
    fetchRoles();
  }, []);

  return children;
};

export default connect(null, { fetchRoles, fetchPermissions, fetchEntities })(Roles);
