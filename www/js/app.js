'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages', 'App.controllers', 'App.services', 'App.routes'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login/login.html',
    controller:'loginController'
  })
  .state('forgot', {
    url: '/forgot',
    templateUrl: 'views/forgot/forgot.html',
    controller:'forgotController'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'views/register/register.html',
    controller:'registerController'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'views/home/home.html',
    controller:'homeController'
  })
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
  
  .state('viewBidsPage', {
    url: '/viewBidsPage',
    templateUrl: 'templates/viewBids.html',
    controller: 'viewBidsPageCtrl'
    
  })
  ;
  $urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://favourswap.firebaseio.com/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
