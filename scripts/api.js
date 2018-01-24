'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Zak-Dylan';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback) {
    let newItem = {name};
    const newItemJson = JSON.stringify(newItem);
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItemJson,
      success: callback
    });
  };
  
  return {
    getItems,
    createItem
  };
})();