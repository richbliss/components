(function() {
	'use strict';

	angular.module('gmusic').component('songList', {
		templateUrl: 'song-list/song-list.html',
		controller: function() {
			var model = this;
			model.msg = "song list"
			model.remove = function(id) {
				var songIndex = model.songs.findIndex(function(song) {
					return song.id === id;
				});
				
				model.songs.splice(songIndex, 1);
			};

			model.songs = [
				{
					id: 1,
					name: 'Man In The Mirror',
					artist: 'Michael Jackson'
				},
				{
					id: 2,
					name: 'Hurt',
					artist: 'Johnny Cash'
				}
			];
		},
		bindings: {
			title: '@',

		}
	});

}());

(function() {
	'use strict';

	angular.module('gmusic').directive('otherList', function() {
		return { // DDO: Directive Definition Object
			restrict: 'E',
			template: '<h1>{{vm.title}} - {{vm.foo}}</h1>',
			controllerAs: 'vm',
			controller: function() {
				var vm = this;
				vm.foo = 'bar';
			},
			bindToController: {
				title: '@',
			},
		};
	});

}());