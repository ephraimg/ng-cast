angular.module('video-player')
  .component('videoDetails', {
    bindings: {
      video: '<',
      details: '<'
    },
    controller: function(youTube, $rootScope) {
      // this.details = '';
      // this.getDetails = function(videoId) {
      //   youTube.detailSearch(videoId, (results) => {
      //     this.details = results;
      //     console.log(this.details);
      //   });
      // };
    },
    templateUrl: 'src/templates/videoDetails.html'    
  });