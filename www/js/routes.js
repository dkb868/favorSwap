angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.favorManagementView', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/favorManagementView.html',
        controller: 'favorManagementViewCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.favorListView', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/favorListView.html',
        controller: 'favorListViewCtrl'
      }
    }
  })

  .state('favorView', {
    url: '/page7',
    templateUrl: 'templates/favorView.html',
    controller: 'favorViewCtrl'
  })

  .state('tabsController.favorPostView', {
    url: '/page8',
    views: {
      'tab3': {
        templateUrl: 'templates/favorPostView.html',
        controller: 'favorPostViewCtrl'
      }
    }
  })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller:'registerController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })

    $urlRouterProvider.otherwise('/page1/page6')



});
