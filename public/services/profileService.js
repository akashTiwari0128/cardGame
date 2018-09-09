app.service('profileService', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl){
           var fd = new FormData();
           fd.append('file', file);
           $http.post(uploadUrl, fd, {
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