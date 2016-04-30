angular.module('app.services', [])

function Auth(rootRef, $firebaseAuth) {
  return $firebaseAuth(rootRef);
}
Auth.$inject = ['rootRef', '$firebaseAuth'];


.factory('Auth', Auth);

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

