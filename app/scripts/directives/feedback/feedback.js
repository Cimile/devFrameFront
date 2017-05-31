'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('feedback', function() {
        return {
            templateUrl: 'scripts/directives/feedback/feedback.html',
            restrict: 'E',
            replace: true,
            controller: 'feedbackCtrl'
        }
    });
