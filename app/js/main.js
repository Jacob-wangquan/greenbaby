
//程序入口文件,遵循AMD规范
require.config({
    baseUrl:"js/",
    paths:{
        'jquery':'libs/jquery203',
        'angular' : 'libs/angular.min',
        'angular-route' : 'libs/angular-route.min',
        'angular-sanitize' : "libs/angular-sanitize.min",

        'app':'controllers/app',
        'homeCtrl':'controllers/homeCtrl',

        'route' : 'routes/appRoute'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route':{
            deps:["angular"],
            exports:'angular-route'
        },
        'angular-sanitize': {
            deps: ['angular'],
            exports:'angular-sanitize'
        }
    }
});

require(['jquery','angular','angular-route','angular-sanitize','app','homeCtrl','route'],function ($,angular) {
    $(function () {
        angular.bootstrap(document,['greenbabyApp']);
    });
});
