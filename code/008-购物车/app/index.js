var cartCtrl = function($scope){

	$scope.cart = [
		{
			id:1000,
			name:'iphone5s',
			quantity:3,
			price:4300
		},
		{
			id:1234,
			name:'iphone5',
			quantity:30,
			price:3300
		},
		{
			id:5678,
			name:'mac',
			quantity:3,
			price:23000
		},
		{
			id:8888,
			name:'ipad',
			quantity:5,
			price:6900
		}
	];

	/*
	 * 计算购物总价
	 */
	$scope.totalPrice = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += item.quantity * item.price;
		});
		return total;
	}

	/*
	 * 计算总购买数
	 */
	$scope.totalQuantity = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += item.quantity;
		});
		return total;
	}

	/*
	 * 移除
	 */
	$scope.remove = function(id){
		var index = findIndex(id);

		if (index !== -1) {
			$scope.cart.splice(index,1);
		};
	}

	/*
	 * 找一个元素索引
	 */
	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.cart,function(item,key){
			if (item.id === id) {
				index = key;
				return;
			};
		});
		return index;
	}


	/*
	 * 增加购物数量
	 */
	$scope.add = function(id){
		var index = findIndex(id);

		if (index !== -1) {
			++$scope.cart[index].quantity;
		};
	}

	/*
	 * 减少购物数量
	 */
	$scope.reduce = function(id){
		var index = findIndex(id);

		if (index !== -1) {
			var item = $scope.cart[index];
			if (item.quantity >1) {
				--item.quantity;
			}else{
				var returnKey = confirm('删除该商品？');
				if (returnKey) {
					$scope.remove(id);
				};
			}
		};
	}


	$scope.$watch('cart',function(newVal,oldVal){
		angular.forEach(newVal,function(item,key){
			if (item.quantity < 1) {
				var returnKey = confirm('删除该商品？');
				if (returnKey) {
					$scope.remove(item.id);
				}else{
					item.quantity = oldVal[key].quantity;
				}
			};
		});
	},true);
}