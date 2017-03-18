import angular from 'angular';

import * as uiRouter from 'angular-ui-router';

import '../style/app.css';

import { DefaultCtrl, DefaultState, DefaultServiceName, DefaultService } from './default';

let app = () => {
  return {
    template: require('./app.html'),
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])

  .config(($stateProvider) => {
    $stateProvider
      .state(DefaultState.name, DefaultState)
      ;
  })
  .run(($state) => {
    $state.go('default');
  })
  .service(DefaultServiceName, DefaultService)

  .controller(DefaultState.controller, DefaultCtrl)

  .directive('app', app)
  ;

export default MODULE_NAME;