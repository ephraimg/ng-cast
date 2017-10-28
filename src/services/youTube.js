angular.module('video-player')
  .service('youTube', function($http) {
    
    this.searchYouTube = function(query) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: 'kimchi',
          maxResults: 5,
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true 
        }
      }).then(function successCallback(response) {
        console.log('success');
      }, function errorCallback(response) {
        console.error();
      });   
    }; // end searchYouTube
    
  });
