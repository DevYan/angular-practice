var myApp = angular.module('myApp',[])

.controller('firstCtrl',['$scope',function($scope){
	$scope.status = false;

	$scope.changeStatus = function(event){
		$scope.status = !$scope.status;
		console.log(event.target);
		//angular 将元素转换为jQuery元素
		angular.element(event.target).html('hahaha'+$scope.status);
	}

	$scope.defaultStyle = {
		color:'red',
		'margin-top':'50px'
	}

	$scope.src = 'http://pic4.zhimg.com/6b3eb1267ab769da7625ab12fb335923_r.jpg';
}])