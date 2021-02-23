/**
 * Enable permission
 * @param {string} roleType - The Role to enable the permission for
 * @param {string} controller - The controller name
 * @param {string} action - The controller's action name
 */
const enablePermission = async (roleType, controller, action) => {
  try {
    const roles = await strapi
      .query("role", "users-permissions")
      .findOne({ type: roleType });
    const rolePermission = roles.permissions.find((permission) => {
      return (
        permission.type === "application" &&
        permission.controller === controller &&
        permission.action === action.toLowerCase()
      );
    });
    strapi.query("permission", "users-permissions").update(
      { id: rolePermission.id },
      {
        ...rolePermission,
        enabled: true,
      }
    );
  } catch (err) {
    strapi.log.error(
      `Bootstrap script: Could not update settings. ${controller} - ${action}`
    );
  }
};

const crudActions = ["create", "count", "delete", "find", "findone", "update"];
const readOnlyActions = ["find", "findone"];

const initPermissions = async () => {
  for (let action of readOnlyActions) {
    await enablePermission("public", "restaurant", action);
  }

  for (let action of crudActions) {
    await enablePermission("authenticated", "restaurant", action);
  }
};

module.exports = {
  initPermissions,
};
