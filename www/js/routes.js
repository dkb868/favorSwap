angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.favorManagementView'
      2) Using $state.go programatically:
        $state.go('tabsController.favorManagementView');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page4
      /page1/tab3/page4
  */
  .state('tabsController.favorManagementView', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/favorManagementView.html',
        controller: 'favorManagementViewCtrl'
      },
      'tab3': {
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

  .state('favorPostView', {
    url: '/page8',
    templateUrl: 'templates/favorPostView.html',
    controller: 'favorPostViewCtrl'
  })

$urlRouterProvider.otherwise('/page1/page6')



});
