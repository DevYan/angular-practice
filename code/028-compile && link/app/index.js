var i = 0;
var myApp = angular.module('myApp',[])

.directive('customTags',function(){
	return {
		restrict : 'ECAM',
		template : '<div>{{user.name}}</div>',
		replace:true,
		compile:function(tElement,tAttrs,transclude){
			// console.log(tElement);
			// console.log(tAttrs);
			// console.log(transclude);
			tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'))

			console.log('customTags compile');

			return {
				//表示在编译阶段之后，指令链接到子元素之前进行的
				pre:function preLink(scope,iElement,iAttrs,controller){
					iElement.on('click',function(){
						scope.$apply(function(){
							scope.user.name = "click after";
							scope.user.count = ++i;
							//进行一次脏检查
						})
					})
					console.log('customTags preLink');
				},
				//表示所有子元素指令都连接之后才运行
				post:function postLink(scope,iElement,iAttrs,controller){
					console.log('customTags postLink');
				}
			}
		}
	}
})

.directive('customTags2',function(){
	return {
		restrict : 'ECAM',
		replace:true,
		compile:function(){
			console.log('customTags2 compile');

			return {
				//表示在编译阶段之后，指令链接到子元素之前进行的
				pre:function preLink(scope,iElement,iAttrs,controller){
					console.log('customTags2 preLink');
				},
				//表示所有子元素指令都连接之后才运行
				post:function postLink(scope,iElement,iAttrs,controller){
					console.log('customTags2 postLink');
				}
			}
		}
	}
})

.controller('firstCtrl',["$scope",function($scope){
	$scope.users = [
		{
			id:10,
			name:'zhangyan'
		},
		{
			id:20,
			name:'lisi'
		}
	];
}])