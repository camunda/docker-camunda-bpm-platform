'use strict';


/**
 * Queries for event subscriptions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Event Subscriptions count](https://docs.camunda.org/manual/7.14/reference/rest/event-subscription/get-query-count/) method.
 *
 * eventSubscriptionId String Only select subscription with the given id. (optional)
 * eventName String Only select subscriptions for events with the given name. (optional)
 * eventType String Only select subscriptions for events with the given type. Valid values: `message`, `signal`, `compensate` and `conditional`. (optional)
 * executionId String Only select subscriptions that belong to an execution with the given id. (optional)
 * processInstanceId String Only select subscriptions that belong to a process instance with the given id. (optional)
 * activityId String Only select subscriptions that belong to an activity with the given id. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only select subscriptions which have no tenant id. Value may only be `true`, as `false` is the default behavior. (optional)
 * includeEventSubscriptionsWithoutTenantId Boolean Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be `true`, as `false` is the default behavior. (optional)
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.getEventSubscriptions = function(eventSubscriptionId,eventName,eventType,executionId,processInstanceId,activityId,tenantIdIn,withoutTenantId,includeEventSubscriptionsWithoutTenantId,sortBy,sortOrder,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "executionId" : "executionId",
  "processInstanceId" : "processInstanceId",
  "activityId" : "activityId",
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "tenantId" : "tenantId",
  "eventName" : "eventName",
  "id" : "id",
  "eventType" : "eventType"
}, {
  "executionId" : "executionId",
  "processInstanceId" : "processInstanceId",
  "activityId" : "activityId",
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "tenantId" : "tenantId",
  "eventName" : "eventName",
  "id" : "id",
  "eventType" : "eventType"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Queries for the number of event subscriptions that fulfill given parameters. Takes the same parameters as the [Get Event Subscriptions](https://docs.camunda.org/manual/7.14/reference/rest/event-subscription/get-query/) method.
 *
 * eventSubscriptionId String Only select subscription with the given id. (optional)
 * eventName String Only select subscriptions for events with the given name. (optional)
 * eventType String Only select subscriptions for events with the given type. Valid values: `message`, `signal`, `compensate` and `conditional`. (optional)
 * executionId String Only select subscriptions that belong to an execution with the given id. (optional)
 * processInstanceId String Only select subscriptions that belong to a process instance with the given id. (optional)
 * activityId String Only select subscriptions that belong to an activity with the given id. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only select subscriptions which have no tenant id. Value may only be `true`, as `false` is the default behavior. (optional)
 * includeEventSubscriptionsWithoutTenantId Boolean Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be `true`, as `false` is the default behavior. (optional)
 * returns CountResultDto
 **/
exports.getEventSubscriptionsCount = function(eventSubscriptionId,eventName,eventType,executionId,processInstanceId,activityId,tenantIdIn,withoutTenantId,includeEventSubscriptionsWithoutTenantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

