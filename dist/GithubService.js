(function() {
    function GithubService($http) {
        function getUser(username) {
            const url = `https://api.github.com/users/${username}`;
            return $http.get(url).then((response) => {
                return response.data;
            });
        }

        function getUserRepos(userData) {
            return $http.get(`https://api.github.com/users/${userData.login}/repos?per_page=100`).then((response) => {
                return response.data;
            });
        }

        return {
            getUser: getUser,
            getUserRepos: getUserRepos
        }
    }

    const app = angular.module("MyApp");
    app.factory("githubService", GithubService);
})();