angular.module('app.services', [])

// function Auth(rootRef, $firebaseAuth) {
//   return $firebaseAuth(rootRef);
// }
// Auth.$inject = ['rootRef', '$firebaseAuth'];


// .factory('Auth', Auth);

.factory('Favor', ['$firebaseArray', function($firebaseArray){
    // create new object
    var fire_base = new Firebase("https://favourswap.firebaseio.com/");
    var favorFactory = {};

    // get all favors
    favorFactory.all = function() {
      // firebase shit goes here
      return $firebaseArray(fire_base.child('Favors'));
  	};

    // get all favors created by one user
    favorFactory.allCreatedByUser = function(userId){
    	favorIDs = fire_base.Users.child(userID).child(Favors_Active);
    	var allFavors;
    	for(var i = 0; i < favorIDs.length(); i++)
    	{
    		allFavors += fire_base.child('Favors').child(favorIDs[i]); //should be an array, care.
    	}
      return allFavors;
	};

    // get all favors being worked on by one user
    favorFactory.allWorkedOnbyUser = function(userId){
      favorIDs = fire_base.Users.child(userID).child(Favors_Working);
      var allFavors;
      for(var i = 0; i < favorIDs.length(); i++)
      {
      	allFavors += fire_base.child('Favors').child(favorIDs[i]);
      }
      return allFavors;
  	};

    // get one favor
    favorFactory.get = function(id){
      return fire_base.child('Favors').child(id);
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
    var userFactory = {};

    // idk

  }]);