app.controller('loginCtrl', function ($scope, $http, service, $window) {

    /*function after submit click*/
    $scope.onSubmit = function () {

        console.log($scope.username, $scope.password);

        var data = {username: $scope.username,
            password: $scope.password}
        
        var url = "http://localhost:8080/authenticate";
        $scope.login = service.authenticate(url, data).then(function(response) {
            console.log('ctrl response ::: ', response);
            if(response && response.id) {
                $window.location.href = '#!/profile';
            }
        });
        console.log($scope.login);
        /* function redirect() {
            console.log(login);
            console.log(login.id);
            if(login && login.id) {
                $window.location.href = '/profile.html';
            }
        } */
    }
});


