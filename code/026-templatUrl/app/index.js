var myApp = angular.module('myApp',[])

.directive('customTags',function(){
	return {
		restrict : 'ECAM',
		templateUrl:'tmp/other.html',
		replace:true
	}
})

.directive('cusTag2',function(){
	return {
		restrict : 'ECAM',
		templateUrl:'cusTag2',
		replace:true
	}
})

.controller('firstCtrl',["$scope",function($scope){
	$scope.name = "zhangyan";
}])