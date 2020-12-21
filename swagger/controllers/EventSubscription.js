'use strict';

var utils = require('../utils/writer.js');
var EventSubscription = require('../service/EventSubscriptionService');

module.exports.getEventSubscriptions = function getEventSubscriptions (req, res, next, eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, sortBy, sortOrder, firstResult, maxResults) {
  EventSubscription.getEventSubscriptions(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, sortBy, sortOrder, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventSubscriptionsCount = function getEventSubscriptionsCount (req, res, next, eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId) {
  EventSubscription.getEventSubscriptionsCount(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
