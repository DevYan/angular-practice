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
				console.log('test');
			}
		},
		controllerAs:'bookListCtrl',
		template : '<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
		replace:true,
		link:function(scope,iElement,iAttrs,bookListCtrl){
			iElement.on('click',bookListCtrl.addBook);
		}
	}
})

.controller('firstCtrl',["$scope",function($scope){
	
}])