app.controller('loginCtrl', function ($scope, $http, loginService, $window) {

    /*function after submit click*/
    $scope.onSubmit = function () {

        console.log($scope.username, $scope.password);

        var data = {username: $scope.username,
            password: $scope.password}
        
        var url = "http://localhost:8080/authenticate";
        loginService.authenticate(url, data);
    }
});


