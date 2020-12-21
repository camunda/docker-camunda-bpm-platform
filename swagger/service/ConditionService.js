'use strict';


/**
 * Triggers evaluation of conditions for conditional start event(s).  Internally this maps to the engines condition evaluation builder method ConditionEvaluationBuilder#evaluateStartConditions().  For more information see the [Conditional Start Events](https://docs.camunda.org/manual/7.14/reference/bpmn20/events/conditional-events/#conditional-start-event) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).
 *
 * body EvaluationConditionDto  (optional)
 * returns List
 **/
exports.evaluateCondition = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

