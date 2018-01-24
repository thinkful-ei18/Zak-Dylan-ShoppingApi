'use strict';
/* global shoppingList, store, Item, api, callback */


$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items) => {
    items.forEach((item) => {
      store.items.push(item);
    });
    shoppingList.render();
  });
});



 