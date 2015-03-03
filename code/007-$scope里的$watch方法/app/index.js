
var firstCtrl = function($scope){
	$scope.name = "zhangyan";

	$scope.count = 0;

	$scope.$watch('name',function(newVal,oldVal){
		++$scope.count;

		if ($scope.count > 10) {
			$scope.name = "已经大于10";
		};
	})
}
