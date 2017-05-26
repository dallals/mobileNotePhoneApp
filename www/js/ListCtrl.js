
app.controller('ListCtrl', function($scope, NoteFactory) {

	$scope.reordering = false;
	$scope.notes = NoteFactory.list()

	$scope.remove = function(noteId) {
		NoteFactory.remove(noteId)
	}

	$scope.move = function(note, fromIndex, toIndex) {
		NoteFactory.move(note, fromIndex, toIndex)
	};

	$scope.toggleOrder = function() {
		$scope.reordering = !$scope.reordering
	};

})