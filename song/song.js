(function() {
	'use strict';

	angular.module('gmusic').component('song', {
		templateUrl: 'song/song.html',
		bindings: {
			song: '<', // one-way data binding (lies!!!!!),
			msg: '=',
			removeSong: '='
		},
		controller: function() {

		}
	});

}());