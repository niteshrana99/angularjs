var app=angular.module('app',['ui.router'])
.config(function($stateProvider){
    $stateProvider.state('index',{
        url:"",
        controller:'FirstCtrl as first',
        templateUrl:'templates/first.html'
    })
    $stateProvider.state('second',{
        url:"/second",
        controller:'SecondCtrl as second',
        templateUrl:'templates/second.html'
    })
})
.service('greeting',function(){
    var greeting=this;
    greeting.message='Nitesh';
//    return {'name':'rana'} Our service behaves as function constructor so everytime we invoke it it returns an object on this variable.But if we return an object in return itself it will return that object.
})
.controller('FirstCtrl',function($scope,greeting){
    console.log(greeting); // We see greeting is an object or function constructor and hence returns an instance
    var first=this;
    first.greet=greeting;
    
})

.controller('SecondCtrl',function($scope,greeting){
    var second=this;
    second.greet=greeting;
})