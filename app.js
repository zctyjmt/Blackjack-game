
// Deck construction
const uniqueCards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']; // 13 in total
const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']; 
let deck = []; 

for (let i = 0; i < uniqueCards.length; i++) {
    for (let j = 0; j < suits.length; j++) {
        deck.push(`${uniqueCards[i]} of ${suits[j]}`);
    }
}

const playingDeck = deck.slice(); // Copy of our deck.

const userHand = {};
const dealerHand = {};

// Drawing cards
let numOfCards = 52;
const drawCards = function() {
    let randomNum = Math.floor(Math.random() * numOfCards); // generates a random number between 0 and 51.
    let card = playingDeck[randomNum];
    return card;
}
function dealCards(userHand) {
    let cardDrawn1 = drawCards();
    switch(cardDrawn1) {
        case 'Ace': 
            userHand[cardDrawn1] = [1, 11];
            break;
        case 'Jack':
        case 'Queen':
        case 'King':
            userHand[cardDrawn1] = 10;
            break;
        default:
            userHand[cardDrawn1] = cardDrawn;
            break;
    }
    let cardDrawn2 = drawCards();
    switch(cardDrawn2) {
        case 'Ace': 
            dealerHand[cardDrawn2] = [1, 11];
            break;
        case 'Jack':
        case 'Queen':
        case 'King':
            dealerHand[cardDrawn2] = 10;
            break;
        default:
            dealerHand[cardDrawn2] = cardDrawn;
            break;
    }
}



while ()
    switch(playingDeck[randomNum]) {
        case 'A': 
            userHand[playingDeck[randomNum]] = [1, 11];
            break;
        case 'J':
        case 'Q':
        case 'K':
            userHand[playingDeck[randomNum]] = 10;
            break;
        default:
            userHand[playingDeck[randomNum]] = playingDeck[randomNum];
            break;
    }
    userHand.splice(userHand.indexOf(randomNum), 1);
    numOfCards--;
userHand[playingDeck[randomNum]] = 
deck.indexOf


// Deal cards to the user and the dealer(computer).
for (let i = 0; i < deck.length; i++) {
    switch(deck[i]) {
        case 'A': 
            userHand[deck[i]] = [1, 11];
            break;
        case 'J':
        case 'Q':
        case 'K':
            userHand[deck[i]] = 10;
            break;
        default:
            userHand[deck[i]] = deck[i];
            break;
    }
}





