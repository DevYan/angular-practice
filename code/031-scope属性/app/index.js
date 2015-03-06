var myApp = angular.module('myApp',[])

.directive('bookList',function(){
	return {
		restrict : 'ECAM',
		controller:function($scope){
			//&books
			//$scope.books = $scope.a();
			
			//=books
			// $scope.books = $scope.b;
			// $scope.b.push({name:'nodejs'});

			console.log($scope.c);
			$scope.title = $scope.c;
		},
		//scope:false,
		//false表示共享的指令，true会自己创建一个作用域，可继承

		//scope为对象的时候也可以创建一个独立的作用域
		//但是不能继承
		scope:{
			//将父元素books封装成一个a函数
			//a:'&books'

			//双向绑定
			//b:'=parentBooks'

			c:'@parentTitle'
		},
		controllerAs:'bookListCtrl',
		template : '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace:true
	}
})

.controller('firstCtrl',["$scope",function($scope){
	$scope.books = [
		{
			name:'php'
		},
		{
			name:'javascript'
		},
		{
			name:'iOS'
		}
	];

	$scope.title = "zhangyan";
}])