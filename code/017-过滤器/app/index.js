var myApp = angular.module('myApp',[])

.factory('Data',function(){
	return {
		message : 'Hello World',
		city:[
			{
				name : '上海',
				py : 'ShangHai'
			},
			{
				name : '北京',
				py : 'BeiJing'
			},
			{
				name : '忻州',
				py : 'XinZhou'
			}
		]
	}
})

.controller('firstCtrl',function($scope,Data,$filter){

	$scope.data = Data;

	//过滤器
	var number = $filter('number')(3000);


	var jsonString  = $filter('json')($scope.data);
	console.log(jsonString);

	$scope.checkName = function(obj){
		if (obj.py.indexOf('h') === -1)
			return false;
		return true;
	}
})
