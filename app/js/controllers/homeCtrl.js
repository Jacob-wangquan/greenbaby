/**
 * Created by Administrator on 2016/11/29.
 */

define(['app'],function (app) {
    return app.controller('homeCtrl',['$scope','$rootScope',function ($scope,$rootScope) {
        $rootScope.headTitle = '首页-全部宝贝';
    }]
    );
});