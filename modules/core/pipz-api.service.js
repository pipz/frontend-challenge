(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('PipzApiService', pipzApiService);

  function pipzApiService(
    $q,
    API_URL,
    Restangular
  ) {
    'ngInject';

    var api = {
      key: "a50ebd9fa5fae19f13890a",
      secret: "513c9cb9b73ccc76ad"
    };
    var token = btoa(api.key + ":" + api.secret);
    var config = {
      "Authorization": "Basic " + token
    };

    return Restangular.setBaseUrl(API_URL)
      .setDefaultHeaders(config);
  }
})();
