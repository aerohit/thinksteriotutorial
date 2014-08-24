'use strict';

app.factory('Post', function ($resource) {
  return $resource("https://popping-inferno-944.firebaseio.com/posts/:id.json")
});
