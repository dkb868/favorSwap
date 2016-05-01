angular.module('app.controllers', ['app.services'])

  .controller('favorManagementViewCtrl', function($scope, $ionicPopup) {
    var vm = $scope;

    vm.favors = [
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      }
    ];

            // When button is clicked, the popup will be shown...
   // When button is clicked, the popup will be shown...
   $scope.showConfirm = function() {
  
      var confirmPopup = $ionicPopup.confirm({
         title: 'Confirm completion?',
         okText: 'Confirm',
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

  .controller('favorListViewCtrl', function($scope, $ionicPopup) {
    // get view model ref
    var vm = $scope;
    // Favor.all()

    vm.tasks = [
      { title: 'Collect coins' },
      { title: 'Eat mushrooms' },
      { title: 'Get high enough to grab the flag' },
      { title: 'Find the Princess' }
    ];

    // set the favors (only incompleted favors)
    vm.favors = [
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Patrick Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my math homework i'm soo lazy"

      }
    ];



    // When button is clicked, the popup will be shown...
   vm.showPopup = function(fav) {
      vm.data = {}

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

      myPopup.then(function(res) {
        var bid = {
          favor: fav.cost, //should actualy be id
          owner: fav.owner, // what
          value: res
        };
         console.log(bid);
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


    vm.submenu = false;
    vm.toggleSubmenu = function() {
      vm.submenu = !vm.submenu;
    }

        // When button is clicked, the popup will be shown...
   vm.showPopup = function(fav) {
      vm.data = {}

      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: fav.content,
         subTitle: "Enter cost of favor.",
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

      myPopup.then(function(res) {
       console.log(res);
       $state.go("tabsController.favorManagementView");
      });
   };
  });
