const constructUser = (roles = [], user = { roles: [] }) => {
  return { ...user, roles: roles.map(role => {
      const has = user.roles.find(r => r === role.id) !== undefined;
      return { ...role, has };
    })
  };
};

export { constructUser };