var myApp = angular.module('myApp',[])

.factory('Data',function(){
	return {
		message : '共享的数据'
	}
})

.controller('firstCtrl',function($scope,Data){
	$scope.data = {
		name : "zhangyan"
	}

	$scope.Data = Data;
})

.controller('secondCtrl',function($scope,Data){
	$scope.data = $scope.$$prevSibling.data;

	$scope.Data = Data; 
})

