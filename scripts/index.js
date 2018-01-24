/* global shoppingList, store, Item, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();

  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    const item = store.items[1];
    console.log(`Current name: ${item.name}`);
    store.findAndUpdate(item.id, { name: 'foobar'});
    console.log(`New name: ${item.name}`);
    shoppingList.render();
  });

});
