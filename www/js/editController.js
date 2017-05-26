app.controller('editController', function($scope, $state, NoteFactory) {

	$scope.noteId = $state.params.id;

	$scope.note = angular.copy(NoteFactory.get($state.params.id))

	$scope.save = function() {
		NoteFactory.update($scope.note);
		$state.go('list')
	};	
});