var myApp = angular.module('myApp',[],function($provide){
	
	//自定义服务
	$provide.provider('CustomService',function(){
		this.$get = function(){
			return {
				message : 'This is return message'
			}
		}
	});

	//自定义工厂
	$provide.factory('CustomFactory',function(){
		return [1,2,3,4,5,6,7,8];
	});

	//自定义服务
	$provide.service('CustomService2',function(){
		return ['shanghai'];
	})
});

myApp.controller('firstCtrl',function($scope,CustomFactory,CustomService2){
	$scope.name= "zhangyan";
	console.log(CustomFactory);
	console.log(CustomService2);
});
