function deal() {
    var allCards = ['Ac', 'Ad', 'Ah', 'As', 'Kc', 'Kd', 'Kh', 'Ks', 'Qc', 'Qd', 'Qh', 'Qs', 'Jc', 'Jd', 'Jh', 'Js', 'Tc', 'Td', 'Th', 'Ts', '9c', '9d', '9h', '9s', '8c', '8d', '8h', '8s', '7c', '7d', '7h', '7s', '6c', '6d', '6h', '6s', '5c', '5d', '5h', '5s', '4c', '4d', '4h', '4s', '3c', '3d', '3h', '3s', '2c', '2d', '2h', '2s'];
    var hand = [];
    var ourFirst = allCards[Math.floor(Math.random() * 52)];
    allCards.splice(allCards.indexOf(ourFirst), 1);
    hand.push(ourFirst);
    var ourSecond = allCards[Math.floor(Math.random() * 51)];
    allCards.splice(allCards.indexOf(ourSecond), 1);
    hand.push(ourSecond);
    // console.log(allCards);
    console.log(ourFirst, ourSecond);

    var flopOne = allCards[Math.floor(Math.random() * 50)];
    allCards.splice(allCards.indexOf(flopOne), 1);
    hand.push(flopOne);
    // console.log(allCards);

    var flopTwo = allCards[Math.floor(Math.random() * 49)];
    allCards.splice(allCards.indexOf(flopTwo), 1);
    hand.push(flopTwo);
    // console.log(allCards);

    var flopThree = allCards[Math.floor(Math.random() * 48)];
    allCards.splice(allCards.indexOf(flopThree), 1);
    hand.push(flopThree);
    // console.log(allCards);

    console.log(flopOne, flopTwo, flopThree);

    var turn = allCards[Math.floor(Math.random() * 47)];
    allCards.splice(allCards.indexOf(turn), 1);
    hand.push(turn);
    // console.log(allCards);
    
    console.log(turn);

    var river = allCards[Math.floor(Math.random() * 46)];
    allCards.splice(allCards.indexOf(river), 1);
    hand.push(river);
    // console.log(allCards);

    console.log(river);

    // console.log(hand);
    hand.sort();
    console.log(hand);

    function swap(cards, i, j) {
        var tmp = cards[i];
        cards[i] = cards[j];
        cards[j] = tmp;
    }
    
    function getCombos(input) {
        var counter = [],
            combos = [],
            cards = input.slice(0, 7),
            length = cards.length,
            fiveCardHand = [],
            i;
    
        for (i = 0; i < length; i++) {
            counter[i] = 0;
        }
    
        combos.push(input);
        i = 0;
        while (i < length) {
            if (counter[i] < i) {
                swap(cards, i % 2 === 1 ? counter[i] : 0, i);
                counter[i]++;
                i = 0;
                combos.push(cards.join(' '));
            } else {
                counter[i] = 0;
                i++;
            }
        }
        // console.log(combos);
        for (i = 0; i < combos.length; i++) {
            var cardString = combos[i].toString();
            fiveCardHand.push(cardString.slice(0, 14));
            i++;
        };
        console.log(fiveCardHand);
        return combos;
    };

    getCombos(hand);
};

deal();