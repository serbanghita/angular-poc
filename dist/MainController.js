(function() {
    function MainController($scope, githubService) {
        $scope.title = "Search GitHub user:";

        $scope.search = function(username) {
            githubService.getUser(username).then((userData) => {
                $scope.userData = userData;

                githubService.getUserRepos(userData).then((userRepos) => {
                    $scope.userRepos = userRepos
                });

            }, function(err) {
                console.log(err);
                $scope.errorMsg = err.data.message;
            });
        }

    }

    MyApp.controller("MainController", ["$scope", "githubService", MainController]);
})();

