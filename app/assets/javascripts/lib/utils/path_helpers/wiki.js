import { __jsr } from '~/lib/utils/path_helpers/core';
import { hasOrganizationScopedPaths, splitProjectFullPath } from '~/lib/utils/path_helpers/utils';


/**
 * Generates rails route to
 * /:project_full_path/-/wikis/git_access(.:format)
 * @param {string} projectFullPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikisGitAccessPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikisGitAccessPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"git_access"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikisGitAccessPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"git_access"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikisGitAccessPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikisGitAccessPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/pages(.:format)
 * @param {string} projectFullPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikisPagesPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikisPagesPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"pages"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikisPagesPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"pages"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikisPagesPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikisPagesPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/templates(.:format)
 * @param {string} projectFullPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikisTemplatesPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikisTemplatesPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"templates"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikisTemplatesPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"templates"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikisTemplatesPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikisTemplatesPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/new(.:format)
 * @param {string} projectFullPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikisNewPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikisNewPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"new"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikisNewPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"new"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikisNewPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikisNewPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis(.:format)
 * @param {string} projectFullPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikisPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikisPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);
  const _namespaceProjectWikisPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikisPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikisPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/-/confluence(.:format)
 * @param {string} projectFullPath
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikisConfluencePath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikisConfluencePath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"confluence"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikisConfluencePath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"format":{}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"confluence"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikisConfluencePath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikisConfluencePath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/*id/edit
 * @param {string} projectFullPath
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikiEditPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikiEditPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"edit"]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikiEditPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"edit"]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikiEditPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikiEditPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/*id/history
 * @param {string} projectFullPath
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikiHistoryPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikiHistoryPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"history"]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikiHistoryPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"history"]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikiHistoryPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikiHistoryPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/*id/diff
 * @param {string} projectFullPath
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikiDiffPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikiDiffPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"diff"]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikiDiffPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"diff"]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikiDiffPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikiDiffPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/*id/raw
 * @param {string} projectFullPath
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikiRawPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikiRawPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"raw"]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikiRawPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"raw"]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikiRawPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikiRawPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/*id/preview_markdown
 * @param {string} projectFullPath
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikiPreviewMarkdownPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikiPreviewMarkdownPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"preview_markdown"]]]]]]]]]]]]]]]]);
  const _namespaceProjectWikiPreviewMarkdownPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[2,[5,[3,"id"]],[2,[7,"/"],[6,"preview_markdown"]]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikiPreviewMarkdownPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikiPreviewMarkdownPath(namespacePath, projectPath, ...args);
};

/**
 * Generates rails route to
 * /:project_full_path/-/wikis/*id
 * @param {string} projectFullPath
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const projectWikiPath = /*#__PURE__*/ (projectFullPath, ...args) => {
  const _organizationNamespaceProjectWikiPath = /*#__PURE__*/ __jsr.r({"organization_path":{"r":true},"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[6,"o"],[2,[7,"/"],[2,[3,"organization_path"],[2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[5,[3,"id"]]]]]]]]]]]]]]]);
  const _namespaceProjectWikiPath = /*#__PURE__*/ __jsr.r({"namespace_id":{"r":true},"project_id":{"r":true},"id":{"r":true}}, [2,[7,"/"],[2,[5,[3,"namespace_id"]],[2,[7,"/"],[2,[3,"project_id"],[2,[7,"/"],[2,[6,"-"],[2,[7,"/"],[2,[6,"wikis"],[2,[7,"/"],[5,[3,"id"]]]]]]]]]]]);

  const { namespacePath, projectPath } = splitProjectFullPath(projectFullPath);

  if (hasOrganizationScopedPaths()) {
    return _organizationNamespaceProjectWikiPath(gon.current_organization.path, namespacePath, projectPath, ...args);
  }

  return _namespaceProjectWikiPath(namespacePath, projectPath, ...args);
};

