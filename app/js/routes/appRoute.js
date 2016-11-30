/**
 * Created by Administrator on 2016/11/29.
 * 路由
 */
define(['app'],function (app) {
    return app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'views/home.html',
                controller:'homeCtrl'
            })
            .otherwise({ redirectTo: '/' });
    }]);
});
