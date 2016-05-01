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

  .controller('favorListViewCtrl', function($scope, $ionicPopup, Favor) {
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
         subTitle: "lol",
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
  })


  .controller('loginController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
    var ref = new Firebase(FURL);
    var userkey = "";
    $scope.signIn = function (user) {
      console.log("Enviado");
      if(angular.isDefined(user)){
        Utils.show();
        Auth.login(user)
          .then(function(authData) {
            //console.log("id del usuario:" + JSON.stringify(authData));

            ref.child('profile').orderByChild("id").equalTo(authData.uid).on("child_added", function(snapshot) {
              console.log(snapshot.key());
              userkey = snapshot.key();
              var obj = $firebaseObject(ref.child('profile').child(userkey));

              obj.$loaded()
                .then(function(data) {
                  //console.log(data === obj); // true
                  //console.log(obj.email);
                  $localStorage.email = obj.email;
                  $localStorage.userkey = userkey;

                  Utils.hide();
                  $state.go('home');
                  console.log("Starter page","Home");

                })
                .catch(function(error) {
                  console.error("Error:", error);
                });
            });

          }, function(err) {
            Utils.hide();
            Utils.errMessage(err);
          });
      }
    };

  })

  .controller('registerController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

    $scope.register = function(user) {
      if(angular.isDefined(user)){
        Utils.show();
        Auth.register(user)
          .then(function() {
            Utils.hide();
            console.log("Antes de loguear:" + JSON.stringify(user));
            Utils.alertshow("Successfully","The User was Successfully Created.");
            $location.path('/');
          }, function(err) {
            Utils.hide();
            Utils.errMessage(err);
          });
      }
    };

  });


