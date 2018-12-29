//shuffle the deck
function shuffle(jokers: boolean): number[] {
    let deck = [0];
    deck.length = 0

    //fill a deck of 52 cards
    for (let x = 0; x < 52; x++) {
        deck.push(x)
    }
    if (jokers) {
        deck.push(14);
        deck.push(14);
    }
    //shuffle the deck.
    let shuffleDeck = [0]
    shuffleDeck.length = 0;
    for (let x = 0; x < deck.length; x++) {
        let element = Math.randomRange(0, deck.length - 1)
        shuffleDeck.push(deck[element])
        deck.removeAt(element)
    }
    deck = shuffleDeck
    return deck
}