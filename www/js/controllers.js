angular.module('app.controllers', ['app.services'])

  .controller('favorManagementViewCtrl', function($scope) {
    var vm = $scope;
    // favors  requested
    // service.allCreatedByUser
    vm.requestedFavors = [
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Joe Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can you defuse my bomb?"

      }
    ];



    // favors  working on
    // service.allWorkedOnByUser
    vm.workingFavors = [
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Small Berg",
          'image': "res/patrick.jpg"
        },
        'content': "Can you frack?"

      }
    ]

  })

  .controller('favorListViewCtrl', function($scope) {
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
        'content': "omg i lost my database"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Jesse Bruin",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my cs homework i'm soo lazy"

      },
      {
        'cost': '100',
        'expiration': new Date(),
        'owner': {
          'name': "Richard Swag",
          'image': "res/patrick.jpg"
        },
        'content': "Can someone drop in my lang homework i'm soo lazy"

      }
    ];

  })

  .controller('favorViewCtrl', function($scope) {

  })

  .controller('favorPostViewCtrl', function() {

    // categories aka items
    // pass in entire json object
    // subITEMS
    // COST
    // attribute to say that it's purchasable


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
