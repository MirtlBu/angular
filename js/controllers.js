angular.module('vimeoApp.controllers', []).
    controller('vimeoAppController', function($scope, vimeoAppService) {
        $scope.videoFilter = null;
        $scope.videoList = [];

        vimeoAppService.getVideo()
            .success(function(data){
                $scope.videoList = data;
                for(var i = 0; i < $scope.videoList.length; i++){
                   var foo = $scope.videoList[i].description.replace(/\"/gi, '');
                   $scope.videoList[i].description = foo;
                }
                $scope.predicate = "stats_number_of_plays";
            });
    });