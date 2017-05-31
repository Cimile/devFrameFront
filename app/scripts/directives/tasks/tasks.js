'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('tasks', function() {
        return {
            templateUrl: 'scripts/directives/tasks/tasks.html',
            restrict: 'E',
            replace: true,
            controller: 'taskCtrl'
        }
    });
