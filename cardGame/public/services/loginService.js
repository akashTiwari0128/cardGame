app.service('loginService', ['$http', function ($http) {
    this.authenticate = function(url, data){
       console.log(JSON.stringify(data));
       var fd = new FormData();
       fd.append('data', JSON.stringify(data));
       $http.post(url, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
       .then(function(response){
               console.log("file upload successfully!!!",response);
       })
       .catch(function(err){
               console.log("Error:: ",err);
       });
    }
 }]);