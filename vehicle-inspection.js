'use strict';

var angular = require('angular');
var _ = require('lodash');

var ngModule = angular.module('wfm.vehicle-inspection', ['wfm.core.mediator']);

require('./lib');

ngModule.directive('vehicleInspection', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-inspection.tpl.html')
  , scope: {
      vehicleInspection: '=value'
    }
  };
})

ngModule.directive('vehicleInspectionPortalView', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-incpection-portal-view.tpl.html')
  , scope: {
      vehicleInspection: '=value'
    }
  };
})

ngModule.directive('vehicleInspectionForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-inspection-form.tpl.html')
  , scope: {
    }
  , controller: function() {
    var self = this;
    self.model = {};
    self.done = function() {
      mediator.publish('wfm:vehicle-inspection:done', self.model);
    }
  }
  , controllerAs: 'ctrl'
  };
})

module.exports = 'wfm.vehicle-inspection';
