/* global shoppingList, store, Item */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.createItem('pears', function(newItem) {
  api.getItems((items) => {
    console.log(items);
  })
});


