'use strict';

var utils = require('../utils/writer.js');
var Deployment = require('../service/DeploymentService');

module.exports.createDeployment = function createDeployment (req, res, next) {
  Deployment.createDeployment()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDeployment = function deleteDeployment (req, res, next, id, cascade, skipCustomListeners, skipIoMappings) {
  Deployment.deleteDeployment(id, cascade, skipCustomListeners, skipIoMappings)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeployment = function getDeployment (req, res, next, id) {
  Deployment.getDeployment(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeploymentResource = function getDeploymentResource (req, res, next, id, resourceId) {
  Deployment.getDeploymentResource(id, resourceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeploymentResourceData = function getDeploymentResourceData (req, res, next, id, resourceId) {
  Deployment.getDeploymentResourceData(id, resourceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeploymentResources = function getDeploymentResources (req, res, next, id) {
  Deployment.getDeploymentResources(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeployments = function getDeployments (req, res, next, id, name, nameLike, source, withoutSource, tenantIdIn, withoutTenantId, includeDeploymentsWithoutTenantId, after, before, sortBy, sortOrder, firstResult, maxResults) {
  Deployment.getDeployments(id, name, nameLike, source, withoutSource, tenantIdIn, withoutTenantId, includeDeploymentsWithoutTenantId, after, before, sortBy, sortOrder, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeploymentsCount = function getDeploymentsCount (req, res, next, id, name, nameLike, source, withoutSource, tenantIdIn, withoutTenantId, includeDeploymentsWithoutTenantId, after, before) {
  Deployment.getDeploymentsCount(id, name, nameLike, source, withoutSource, tenantIdIn, withoutTenantId, includeDeploymentsWithoutTenantId, after, before)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.redeploy = function redeploy (req, res, next, body, id) {
  Deployment.redeploy(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
