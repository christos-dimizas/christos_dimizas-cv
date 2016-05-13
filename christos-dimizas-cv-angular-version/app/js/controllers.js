/**
 * Created by christos on 13/5/2016.
 */

angular.module('dimizasCVApp')
    .controller('IndexController', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        }
});