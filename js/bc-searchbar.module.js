angular
   .module('bc-searchbar', [])
   .controller('prmSearchBarAfterController', [function() {
      var vm = this;
      vm.searchOperator = vm.parentCtrl.searchOperator;
      vm.scopeField = vm.parentCtrl.scopeField;
      vm.advancedSearch = vm.parentCtrl.advancedSearch;
      vm.getQuery = getQuery;
      vm.selectedTab = getSelectedTab;

      function getQuery() {
         return vm.parentCtrl.mainSearchField;
      }

      function getSelectedTab() {
         return vm.parentCtrl.selectedTab;
      }
   }])

   .component('prmSearchBarAfter', {
      bindings: {parentCtrl: '<'},
      controller: 'prmSearchBarAfterController',
      templateUrl: 'primo-explore-bc-searchbar/html/search_links.html'
   })

   .component('prmJournalsSearchBarAfter', {
      bindings: {parentCtrl: '<'},
      controller: 'prmSearchBarAfterController',
      templateUrl: 'primo-explore-bc-searchbar/html/search_links.html'
   });
