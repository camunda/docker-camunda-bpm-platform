'use strict';


/**
 * Correlates a message to the process engine to either trigger a message start event or an intermediate message  catching event. Internally this maps to the engine's message correlation builder methods `MessageCorrelationBuilder#correlateWithResult()` and `MessageCorrelationBuilder#correlateAllWithResult()`. For more information about the correlation behavior, see the [Message Events](https://docs.camunda.org/manual/7.14/bpmn20/events/message-events/) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).
 *
 * body CorrelationMessageDto  (optional)
 * returns List
 **/
exports.deliverMessage = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "execution" : {
    "processInstanceId" : "processInstanceId",
    "ended" : true,
    "tenantId" : "tenantId",
    "id" : "id"
  },
  "variables" : {
    "key" : {
      "valueInfo" : "",
      "type" : "type",
      "value" : { }
    }
  },
  "processInstance" : "",
  "resultType" : "Execution"
}, {
  "execution" : {
    "processInstanceId" : "processInstanceId",
    "ended" : true,
    "tenantId" : "tenantId",
    "id" : "id"
  },
  "variables" : {
    "key" : {
      "valueInfo" : "",
      "type" : "type",
      "value" : { }
    }
  },
  "processInstance" : "",
  "resultType" : "Execution"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

