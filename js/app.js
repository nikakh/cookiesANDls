var app = angular.module('myApp',['ngCookies','ngStorage']);
app.controller('todoList', function($scope, $cookies, $localStorage){
	var myCookie = $cookies.get('task');
	var parse = JSON.parse($cookies.get('task') || 'null');
	var lsParse = JSON.parse(localStorage.getItem('task') || 'null');


 
 	if (!lsParse){

	if (!parse){
		$scope.todos = [];
	} else {
		$scope.todos = JSON.parse(myCookie);
	}
 	} else{
 		$scope.todos = JSON.parse(localStorage.getItem('task'));
 	}


	$scope.totalToDos = function(){
		return $scope.todos.length;
	}

	 $scope.addToDo = function (val) {
	    $scope.todos.push({text:$scope.newToDo, done:false});
	    $cookies.put('task', JSON.stringify($scope.todos));
	    $scope.newToDo = '';
	    
	  }

	  $scope.addToDoLS = function(val){
	  	$scope.todos.push({text:$scope.newToDo, done:false});
	  	localStorage.setItem('task',JSON.stringify($scope.todos));
	  	$scope.newToDo = '';
	  }

});


	


	
	


