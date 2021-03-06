var myApp = angular.module('myApp',[])

.directive('bookList',function(){
	return {
		restrict : 'ECAM',
		controller:function($scope){
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

			this.addBook = function(){
				$scope.$apply(function(){
					$scope.books.push({
						name : 'angularJs'
					})
				})
			}
		},
		controllerAs:'bookListCtrl',
		template : '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace:true
	}
})

.directive('bookAdd',function(){
	return {
		restrict : 'ECAM',
		require:'^bookList',
		template : '<button type="button">添加</button>',
		replace:true,
		link:function(scope,iElement,iAttrs,bookListCtrl){
			iElement.on('click',bookListCtrl.addBook)
		}
	}
})

.controller('firstCtrl',["$scope",function($scope){
	
}])