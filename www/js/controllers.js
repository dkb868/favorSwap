angular.module('app.controllers', ['app.services'])

   .controller('viewBidsPageCtrl', function($scope, $state, $ionicPopup) {
    
    var vm = $scope;
    
    vm.bids = [
        {
            'owner': {
              'name': "Patrick Bruin",
              'image': "res/patrick.jpg",
                'karma': 20
            },
            'value': '2'
        },
        {
            'owner': {
              'name': "Patrick Bruin",
              'image': "res/patrick.jpg",
                'karma': 2
            },
            'value': '2'
        },
        {
            'owner': {
              'name': "Patrick Bruin",
              'image': "res/patrick.jpg",
                'karma': 10
            },
            'value': '2'
        },
        
    ];
    
    // When button is clicked, the popup will be shown...
   vm.showConfirm = function(bid) {
	
      var confirmPopup = $ionicPopup.confirm({
         title: 'Accept bid from ' + bid.owner.name +'?',
         template: '<div align="center">Karma: ' + bid.owner.karma + "<br><br>Bid value: $" + bid.value + "</div>",
          okText: "Accept"
      });

      confirmPopup.then(function(res) {
         if(res) {
             $state.go("tabsController.favorManagementView");
//            console.log('Sure!');
         } else {
//            console.log('Not sure!');
         }
      });
		
   };
    

  })

  .controller('favorManagementViewCtrl', function() {

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
         console.log('Tapped!', res);
      });    
   };


  })

  .controller('favorViewCtrl', function($scope) {

  })

  .controller('favorPostViewCtrl', function() {
    var vm = this;

    // function to save favor
    vm.saveFavor = function(){
      // clear the 'error' messaeg
      vm.message = '';

      // use the create function in the favor service
      /*Favor.create(vm.favorData)
       .success(function(data){

       })*/
    }
  });
