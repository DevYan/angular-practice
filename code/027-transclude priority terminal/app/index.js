var myApp = angular.module('myApp',[])

.directive('customTags',function(){
	return {
		restrict : 'ECAM',
		template : '<div>新数据 <span ng-transclude></span></div>',
		replace:true,
		transclude:true
	}
})

.controller('firstCtrl',["$scope",function($scope){
	$scope.name = "zhangyan";
}])