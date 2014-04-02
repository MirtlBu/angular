angular.module('vimeoApp.services', []).
    factory('vimeoAppService', function($http) {

        var vimeoAPI = {};

        vimeoAPI.getVideo = function() {
            return $http({
                method: 'JSONP',
                url: 'http://vimeo.com/api/v2/channel/cooking/videos.json?callback=JSON_CALLBACK'
            });
        };

        return vimeoAPI;
    });