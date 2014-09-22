var app = angular.module('store', ['store-directives']);

app.controller('StoreController', function($http, $scope) {
    $scope.products = {};

    $http.get('/products.json').success(function(data) {
        $scope.products = data;
    });
});

app.controller('ReviewController', function($scope) {
    $scope.review = {};

    $scope.addReview = function(product) {
        $scope.review.createdOn = Date.now();
        product.reviews.push($scope.review);
        $scope.review = {};
    };
});

