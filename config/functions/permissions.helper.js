/**
 * Enable permission
 * @param {string} roleType - The Role to enable the permission for
 * @param {string} controller - The controller name
 * @param {string} action - The controller's action name
 */
const enablePermission = async (roleType, controller, action) => {
  try {
    const roles = await strapi
      .query('role', 'users-permissions')
      .findOne({ type: roleType });
    const rolePermission = roles.permissions.find(
      (permission) =>
        permission.type === 'application' &&
        permission.controller === controller &&
        permission.action === action.toLowerCase(),
    );
    strapi.query('permission', 'users-permissions').update(
      { id: rolePermission.id },
      {
        ...rolePermission,
        enabled: true,
      },
    );
  } catch (err) {
    strapi.log.error(
      `Bootstrap script: Could not update settings. ${controller} - ${action}`,
    );
  }
};

const crudActions = ['create', 'count', 'delete', 'find', 'findone', 'update'];
const readOnlyActions = ['find', 'findone'];

const initPermissions = async () => {
  readOnlyActions.forEach(async (action) => {
    enablePermission('public', 'restaurant', action);
    enablePermission('public', 'table', action);
  });

  crudActions.forEach(async (action) => {
    await enablePermission('authenticated', 'restaurant', action);
    await enablePermission('authenticated', 'table', action);
    await enablePermission('authenticated', 'booking', action);
  });
};

module.exports = {
  initPermissions,
};
