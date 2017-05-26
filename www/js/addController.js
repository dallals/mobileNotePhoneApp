app.controller('addController', function($scope, $state, NoteFactory) {

	$scope.note = {
		id: new Date().getTime().toString(),
		title: '',
		body: ''
	};

	$scope.save = function() {
		NoteFactory.create($scope.note);
		$state.go('list')
	};	

})