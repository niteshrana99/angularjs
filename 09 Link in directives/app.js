// We are going to see basic behaviours in angularjs directive through link function.
var myApp=angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
    
})

myApp.directive('superman',function(){
    return {
        restrict:'A',
        template:'<p>I am stronger</p>',
        link:function(scope,ele){
            ele.bind('mouseover',function(){
                console.log('Entering the area');
            })
        }
    }
})

myApp.directive('exit',function(){ // here I want to show that we don't need to return object everytime, we can simply return a function if we know directive is Attribute by default and no template is required. 
    return function(scope,ele){
        ele.bind('mouseleave',function(){
            console.log('Out in a minute');
        });
    }
})

