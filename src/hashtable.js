// Handle collision.  

// Create obj.  for collision append it as a linked list

// need set a get function

// besides card info, need data structure min

// possible make obj a dec format that we can initialize

// hashtable for deck building.  NOTE: this is only for the deck list.  We use this to create another data structure for deck simulation
function cardCollection(obj) {
    this.length = 0;
    this.table = {};

    insertCard(orcacleId, card) {
        // need to update deck stat
        // TODO: need to add array for collisions
        if (table[oracleId] == null){
            let cards = [];
            cards.push(card);
            // push to an array
            table[oracleId] = cards;
        } else {
            // TODO: test me
            table[oracleId].push(cards);
        }
    }

    getCard(oracleId) {
        if(table[orcacleId] != null){
            return table[oracleId][0];
        } else {
            console.log("Card not found");
        }
    }

    removeCard() {
        // need to update deck stat
        if(table[orcacleId] != null){
            table[oracleId].pop();
        } else {
            console.log("Card not found");
        }

    }

    returnDeckStats() {
        // tapped out has this info

        // total price
        // card mana color
        // land mana
        // card type
        // mana curve
        // total amount of cards
        // format legality
        // avg cmc
        // tokens
        // tags

    }





    // for draw simulator
    // For deck create hashtable where index is each card
    shuffle() {

    }


    /*
    card

    library / deck - data structure of cards(min count is 60 or 100. Need to also know deck format.Maybe commander card).

    Eventually, need to implement deck stats(base info off tapped out)

    hand - data structure of cards(max hand size is 7)

    battlefield -

    graveyard -

    exile -

    command -


    data structure needs to shuffle

    work with cards in certain positions



    make a hashtable where it 's unique (can't use oracle or scryfall because non commander can have duplicate and shadowborn can have duplicate)
    */

}