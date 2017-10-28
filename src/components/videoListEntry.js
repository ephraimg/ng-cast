angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      item: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
