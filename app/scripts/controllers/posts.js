'use strict';

app.controller('PostsCtrl', function ($scope) {
  $scope.posts = [
    { url: 'https://www.google.com', title: 'Google' },
    { url: 'https://facebook.com', title: 'Facebook' }
  ];

  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
    $scope.posts.push($scope.post);
    $scope.post = { url: 'http://', title: '' };
  };

  $scope.deletePost = function(index) {
    $scope.posts.splice(index, 1);
  };
});
