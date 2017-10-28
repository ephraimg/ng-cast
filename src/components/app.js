angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.searchResults = (results) => {
        this.videos = results.data.items;
        this.currentVideo = results.data.items[0];
      };
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
    },
    templateUrl: 'src/templates/app.html'
  });
