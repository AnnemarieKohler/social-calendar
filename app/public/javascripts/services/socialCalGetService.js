angular
  .module('socialCal')
  .service('socialCalGetService', ['$http', function($http) {
    var self = this;

    self.getEventsFromDB = function() {
      return $http.get('/events').then(function(res) {
        return res.data;
      });
    };
  }]);