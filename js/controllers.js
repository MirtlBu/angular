angular.module('vimeoApp.controllers', []).
    controller('vimeoAppController', function($scope, vimeoAppService) {
        $scope.videoFilter = null;
        $scope.videoList = [];

        vimeoAppService.getVideo()
            .success(function(data){
                $scope.videoList = data;
                $scope.predicate = "stats_number_of_plays";
            });

    });