// Options

// hit - draw card
function hit(player = 'user') {
    drawCard(player);
    displayHands();
    console.log('Turn end');

    if (player == 'user') {
        return dealerPlays();
    } else {
        return userPlays();
    }
}

// stand - end turn

function stand(player = 'user') {
    if (player == 'user') {
        console.log('You chose to hit');
        return dealerPlays();
    } else {
        console.log('The dealer chose to hit');
        return userPlays();
    }
}

function viewDealerHistory() {
    return dealerHistory;
}