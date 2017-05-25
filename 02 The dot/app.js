angular.module('app',[])
.controller('ctrl1',function($scope){
    console.log($scope.ngModel)
})

.controller('ctrl2',function($scope){
    console.log($scope.message)
})

.controller('ctrl3',function(){
    
})

.controller('ctrl4',function(){
    
})

.controller('ctrl5',function(){
    
})

.controller('ctrl6',function(){
    
})

//Angular.js uses scope inheriting to allow a child scope (such as a child controller) to see the properties of the parent scope. So in ctrl1 and ctrl2 if i write something onparent level then child will be updated.However, if you edit the child scope, the connection to the parent is now broken, and the two no longer sync up. The reason this happens is because the child scope uses prototypical inheritance to look up the value, so as long as it never gets set on the child, then it will defer to the parent scope. But, once it's set, it no longer looks up the parent.

//http://jimhoskins.com/2012/12/14/nested-scopes-in-angularjs.html for better explanation.
