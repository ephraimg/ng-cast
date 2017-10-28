angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
      this.video = exampleVideoData[0];
      this.onClick = (video) => {
        //console.log('clicked: ', video);
        this.video = video;
      };
    },
    templateUrl: 'src/templates/app.html'
  });
