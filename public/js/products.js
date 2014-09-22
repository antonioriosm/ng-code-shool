var app = angular.module('store-directives', []);

app.directive('productGallery', function() {
    return {
        restrict: 'E',
        templateUrl: 'product-gallery.html',
        controller: function($scope) {
            $scope.current = 0;

            $scope.setCurrent = function(cur) {
                $scope.current = cur || 0;
            };
        }
    };
});

app.directive('productDescription', function() {
    return {
        restrict: 'E',
        templateUrl: 'product-description.html'
    };
});

app.directive('productSpecs', function() {
    return {
        restrict: 'A',
        templateUrl: 'product-specs.html'
    };
});

app.directive('productTabs', function() {
    return {
        restrict: 'E',
        templateUrl: 'product-tabs.html',
        controller: function($scope) {
            $scope.tab = 1;

            $scope.setTab = function(opc) {
                $scope.tab = opc;
            };

            $scope.isSet = function(opc) {
                return $scope.tab === opc;
            };
        }
    };
});