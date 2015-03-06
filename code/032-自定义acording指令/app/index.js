var myApp = angular.module('myApp',[])
//数据
.factory('Data',function(){
	return [
		{
			title:'no1',
			content:'no1-content'
		},
		{
			title:'no2',
			content:'no2-content'
		},
		{
			title:'no3',
			content:'no3-content'
		}
	];
})
//控制器
.controller('firstCtrl',["$scope","Data",function($scope,Data){
	$scope.data = Data;
}])

.directive('zhyanGroup',function(){
	return {
		restrict : 'E',
		template : '<div class="panel-group" ng-transclude></div>',
		replace:true,
		transclude:true
	}
})

.directive('zhyanCollapse',function(){
	return {
		restrict : 'E',
		templateUrl : 'app/coll.html',
		replace:true,
        scope:{
            heading:'@'
        },
        transclude:true
	}
})

