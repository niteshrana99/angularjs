// We are going to see basic behaviours in angularjs directive through link function.
var myApp=angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
    
})

myApp.directive('enter',function(){
    return{
        link:function(scope,ele,attrs){
            ele.bind('mouseover',function(){
//                ele.addClass("panel");
                //the other way to add panel class is
                ele.addClass(attrs.enter);
            })
        }
    }
})

myApp.directive('exit',function(){
    return{
        link:function(scope,ele,attrs){
            ele.bind('mouseleave',function(){
//                ele.addClass("panel");
                //the other way to add panel class is
                console.log(attrs); // we see attrs object is common for all the directives. So it can be used to pass any information,
                ele.removeClass(attrs.enter);
            })
        }
    }
})


