angular.module('app.controllers', ['app.services'])

.controller('favorManagementViewCtrl', function() {

})

.controller('favorListViewCtrl', function(Favor) {
    // get view model ref
    var vm = this;
    // Favor.all()

    // set the favors (only incompleted favors)
    vm.tasks = [
    { title: "Collect coins"},
    { title: "Eat shrooooms"},
    {title: "get high enough"}
    ];

})

.controller('favorViewCtrl', function($scope) {

})

.controller('favorPostViewCtrl', function(Favor) {
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
