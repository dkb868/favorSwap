angular.module('App.controllers', ['App.services'])

   .controller('viewBidsPageCtrl', function($scope, $state, $ionicPopup, Bid) {

    var vm = $scope;

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

    vm.favors = Favor.all();




            // When button is clicked, the popup will be shown...
   // When button is clicked, the popup will be shown...
   $scope.showConfirm = function() {

      var confirmPopup = $ionicPopup.confirm({
         title: 'Confirm completion?',
         okText: 'Confirm'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
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

  .controller('favorPostViewCtrl', function($scope, $ionicPopup, $state) {
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
            'ave-value': 1
          },
          {
            'name': 'Homework Delivery',
            'purchasable': true,
            'ave-value': 1

          },
          {
            'name': 'Take Notes',
            'purchasable': true,
            'ave-value': 1

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
            'ave-value': 1
          },
          {
            'name': 'Milk',
            'purchasable': true,
            'ave-value': 1

          },
          {
            'name': 'Candy',
            'purchasable': true,
            'ave-value': 1

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
      // vm.submenu = !vm.submenu;
      cat.show = !cat.show;
    }

        // When button is clicked, the popup will be shown...
    vm.cancel = false;
   vm.showPopup = function(fav) {
      vm.data = {};

      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: fav.content,
         subTitle: "Enter cost of favor.",
             scope: vm,

         buttons: [
            { text: 'CANCEL',

            }, 
            {
               text: '<b>BID</b>',
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
          $state.go("tabsController.favorManagementView");
      });
   };
  });
