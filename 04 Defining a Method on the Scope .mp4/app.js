angular.module('myApp',[])
.service('Data',function(){
    return {message:'I am data from a service'}
})
.controller('firstCtrl',function($scope,Data){
    $scope.data=Data;
})

.controller('secondCtrl',function($scope,Data){
    $scope.reverseData=function(){
        $scope.data=Data.message;
        return $scope.data.split("").reverse().join("");
    }
})