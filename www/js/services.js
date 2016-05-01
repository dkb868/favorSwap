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
      var favorsRef = new Firebase("https://favourswap.firebaseio.com/Favors");
      // firebase shit goes here
      return $firebaseArray(favorsRef);
  	};

    // TODO future note @dmitri: choose a specific user and hardcode their id for presentation
    // get all favors created by one user
    favorFactory.allCreatedByUser = function(userId){
      var favorsRef = new Firebase("https://favourswap.firebaseio.com/Favors");
      // firebase shit goes here
      return $firebaseArray(favorsRef);
	};

    // get all favors being worked on by one user
    favorFactory.allWorkedOnByUser = function(userId){
      var favorsRef = new Firebase("https://favourswap.firebaseio.com/Favors");
      // firebase shit goes here
      return $firebaseArray(favorsRef);
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

  .factory('Bid', ['$firebaseArray', function($firebaseArray){

    // craete object
    var bidFactory = {};

    bidFactory.all = function(){
      var bidsRef = new Firebase("https://favourswap.firebaseio.com/Bids");
      return $firebaseArray(bidsRef);

    };

    // get all bids for one user
    bidFactory.allForUser = function(){
      var bidsRef = new Firebase("https://favourswap.firebaseio.com/Bids");
      return $firebaseArray(bidsRef);
    };

    // get all bids for one favor
    bidFactory.allForFavor = function(){
      var bidsRef = new Firebase("https://favourswap.firebaseio.com/Bids");
      return $firebaseArray(bidsRef);

    };

    // create new bid on a favor
    bidFactory.create = function(bidData){
      var bidsRef = new Firebase("https://favourswap.firebaseio.com/Bids");
      bidsRef.push().set(bidData);
    };

    // update a bid
    bidFactory.update = function(bidData, bidId){
      var bidsRef = new Firebase("https://favourswap.firebaseio.com/Bids/" + bidId);
      bidsRef.update(bidData);
    };
    // delete a bid
    bidFactory.delete = function(bidId){
      //firebase black box
    };

    return bidFactory;



  }])

  .factory('User', [function(){

    // create object
    var userFactory = {};

    // idk

  }]);
