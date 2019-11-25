const cards = require('./scryfall-oracle-cards-sample.json'); // can't use import as it doesn't support json

let collection = JSON.stringify(cards[0].object);

console.log(collection);
