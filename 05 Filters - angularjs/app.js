angular.module('myApp',[])
.service('Data',function(){
    return {message:'I am data from a service'}
})
.filter('reverseData',function(Data){ //also inject a service into filter
    return function(text){
        console.log(Data)
        return text.split('').reverse().join('') + ' -- '+ Data.message;
    }
})
.controller('firstCtrl',function($scope,Data){
    $scope.data=Data;
})

.controller('secondCtrl',function($scope,Data){
    $scope.data=Data;
})