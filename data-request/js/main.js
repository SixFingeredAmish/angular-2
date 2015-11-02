// Create application
var myApp = angular.module("myApp", [])

// Bind controller customersCtrl
myApp.controller("customersCtrl", function($scope) {
    $http.get("http://www.w3schools.com/angular/customers.php").then(function(response) {
        $scope.names = response.data.records;
    })
})