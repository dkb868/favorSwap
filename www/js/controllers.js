var creator = "-KGgFeRFhANsvUKW2m3a";
var worker = "-KGhDzxe_5w1PpjsIw-v";
var creatorId = "f0883c0d-a445-4bb5-831d-1b8204f2c7fb";
var workerId = "80a2fd55-9a01-4ce0-95a3-65c54403fb0c";

angular.module('App.controllers', ['App.services'])

   .controller('viewBidsPageCtrl', function($scope, $state, $ionicPopup, $stateParams, Bid, Favor) {

    var vm = $scope;

    var favorId = $stateParams.id;

    vm.bids = Bid.all();
    // When button is clicked, the popup will be shown...
   vm.showConfirm = function(bid) {

      var confirmPopup = $ionicPopup.confirm({
         title: 'Accept bid from ' + bid.owner.name +'?',
         template: '<div align="center">Karma: ' + bid.owner.karma + "<br><br>Bid value: $" + bid.value + "</div>",
          okText: "Accept"
      });

      confirmPopup.then(function(res) {
         if(res) {
            Bid.update({'status': "working"}, bid.$id);
           Favor.update({'status': "working"}, favorId);

             $state.go("tabsController.favorManagementView");
//            console.log('Sure!');
         } else {
//            console.log('Not sure!');
         }
      });

   };


  })

  .controller('favorManagementViewCtrl', function($scope, $ionicPopup, Favor) {
    var vm = $scope;
    // set user
    // set user
    vm.creator = creator;
    vm.worker = worker;

    vm.favors = Favor.all();




            // When button is clicked, the popup will be shown...
   // When button is clicked, the popup will be shown...
   $scope.showConfirm = function(fav) {

      var confirmPopup = $ionicPopup.confirm({
         title: 'Confirm completion',
         okText: 'Confirm'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            Favor.update({'status': 'done'}, fav.$id);
         } else {
            console.log('Not sure!');
         }
      });

   };
  })

  .controller('favorListViewCtrl', function($scope, $ionicPopup, Favor, Bid) {
    // get view model ref
    var vm = $scope;
    // Favor.all()

    // set the favors (only incompleted favors)
    vm.favors = Favor.all();

    var ref = new Firebase("https://favourswap.firebaseio.com/");
    var authData = ref.getAuth();
    vm.user = authData.uid == "f0883c0d-a445-4bb5-831d-1b8204f2c7fb" ? creator : worker;
    console.log("User " + vm.user);


    // When button is clicked, the popup will be shown...
   vm.showPopup = function(fav) {
      vm.data = {};

      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: fav.content,
         subTitle: "<div class=\"circular\"><img style=\"border-radius:100\" width=\"30%\" src=\"" + fav.owner.image + "\"/></div> "+fav.owner.name + "<br><br> <h5>How much do you want to bid?</h5>",
         scope: vm,

         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Bid</b>',
               type: 'button-positive',
                  onTap: function(e) {

                     if (!vm.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return vm.data.model;
                     }
                  }
            }
         ]
      });

     var bids = Bid.all();

      myPopup.then(function(res) {
        var bid = {
          owner: {
            'image': "res/patrick.jpg",
            'karma': 23,
            'name': 'Richard.min.js'
          },
          'status': "waiting",
          value: res
        };
         console.log(bid);
        Bid.create(bid);
      });
   };


  })

  .controller('favorViewCtrl', function($scope) {

  })

  .controller('favorPostViewCtrl', function($scope, $ionicPopup, $state, Favor) {
    var vm = $scope;


    vm.categories = [
      {
        'name': 'Schoolwork',
        'icon': 'icon ion-edit',
        'purchasable': false,
        'subitems' : [
          {
            'name': 'Print Assignments',
            'purchasable': true,
            'avecost': 1
          },
          {
            'name': 'Homework Delivery',
            'purchasable': true,
            'avecost': 1

          },
          {
            'name': 'Take Notes',
            'purchasable': true,
            'avecost': 1

          }
        ]
      },
      {
        'name': 'Food Delivery',
        'icon': 'icon ion-pizza',
        'purchasable': false,
        'subitems' : [
          {
            'name': 'Pizza',
            'purchasable': true,
            'avecost': 1
          },
          {
            'name': 'Milk',
            'purchasable': true,
            'avecost': 2

          },
          {
            'name': 'Candy',
            'purchasable': true,
            'avecost': 1

          }
        ]
      },
      {
        'name': 'Transportation',
        'icon': 'icon ion-model-s',
        'purchasable': true,
        'subitems' : [        ]
      },
      {
        'name': 'Other',
        'icon': 'icon ion-more',
        'purchasable': true,
        'subitems' : [        ]
      }
    ];



    vm.toggleSubmenu = function(cat) {
      cat.submenu = !cat.submenu;
    };

        // When button is clicked, the popup will be shown...
   vm.showPopup = function(cat,subitem) {
      vm.data = {};

      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: subitem.name,
         subTitle: "Add any details:",
             scope: vm,

         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Post Favor</b>',
               type: 'button-positive',
                  onTap: function(e) {

                     if (!vm.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return vm.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
       console.log(res);
       if (res != null)
        var favor = {
          'content': res,
          'cost': subitem.avecost,
          'status': 'waiting',
          'category' : cat.name,
          'owner' : {
            'id': creator
          }
        };
        Favor.create(favor);
       $state.go("tabsController.favorManagementView");
      });
   };
  });
