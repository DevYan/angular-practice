var myApp = angular.module('myApp',[],['$compileProvider',function($compileProvider){
	$compileProvider.directive('customTags',function(){
		return {
			restrict : 'ECAM',
			template:'<div>custom-tags-html</div>',
			replace:true,
			compile:function(){
				console.log(1); 
			}
		}
	})
}])

// .directive('')