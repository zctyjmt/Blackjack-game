// Constructing the deck of cards.
const cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']; // 13 in total
const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']; 

let deck = {};
for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < suits.length; j++) {
        if (typeof cards[i] !== 'string' || cards[i] === 'Ace') {
            deck[`${cards[i]} of ${suits[j]}`] = cards[i];
        } else {
            deck[`${cards[i]} of ${suits[j]}`] = 10;
        }
    }
}

let deckArray = Object.entries(deck); // [[Ace of Spades, 'Ace']...['2 of Hearts', 2]]

// Constructing each user's hand
let userHand = {};
export let dealerHand = {};

// Deal first round cards function: two cards to each player.
// index is a random index of our deck.
function drawCard(player) {
    let index = Math.floor(Math.random() * deckArray.length);
    let cardDrawn = deckArray[index][0];
    let cardValue = deckArray[index][1];
    switch(player) {
        case 'dealer':
            dealerHand[cardDrawn] = cardValue;
            break;
        case 'user': 
            userHand[cardDrawn] = cardValue;
            break;
    }
    delete deck[cardDrawn];
    return 'Card drawn';
}

// User Story: As a user I want to clearly see the cards dealt to me and to the dealer.
function displayHands(player = 'both') {
    switch(player) {
        case 'dealer':
            console.log(`Dealer's hand: ${dealerHand}`);
            break;
        case 'both':
            console.log(`Dealer's hand: ${dealerHand}`);
            console.log(`User's hand: ${userHand}`);
            break;
        default:
            console.log(`User's hand: ${userHand}`);
            break;
    }
}

// Begin game // deals intial round of cards and display both players' hands.
function dealCards() {
    for (let i = 0; i < 2; i++) {
        drawCard('user');
        drawCard('dealer');
    }
    displayHands();
    return setTimeout( () => {
        console.log('Round has begun, your turn begins');
    }, 1000)
}




