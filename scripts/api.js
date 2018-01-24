'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Zak-Dylan';

  const getItems = function(callback) {
    callback('API module works'); 
  };

  return {
    getItems
  };
})();