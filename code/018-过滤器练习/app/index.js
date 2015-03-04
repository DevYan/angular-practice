angular.module('product',[])

.factory('productData',function(){
	return [
			{
				id:3333,
				name : 'iphone',
				price : '3300'
			},
			{
				id:1578,
				name : 'ipad',
				price : '2448'
			},
			{
				id:6666,
				name : 'mac',
				price : '8200'
			},
			{
				id:8888,
				name : 'ipad air',
				price : '3340'
			}
		]
})

.controller('productCtrl',function($scope,productData,$filter){

	$scope.productData = productData;

	$scope.orderType = 'id';

	$scope.order = '-';

	$scope.changeOrder = function(type){
		$scope.orderType = type;

		if ($scope.order==='') {
			$scope.order = '-';
		}else{
			$scope.order = '';
		}
	}
})
