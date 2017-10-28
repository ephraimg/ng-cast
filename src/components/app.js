var fakeVideo = {
  id: { videoId: "" },
  snippet: { title: "", description: "", thumbnails: 
    { default: { url: "", width: 120, height: 90 } }
  }
};

var fakeVideos = Array(5).fill(fakeVideo);

// console.dir(fakeVideos);

angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = fakeVideos;
      this.currentVideo = fakeVideo;
      this.searchResults = (results) => {
        console.log(results.data.items);
        this.videos = results.data.items;
        this.currentVideo = results.data.items[0];
      };
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.$onInit = () => {
        console.log('App initialized!');
        youTube.search('hawaii', this.searchResults.bind(this));
      };
    },
    templateUrl: 'src/templates/app.html'
  });


