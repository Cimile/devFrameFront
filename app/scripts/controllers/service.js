'use strict';

var host = 'http://localhost:3000';

angular
    .module('taskAppService', ['angularModalService', 'angularFileUpload'])

.factory('Project', ['$http', '$q', '$resource',
        function($http, $q, $resource) {
            return $resource(
                host + '/project/:id', { id: '@id' }, {
                    all: { method: 'get', isArray: true },
                    get: { method: 'get' },
                    update: { method: 'put' },
                    add: { method: 'post' },
                    delete: { method: 'delete' }
                }
            );
        }
    ])
    .factory('Task', ['$http', '$resource',
        function($http, $resource) {
            return $resource(
                host + '/task/:id', { id: '@id' }, {
                    all: { method: 'get', isArray: true },
                    update: { method: 'put' },
                    add: { method: 'post' },
                    delete: { method: 'delete' }
                }
            );
        }
    ]).factory('User', ['$http', '$resource',
        function($http, $resource) {
            return $resource(
                host + '/user/:id', { id: '@id' }, {
                    all: { method: 'get', isArray: true },
                    update: { method: 'put' },
                    add: { method: 'post' },
                    delete: { method: 'delete' }
                }
            );
        }
    ]).factory('Manager', ['$http', '$resource',
        function($http, $resource) {
            return $resource(
                host + '/manager/:id', { id: '@id' }, {
                    all: { method: 'get', isArray: true },
                    update: { method: 'put' },
                    add: { method: 'post' },
                    delete: { method: 'delete' }
                }
            );
        }
    ]).factory('Feedback', ['$http', '$resource',
        function($http, $resource) {
            return $resource(
                host + '/feedback/:id', { id: '@id' }, {
                    all: { method: 'get', isArray: true },
                    update: { method: 'put' },
                    add: { method: 'post' },
                    delete: { method: 'delete' }
                }
            );
        }
    ]);
