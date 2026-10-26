import { __jsr } from '~/lib/utils/path_helpers/core';
import { hasOrganizationScopedPaths, splitProjectFullPath } from '~/lib/utils/path_helpers/utils';


/**
 * Generates rails route to
 * /-/organizations/preview_markdown(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const previewMarkdownOrganizationsPath = /*#__PURE__*/ (...args) => {
  const _previewMarkdownOrganizationOrganizationsPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[6,"preview_markdown"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);
  const _previewMarkdownOrganizationsPath = /*#__PURE__*/ __jsr.r({"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[6,"preview_markdown"],[1,[2,[8,"."],[3,"format"]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _previewMarkdownOrganizationOrganizationsPath(gon.current_organization.path, ...args);
  }

  return _previewMarkdownOrganizationsPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/activity(.:format)
 * @param {any} organizationPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const activityOrganizationPath = /*#__PURE__*/ (...args) => {
  const _activityOrganizationOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"activity"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);
  const _activityOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"activity"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _activityOrganizationOrganizationPath(gon.current_organization.path, ...args);
  }

  return _activityOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/groups_and_projects(.:format)
 * @param {any} organizationPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const groupsAndProjectsOrganizationPath = /*#__PURE__*/ (...args) => {
  const _groupsAndProjectsOrganizationOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups_and_projects"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);
  const _groupsAndProjectsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups_and_projects"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _groupsAndProjectsOrganizationOrganizationPath(gon.current_organization.path, ...args);
  }

  return _groupsAndProjectsOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/users(.:format)
 * @param {any} organizationPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const usersOrganizationPath = /*#__PURE__*/ (...args) => {
  const _usersOrganizationOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"users"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);
  const _usersOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"users"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _usersOrganizationOrganizationPath(gon.current_organization.path, ...args);
  }

  return _usersOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/settings/general(.:format)
 * @param {any} organizationPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const generalSettingsOrganizationPath = /*#__PURE__*/ (...args) => {
  const _generalOrganizationSettingsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"settings"],[2,[7,"/"],[2,[6,"general"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]);
  const _generalSettingsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"settings"],[2,[7,"/"],[2,[6,"general"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _generalOrganizationSettingsOrganizationPath(gon.current_organization.path, ...args);
  }

  return _generalSettingsOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/groups/new(.:format)
 * @param {any} organizationPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newGroupsOrganizationPath = /*#__PURE__*/ (...args) => {
  const _newOrganizationGroupsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups"],[2,[7,"/"],[2,[6,"new"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]);
  const _newGroupsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups"],[2,[7,"/"],[2,[6,"new"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _newOrganizationGroupsOrganizationPath(gon.current_organization.path, ...args);
  }

  return _newGroupsOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/groups(.:format)
 * @param {any} organizationPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const groupsOrganizationPath = /*#__PURE__*/ (...args) => {
  const _organizationGroupsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);
  const _groupsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _organizationGroupsOrganizationPath(gon.current_organization.path, ...args);
  }

  return _groupsOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/groups/*id/edit(.:format)
 * @param {any} organizationPath
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editGroupsOrganizationPath = /*#__PURE__*/ (...args) => {
  const _editOrganizationGroupsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[2,[6,"edit"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]]]);
  const _editGroupsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"groups"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[2,[6,"edit"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _editOrganizationGroupsOrganizationPath(gon.current_organization.path, ...args);
  }

  return _editGroupsOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path/projects/:project_full_path/edit(.:format)
 * @param {any} organizationPath
 * @param {string} projectFullPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editProjectsOrganizationPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _editOrganizationNamespaceProjectsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"projects"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"edit"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]]]]]);
  const _editNamespaceProjectsOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"projects"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"edit"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _editOrganizationNamespaceProjectsOrganizationPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _editNamespaceProjectsOrganizationPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /-/organizations(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const organizationsPath = /*#__PURE__*/ (...args) => {
  const _organizationOrganizationsPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]);
  const _organizationsPath = /*#__PURE__*/ __jsr.r({"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[1,[2,[8,"."],[3,"format"]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _organizationOrganizationsPath(gon.current_organization.path, ...args);
  }

  return _organizationsPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newOrganizationPath = /*#__PURE__*/ (...args) => {
  const _newOrganizationOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[6,"new"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);
  const _newOrganizationPath = /*#__PURE__*/ __jsr.r({"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[6,"new"],[1,[2,[8,"."],[3,"format"]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _newOrganizationOrganizationPath(gon.current_organization.path, ...args);
  }

  return _newOrganizationPath(...args);
};

/**
 * Generates rails route to
 * /-/organizations/:organization_path(.:format)
 * @param {any} organizationPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const organizationPath = /*#__PURE__*/ (...args) => {
  const _organizationOrganizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);
  const _organizationPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"organizations"],[2,[7,"/"],[2,[3,"organization_path"],[1,[2,[8,"."],[3,"format"]]]]]]]]]);

  if (hasOrganizationScopedPaths()) {
    return _organizationOrganizationPath(gon.current_organization.path, ...args);
  }

  return _organizationPath(...args);
};

