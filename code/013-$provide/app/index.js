var myApp = angular.module('myApp',[],function($provide){
	
	//自定义服务
	$provide.provider('CustomService',function(){
		this.$get = function(){
			return {
				message : 'This is return message'
			}
		}
	})
});

myApp.controller('firstCtrl',function($scope,CustomService){
	$scope.name= "zhangyan";
	console.log(CustomService);
});
