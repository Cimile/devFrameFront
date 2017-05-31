angular.module('sbAdminApp')

.controller('AppCtrl', function($scope, $mdDialog, $interval) {

    $scope.gridOptions = {
        data: 'studentData',
        enablePinning: true,
        columnDefs: [
            { field: "id", width: 120, pinned: true },
            { field: "name", width: 120, pinned: true },
            { field: "age", width: 120 },
            { field: "subject", width: 120 },
            { field: "hobby", width: 120 }
        ]
    };
    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            // clickOutsideToClose: true,

            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };


    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();

        };


    }


});
