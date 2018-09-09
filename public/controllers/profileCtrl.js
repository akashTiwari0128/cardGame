app.controller('profileCtrl', function ($scope, $http, profileService, $window) {

    /*function after submit click*/
    $scope.onSubmit = function () {

        console.log($scope.name, $scope.age, $scope.skills, $scope.profilePicture);

        var file = $scope.myFile;

        
        var uploadUrl = "/savedata";
        profileService.uploadFileToUrl(file, uploadUrl);
      

    }

});


