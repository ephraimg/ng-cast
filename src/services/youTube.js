angular.module('video-player')
  .service('youTube', function($http) {
  
    this.search = function(query, cb) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: query,
          maxResults: 5,
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true 
        }
      }).then(function successCallback(response) {
        // console.log('success');
        cb(response);
      }, function errorCallback(response) {
        console.error();
      });   
    }; // end searchYouTube

    this.detailSearch = function(videoId, cb) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          key: YOUTUBE_API_KEY,
          part: 'contentDetails',
          id: videoId
        }
      }).then(function successCallback(response) {
        console.log('details: ', response);
        cb(response);
      }, function errorCallback(response) {
        console.error();
      });   
    }; // end searchYouTube
    
  });
