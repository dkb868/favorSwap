angular.module('app.services', [])

.factory('Favor', Favor)
.factory('Bid', Bid)
.factory('User', User);

Favor.$inject['$firebaseArray', 'FirebaseUrl'];
Bid.$inject['FirebaseUrl'];
User.$inject['FirebaseUrl'];

function Favor(FirebaseUrl)
{
	var favorFactory = new Firebase("https://favourswap.firebaseio.com/");
    // get all favors


    favorFactory.all = function() {
      // firebase shit goes here
      return favorFactory.Favors;
  	};

    // get all favors created by one user
    favorFactory.allCreatedByUser = function(userId){
    	favorIDs = favorFactory.Users.child(userID).child(Favors_Active);
    	var allFavors;
    	for(var i = 0; i < favorIDs.length(); i++)
    	{
    		allFavors += favorFactory.Favors.child(favorIDs[i]); //should be an array, care.
    	}
      return allFavors;
	};

    // get all favors being worked on by one user
    favorFactory.allWorkedOnbyUser = function(userId){
      favorIDs = favorFactory.Users.child(userID).child(Favors_Working);
      var allFavors;
      for(var i = 0; i < favorIDs.length(); i++)
      {
      	allFavors += favorFactory.Favors.child(favorIDs[i]);
      }
      return allFavors;
  	};

    // get one favor
    favorFactory.get = function(id){
      return favorFactory.Favors.child(id);
  	};

    // create a favor
    favorFactory.create = function(favorData){
      // firebase shit goes here
      var newFavor = favorData;
      favorFactory.Favors.push(newFavor);
      var newFavorList = favorFactory.Users.child(favorData.Owner).child(favorData.State).push();
      	  newFavorList.set("");
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
