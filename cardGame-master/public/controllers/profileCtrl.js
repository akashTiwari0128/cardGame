app.controller('profileCtrl', function ($scope, $http, service, $window) {

    /*function after submit click*/
    $scope.onSubmit = function () {

        console.log($scope.name, $scope.age, $scope.skills, $scope.profilePicture);

        var file = $scope.myFile;
        var data = {name: $scope.name,
            age: $scope.age,
            skills: $scope.skills,
            profilePicture: $scope.profilePicture}
        
        var uploadUrl = "http://localhost:8080/savedata";
        service.uploadFileToUrl(file, uploadUrl, data);
      

    }

    $scope.onLoad = function () {
        console.log("sadasd");
        var url = "http://localhost:8080/getProfile";
        $scope.getProfileData = service.getProfile(url, '5');
        console.log($scope.getProfileData);
    }
    $scope.onLoad();
});


