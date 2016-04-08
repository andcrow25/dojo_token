'use strict';

/**
 * Módulo principal do app do site fábrica de programador
 * @type {*|{AttachModuleNameTransformer, createModuleEvaluationStatement}}
 */
var FDPapp = angular.module('fabricaApp', []);

FDPapp.controller('AppController', [ '$q', '$http', '$rootScope', '$scope',

function  ($q, $http, $rootScope,$scope) {

    $scope.listar= function(){
        $http.get("http://localhost:8080/dojo_filter/cliente/listar").then(

            function(response){

                window.alert(response.data);
                return $q;
            },

            function (errResponse){
                    window.alert("Falhou");
            }
        );
    }

    if(localStorage.getItem('usuario') != undefined){
        $rootScope.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
        $rootScope.usuario = {};
    }

}]);



FDPapp.run(function($rootScope){
    $rootScope.usuario = {};
});

FDPapp.factory('interceptor', ['$q', '$rootScope', function($q, $rootScope){

    var interceptor = {
        'request': function(config) {
            if($rootScope.token != undefined){
                config.headers['token'] = JSON.parse(localStorage.getItem('token')).token;
            }
            return config;
        },

        'response': function(response) {
            if(response.status == 401){
                localStorage.setItem('token', undefined);
                location.path('/login');
            }
            else if(response.status == 200){
                console.log(response.headers('token'));
                localStorage.setItem('token', response.headers('token'));
            }
            return response;
        }
    };

    return interceptor;
}]);

FDPapp.config(['$httpProvider', function($httpProvider) {
    // $httpProvider.default.withCredentials = true;
    $httpProvider.interceptors.push('interceptor');
}]);


