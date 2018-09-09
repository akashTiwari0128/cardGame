app.service('profileService', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl, data){
           var fd = new FormData();
           fd.append('file', file);
           fd.append('data', JSON.stringify(data));
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

        this.getProfile = function(url, userid){
                var fd = new FormData();
                //fd.append('file', file);
                fd.append('userid', userid);
                $http.get(url, fd, {
                   transformRequest: angular.identity,
                   headers: {'Content-Type': undefined}
                })
                .then(function(response){
                        console.log("getProfile ",response);
                        return response.data;
                })
                .catch(function(err){
                        console.log("Error:: ",err);
                });
             }
     }]);