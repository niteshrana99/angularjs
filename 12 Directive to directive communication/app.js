// We are going to see basic behaviours in angularjs directive through link function.
var myApp=angular.module('myApp',[]);

myApp.directive('superman',function(){
    
    return{
        restrict:'E',
        controller:function($scope){
            console.log(this);
            $scope.abilities=[];
//            this.addStrength=function(){
//                this.abilities.push('Strength');
//            }
            this.addspeed=function(){
                $scope.abilities.push('Speed');
            }
            this.addflight=function(){
                $scope.abilities.push('Flight');
            }
//            this.addspeed = $scope.addspeed;
//            this.addflight=$scope.addflight;
        },
        link:function(scope,element,attrs){
            element.bind('mouseenter',function(){
                console.log(scope.abilities);    
            })
        }
    }
})


////The $compile Service injects the this context of the controller as the fourth argument to the linking function. It does not inject the $scope object.

myApp.directive('speed',function(){
    return {
        require:'superman',
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addspeed();
        }
    }
})

myApp.directive('strength',function(){
    return {
        require:'superman',
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addStrength();
        }
    }
})

myApp.directive('flight',function(){
    return {
        require:'superman',
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addflight();
        }
    }
})




