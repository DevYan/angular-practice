var myApp = angular.module('myApp',[])

.factory('Data',function(){
	return {
		message : '共享的数据'
	}
})

.controller('firstCtrl',function($scope,Data){

	$scope.data = Data;

	$scope.today = new Date();
})
