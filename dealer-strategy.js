// Dealer's strategy (hit and stand only)
// if dealerHand value is < 8, then hit
// if dealerHand value is >= 12, then stand
// if it's 8 < value < 12, hit with probability .5 and stand with probability .5

import { dealerHand } from './Users/Think/Documents/GitHub/blackjack-game/deck-construction.js';

let aceValue = [1, 11];
let hasAce = Object.values(dealerHand).includes('Ace');

// calculate the value of the dealer's hand
if (hasAce) {
    let randomNum = Math.floor(Math.random() * aceValue.length);
    Object.values(dealerHand).splice(Object.values(dealerHand).indexOf('Ace'), 1, aceValue[randomNum]);
} 

let dealerHandValue = Object.values(dealerHand).reduce((x, y) => x + y);
const dealerHistory = []; // tracks the moves of the dealer

function dealerPlays(value = 'dealer') {
    if (dealerHandValue >= 12) {
        dealerHistory.push('hit');
        return hit(dealer);
    } else if (dealerHandValue < 8) {
        dealerHistory.push('stand');
        return stand(dealer);
    } else {
        if (Math.floor(Math.random() * 2) == 1) {
            dealerHistory.push('hit');
            return hit(dealer);
        } else {
            dealerHistory.push('stand');
            return stand(dealer);            
        }
    }
}

