import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../state/actions/roles';
import { fetch as entities } from '../modules/claims/state/actions/entities';
import { fetch as permissions } from '../modules/claims/state/actions/permissions';

const Roles = ({ fetch, permissions, entities, children }) => {
  useEffect(() => {
    permissions();
  }, []);

  useEffect(() => {
    entities();
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return children;
};

export default connect(null, { fetch: fetch.start, permissions: permissions.start, entities: entities.start })(Roles);
