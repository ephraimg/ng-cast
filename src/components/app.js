angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
      this.onClick = (item) => {
        console.log('clicked: ', item);
      };
    },
    templateUrl: 'src/templates/app.html'
  });
