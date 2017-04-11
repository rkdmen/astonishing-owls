angular.module('myApp.factory',[])

.factory('getAppData', function($http){
    var getJSON = function(){
      return $http.get('/db.json')
      .then(function(resp){
        return resp;
      });
    };
    return {
      getJSON : getJSON
    };
});
