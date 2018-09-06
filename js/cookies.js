var app = angular.module('myApp',['ngCookies','ngStorage']);
app.controller('todoList', function($scope, $cookies, $localStorage){
	var myCookie = $cookies.get('task');
	var parse = JSON.parse($cookies.get('task') || 'null');

	if (!parse){
		$scope.todos = [
		{text:'first item', done:false},
		{text:'second.item', done:false}
		];
	} else {
		$scope.todos = JSON.parse(myCookie);
	}

	$scope.totalToDos = function(){
		return $scope.todos.length;
	}

	 $scope.addToDo = function (val) {
	    $scope.todos.push({text:$scope.newToDo, done:false});
	    $cookies.put('task', JSON.stringify($scope.todos));
	    $scope.newToDo = '';
	    
	  }

});
	
		
	

	



    