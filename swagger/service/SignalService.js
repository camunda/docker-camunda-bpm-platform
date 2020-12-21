'use strict';


/**
 * A signal is an event of global scope (broadcast semantics) and is delivered to all active handlers. Internally this maps to the engine's signal event received builder method `RuntimeService#createSignalEvent()`. For more information about the signal behavior, see the [Signal Events](https://docs.camunda.org/manual/7.14/reference/bpmn20/events/signal-events/) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).
 *
 * body SignalDto  (optional)
 * no response value expected for this operation
 **/
exports.throwSignal = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

