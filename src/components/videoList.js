angular.module('video-player')
  .component('videoList', {
    bindings: {
      onClick: '<',
      videos: '<',
    },
    controller: function() {
    },
    templateUrl: 'src/templates/videoList.html'
  });
