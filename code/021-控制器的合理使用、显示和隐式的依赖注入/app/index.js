var myApp = angular.module('myApp',[],function(){

})

// .factory('CustomServcie',function($window){
// 	console.log($window);
// })

// 与上等价
.factory('CustomServcie',['$window',function(a){
	console.log(a);
}])

//隐式的依赖注入
.controller('firstCtrl',function($scope,CustomServcie){

})
//显示的依赖注入
.controller('secondCtrl',['$scope','$filter',function(a,b){
	console.log(b('json')([1,2,3,4]));
}]);

function otherCtrl(a){
	console.log(a);
}

otherCtrl.$inject = ['$scope'];