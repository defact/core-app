const compare = property => (a, b) => {
  const propA = a[property].toUpperCase();
  const propB = b[property].toUpperCase();

  if (propA > propB) {
    return 1;
  } else if (propA < propB) {
    return -1;
  }
  return 0;
};

const constructRole = (entities, role = { claims: [] }) => {
  const claims = entities.map(entity => {
    const claim = role.claims.find(c => c.entity === entity.id);
    return claim === undefined ? { entity: entity.id, right: 0 } : claim;
  });
  return { ...role, claims };
};

const constructRoles = (roles, entities) => (
  roles
  .map(role => constructRole(entities, role))
  .sort(compare('name'))
);

export { constructRoles, constructRole };