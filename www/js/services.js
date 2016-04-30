angular.module('app.services', [])



.factory('Favor', [function(){
    // create new object
    var favorFactory = new Firebase("https://favourswap.firebaseio.com/Favors");

    // get all favors
    favorFactory.all = function(){
      // firebase shit goes here
  	};

    // get all favors created by one user
    favorFactory.allCreatedByUser = function(userId){
      // firebase omg
	};

    // get all favors being worked on by one user
    favorFactory.allWorkedOnbyUser = function(userId){
      // firebase omg
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
    var bidFactory = new Firebase("https://favourswap.firebaseio.com/Bids");

    // get all bids for one user
    bidFactory.allForUser =function(userId){
      // firebase shit goes here
  	};

    // get all bids for one favor
    bidFactory.allForFavor = function(favorId){
      // firebase magic
  	};

    // create new bid on a favor
    bidFactory.create = function(bidData){
      // firebase magic
  	};

    // update a bid
    bidFactory.update = function(bidId, bidData){
      // firebase spells
  	};
    // delete a bid
    bidFactory.delete = function(bidId){
      //firebase black box
  	};
}])

.factory('User', [function(){
    // create object
	var usersAuth = new Firebase("https://favourswap.firebaseio.com/Users");
	return $firebaseAuth(usersAuth);
    // idk

}])

.service('BlankService', [function(){

}]);


  // function Auth(rootRef, $firebaseAuth) {
//   return $firebaseAuth(rootRef);
// }
// Auth.$inject = ['rootRef', '$firebaseAuth'];
