angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<' // hack for tests
    },
    controller: function(youTube) {
      this.inputText = '';
      this.search = (query) => {
        youTube.search(query, this.result.bind(this));
      };
    },
    templateUrl: 'src/templates/search.html'  
  });
