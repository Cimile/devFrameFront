'use strict';

angular.module('taskAppController', ['angularModalService', 'angularFileUpload', 'ngMaterial', 'ngMessages'])
    .controller('projectCtrl', function($scope, $rootScope, Project, $http, $state, $location, $stateParams, $mdDialog) {
        /*$scope.selected = [];
        $scope.gridOptions = {
            data: 'projectData',
            enablePinning: true,
            multiSelect: false,
            selectedItems: $scope.selected,
            columnDefs: [
                { field: "id", width: 120, pinned: true },
                { field: "projName", width: 120, enableCellEdit: true },
                { field: "projDesc", width: 200, enableCellEdit: true }
            ]
        };*/


        $scope.name = "";
        $scope.desc = "";
        $scope.clicked = "";
        $scope.id = "";
        $scope.username = $rootScope.username;
        if ($scope.username == null) {
            $scope.usershow = false;
        } else {
            $scope.usershow = true;
        }

        $scope.login = function() {
            window.location = "index.html#/dashboard/login";
        }

        $scope.exit = function() {
                $rootScope.username = null;
                $scope.username = $rootScope.username;
                $scope.usershow = false;
                alert("注销成功!");
            }
            /* console.log(projectData);
             */
        var p = Project.all({}).$promise;
        p.then(function(data) {
            $scope.projectData = data;
        });

        $scope.bool = $rootScope.boolean;

        /*$scope.add = function() {
            $scope.bool = false;

            p = Project.add({ projName: $scope.name, projDesc: $scope.desc }).$promise;

            p.then(function(data) {
                p = Project.all({}).$promise;
                p.then(function(data) {
                    $scope.projectData = data;
                })
            });
        }*/

        $scope.delete = function() {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                p = Project.delete({ id: $scope.id }).$promise;

                p.then(function(data) {
                    p = Project.all({}).$promise;
                    p.then(function(data) {
                        $scope.projectData = data;
                    })
                });
            }
        }

        /*$scope.modify = function() {
            p = Project.update({ id: $scope.id, projName: $scope.name, projDesc: $scope.desc }).$promise;

            $scope.bool = false;

            p.then(function(data) {
                p = Project.all({}).$promise;
                p.then(function(data) {
                    $scope.projectData = data;
                })
            });
        }*/

        $scope.showAdvanced = function(ev) {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                $mdDialog.show({
                    controller: ProjectController,
                    templateUrl: 'dialog1.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                }).then(function() {
                    p = Project.all({}).$promise;
                    p.then(function(data) {
                        $scope.projectData = data;
                    })
                }, function() {

                })
            }
        };

        $scope.showAdvancedTwo = function(ev) {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                $mdDialog.show({
                    controller: ProjectController,
                    templateUrl: 'dialog2.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                }).then(function() {
                    p = Project.all({}).$promise;
                    p.then(function(data) {
                        $scope.projectData = data;
                    })
                }, function() {

                })
            }
        };

        function ProjectController($scope, $mdDialog, $rootScope) {
            $scope.projId = $rootScope.id;
            $scope.projName = $rootScope.name;
            $scope.projDesc = $rootScope.desc;

            $scope.hide = function() {
                $mdDialog.hide();
                $(".md-dialog-backdrop").remove();
            };

            $scope.add = function() {
                $scope.hide();
                p = Project.add({ projName: $scope.name, projDesc: $scope.desc }).$promise;
            };

            $scope.modify = function() {
                $scope.hide();
                p = Project.update({ id: $scope.projId, projName: $scope.projName, projDesc: $scope.projDesc }).$promise;
            }

            $scope.cancel = function() {
                $scope.hide();
            }

        }

        $scope.show = function(index) {
            $scope.focus = index;
            $scope.clicked = $scope.projectData[index].id + "," + $scope.projectData[index].projName + "," + $scope.projectData[index].projDesc;
            $scope.id = $scope.projectData[index].id;
            $rootScope.id = $scope.projectData[index].id;
            $rootScope.name = $scope.projectData[index].projName;
            $rootScope.desc = $scope.projectData[index].projDesc;
        }

        $scope.check = function() {
            window.location = "index.html#/dashboard/task";
            //$location.path("app/index.html#/dashboard/task");
        }

        /*$scope.modifymodel = function() {
            $scope.bool = true;
            $scope.boolean = false;
        }*/

        /*$scope.addmodel = function() {
            $scope.bool = true;
            $scope.boolean = true;
        }*/
    }).controller('taskCtrl', function($scope, $rootScope, Task, $http, $state, $location, $stateParams, $mdDialog) {
        $scope.bool = $rootScope.boolean;
        var p = Task.all({}).$promise;
        p.then(function(data) {
            $scope.taskData = data;
        })
        $scope.username = $rootScope.username;
        if ($scope.username == null) {
            $scope.usershow = false;
        } else {
            $scope.usershow = true;
        }

        $scope.login = function() {
            window.location = "index.html#/dashboard/login";
        }

        $scope.exit = function() {
            $rootScope.username = null;
            $scope.username = $rootScope.username;
            $scope.usershow = false;
            alert("注销成功!");
        }

        $scope.show = function(index) {
            $scope.focus = index;
            $scope.clicked = $scope.taskData[index].id + "," + $scope.taskData[index].taskName + "," + $scope.taskData[index].taskDesc;
            $scope.id = $scope.taskData[index].id;
            $rootScope.id = $scope.taskData[index].id;
            $rootScope.name = $scope.taskData[index].taskName;
            $rootScope.desc = $scope.taskData[index].taskDesc;
            $scope.status = $scope.taskData[index].status;
            $scope.userid = $scope.taskData[index].userId;
        }

        $scope.delete = function() {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                p = Task.delete({ id: $scope.id }).$promise;

                p.then(function(data) {
                    p = Task.all({}).$promise;
                    p.then(function(data) {
                        $scope.taskData = data;
                    })
                });
            }
        }

        $scope.back = function() {
            window.location = "index.html#/dashboard/project";
            //$location.path("app/index.html#/dashboard/task");
        }

        $scope.accpet = function() {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                if ($scope.status == "已领取") {
                    alert("该任务已被领取!");
                } else {
                    $scope.status = "已领取";
                    $scope.userid = $rootScope.userid;
                    p = Task.update({ id: $scope.id, taskName: $rootScope.name, taskDesc: $rootScope.desc, status: $scope.status, userId: $scope.userid }).$promise;

                    p.then(function(data) {
                        p = Task.all({}).$promise;
                        p.then(function(data) {
                            $scope.taskData = data;
                        })
                    });


                    alert("领取成功");
                }
            }
        }

        $scope.abandon = function() {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                if ($scope.status == "待领取" || $scope.userid != $rootScope.userid) {
                    alert("该任务还未被领取或该任务是被其他用户领取!");
                } else {
                    $scope.status = "待领取";
                    p = Task.update({ id: $scope.id, taskName: $rootScope.name, taskDesc: $rootScope.desc, status: $scope.status }).$promise;

                    p.then(function(data) {
                        p = Task.all({}).$promise;
                        p.then(function(data) {
                            $scope.taskData = data;
                        })
                    });


                    alert("取消成功");
                }
            }
        }


        $scope.showAdvanced = function(ev) {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                $mdDialog.show({
                    controller: TaskController,
                    templateUrl: 'dialog1.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                }).then(function() {
                    p = Task.all({}).$promise;
                    p.then(function(data) {
                        $scope.taskData = data;
                    })
                }, function() {

                })
            }
        };

        $scope.showAdvancedTwo = function(ev) {
            if ($rootScope.userid == null || $rootScope.username == null) {
                alert("请先登录");
                window.location = "index.html#/dashboard/login";
            } else {
                $mdDialog.show({
                    controller: TaskController,
                    templateUrl: 'dialog2.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                }).then(function() {
                    p = Task.all({}).$promise;
                    p.then(function(data) {
                        $scope.taskData = data;
                    })
                }, function() {

                })
            }
        };

        function TaskController($scope, $mdDialog, $rootScope) {
            $scope.taskId = $rootScope.id;
            $scope.taskName = $rootScope.name;
            $scope.taskDesc = $rootScope.desc;

            $scope.hide = function() {
                $mdDialog.hide();
                $(".md-dialog-backdrop").remove();
            };

            $scope.add = function() {
                $scope.hide();
                p = Task.add({ taskName: $scope.name, taskDesc: $scope.desc }).$promise;
            };

            $scope.modify = function() {
                $scope.hide();
                p = Task.update({ id: $scope.taskId, taskName: $scope.taskName, taskDesc: $scope.taskDesc }).$promise;
            }

            $scope.cancel = function() {
                $scope.hide();
            }

        }


    }).controller('feedbackCtrl', function($scope, $rootScope, Feedback, $http, $state, $location, $stateParams, $mdDialog) {
        var p = Feedback.all({}).$promise;
        p.then(function(data) {
            $scope.feedbackData = data;
        });

    }).controller('loginCtrl', function($scope, $rootScope, $http, $state, $location, $stateParams, $mdDialog, User, Manager) {
        $scope.show = true;

        var p = User.all({}).$promise;
        p.then(function(data) {
            $scope.user = data;

        })

        var q = Manager.all({}).$promise;
        q.then(function(data) {
            $scope.manager = data;
        })

        $scope.login = function() {
            if ($scope.show == true) {
                angular.forEach($scope.user, function(data, index, array) {
                    if (data.username == $scope.username && data.userpass == $scope.password) {
                        alert("succes!");
                        window.location = "index.html#/dashboard/project";
                        $rootScope.userid = data.id;
                        $rootScope.username = data.username;
                        $rootScope.boolean = true;
                    }
                })
            } else {
                angular.forEach($scope.manager, function(data, index, array) {
                    if (data.name == $scope.username && data.password == $scope.password) {
                        alert("succes!");
                        window.location = "index.html#/dashboard/project";
                        $rootScope.userid = data.id;
                        $rootScope.username = data.name;
                        $rootScope.boolean = false;
                    }
                })
            }
        }

        $scope.switch = function() {
            $scope.show = !$scope.show;
        }
    });
