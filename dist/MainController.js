function MainController($scope, $http) {
    $scope.title = "Search GitHub user:";

    $scope.search = function(username) {
        const url = `https://api.github.com/users/${username}`;

        $http.get(url).then((response) => {
            console.log(response);
            $scope.userData = response.data;

            $http.get(`${url}/repos?per_page=100`).then((response) => {
                $scope.userRepos = response.data;
            });

        }, function(err) {
            console.log(err);
            $scope.errorMsg = err.data.message;
        });
    }

}

MyApp.controller("MainController", ["$scope", "$http", MainController]);