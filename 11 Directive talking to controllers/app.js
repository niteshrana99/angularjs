// We are going to see basic behaviours in angularjs directive through link function.
var myApp=angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
    $scope.loadController=function(){
        alert('Entere')
    }
})

myApp.directive('enter',function(){
    return {
        link:function(scope,ele,attrs){
            ele.bind('mouseenter',function(){
//                scope.loadController(); //As we have access to scope we can write, but that's not the best way to do it as we are not sure that this 'scope' is working with this '$scope'.
                
                scope.$apply('loadController()'); //$apply is angular services, the string is parsed and found on scope and is called.
                //Another way to do this is by passing the string as attribute
                
                scope.$apply(attrs.enter);
                
            })
        }
    }
})




