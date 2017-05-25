var myApp=angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
    
})

myApp.directive('superman',function(){
    return {
        restrict:'E',
        template:'<p>My name is nitesh Rana</p>'
    }
})

// So this is how we make our custom directive.
// restrict mode specifies the mode in which directive has to be used. By default it is A. So if we dont put it. 