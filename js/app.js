var app = angular.module('myApp',['ngCookies','ngStorage']);
app.controller('todoList', function($scope, $cookies, $localStorage, $window){
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

	  $scope.contentEdit = function(msg){ 
		 
		  for(i=0; i<$scope.todos.length; i++){
			  if($scope.todos[i].text == msg){
				  $scope.todos[i].text = event.target.innerText;
			  }
		  }	;	  
		  $cookies.put('task', JSON.stringify($scope.todos));
		  
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
		console.log($scope.todos);
	  };


	  $scope.enterAgain = function(msg) {
		  if(event.which == 13 && msg != ""){
			  $scope.contentEdit(msg);
			  console.log(11);
		  }
	  }
	  $scope.changed = function(){
		$cookies.put('task', JSON.stringify($scope.todos));
		localStorage.setItem('task',JSON.stringify($scope.todos));

	  }

		
	  $scope.deleteSelected = function(j){

		$scope.todos.splice(j,1);
		localStorage.removeItem(j);
		
		$cookies.put('task', JSON.stringify($scope.todos));
		localStorage.setItem('task',JSON.stringify($scope.todos))
	  }	  
		  
	  
});


	


	
	


