angular.module('app.services', [])

.factory('Favor', [function(){

  // create new object
  var favorFactory = {};

  // get all favors
  favorFactory.all = function(){
    // firebase shit goes here
  };

  // get one favor
  favorFactory.get = function(id){
    // firebase shit goes here
  };

  // create a favor
  favorFactory.create = function(favorData){
    // firebase shit goes here
  };

  // update a favor
  favorFactory.update = function(id, favorData) {
    // firebase shit
  };

  // deletea favor
  favorFactory.delete = function(id){
    // firebase shit
  };

  return favorFactory;

}])

.factory('Bid', [function(){

  // craete object
  var bidFactory = {};

}]

.factory('User', [function(){

  // create object
  var userFactory = {};

}])

.service('BlankService', [function(){

}]);
