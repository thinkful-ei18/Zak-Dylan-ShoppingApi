'use strict';


const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Zak-Dylan';
  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback); 
  };

  const createItem = function(name, callback) {
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ name }),
      success: callback
    });
  };
  
  const updateItem = function(id, changedValue, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(changedValue),
      success: callback
    });
  };
  
  
  
  const deleteItem = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback
    });
  };
  
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();