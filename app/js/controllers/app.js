/**
 * Created by Administrator on 2016/11/29.
 */

define(['angular'],function (angular) {
    //定义模块名greenbabyApp的时候，同时指定它依赖于其他模块[]
    var app = angular.module('greenbabyApp', ['ngRoute','ngSanitize','ajaxLoading']);
    return app;
});

