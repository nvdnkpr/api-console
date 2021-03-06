'use strict';

angular.module('ramlConsoleApp')
    .directive('markdown', function (showdown) {
        return {
            restrict: 'C',
            link: function ($scope, element, attrs) {
                $scope.$watch(attrs.ngModel, function (value) {
                    if (typeof value !== 'undefined' && value !== null) {
                        element.html(showdown.makeHtml(value));
                    }
                });
            }
        };
    });