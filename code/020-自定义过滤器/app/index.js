angular.module('myApp',[],function($filterProvider,$provide,$controllerProvider){

	$provide.service('Data',function(){
		return [
			{
				name:'zhangyan',
				age:25,
				city:'BeiJing'
			},
			{ 
				name:'Rose',
				age:20,
				city:'ShangHai'
			}
		]
	})

	$filterProvider.register('filterAge',function(){
		return function(obj){
			var newObj = [];

			angular.forEach(obj,function(o){
				if (o.age > 20) {
					newObj.push(o);
				};
			})

			return newObj;
		}
	});

	$controllerProvider.register('firstCtrl',function($scope,Data){
		$scope.data = Data;
	})
})

.filter('filterCity',function(){
	return function(obj){
		var newObj = [];

		angular.forEach(obj,function(o){
			if (o.city === 'ShangHai') {
				newObj.push(o);
			};
		})

		return newObj;
	}
})