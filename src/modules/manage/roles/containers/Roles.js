import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/roles';
import { fetchEntities } from '../state/actions/entities';
import { fetchPermissions } from '../state/actions/permissions';

const Roles = ({ fetch, fetchPermissions, fetchEntities, children }) => {
  useEffect(() => {
    fetchEntities();
  }, []);

  useEffect(() => {
    fetchPermissions();
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return children;
};

export default connect(null, { fetch, fetchPermissions, fetchEntities })(Roles);
