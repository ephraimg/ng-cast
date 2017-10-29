var fakeVideo = {
  id: { videoId: '' },
  snippet: { title: '', description: '', thumbnails: 
    { default: { url: '', width: 120, height: 90 } }
  }
};

var fakeVideos = Array(5).fill(fakeVideo);

angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = fakeVideos;
      this.currentVideo = fakeVideo;
      this.details = '';
      this.searchResults = (results) => {
        this.videos = results.data.items;
        this.currentVideo = results.data.items[0];
        youTube.detailSearch(this.currentVideo.id.videoId, (results) => {
          this.details = results.data.items[0].contentDetails;
        });
      };
      this.selectVideo = (video) => {
        this.currentVideo = video;
        youTube.detailSearch(this.currentVideo.id.videoId, (results) => {
          this.details = results.data.items[0].contentDetails;
        });
      };
      this.$onInit = () => {
        youTube.search('hawaii', this.searchResults.bind(this));
      };
    },
    templateUrl: 'src/templates/app.html'
  });


