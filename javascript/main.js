var cA = 1;
var cK = 2;
var cQ = 3;
var cJ = 4;
var cT = 5;
var c9 = 6;
var c8 = 7;
var c7 = 8;
var c6 = 9;
var c5 = 10;
var c4 = 11;
var c3 = 12;
var c2 = 13;

var dA = 1;
var dK = 2;
var dQ = 3;
var dJ = 4;
var dT = 5;
var d9 = 6;
var d8 = 7;
var d7 = 8;
var d6 = 9;
var d5 = 10;
var d4 = 11;
var d3 = 12;
var d2 = 13;

var hA = 1;
var hK = 2;
var hQ = 3;
var hJ = 4;
var hT = 5;
var h9 = 6;
var h8 = 7;
var h7 = 8;
var h6 = 9;
var h5 = 10;
var h4 = 11;
var h3 = 12;
var h2 = 13;

var sA = 1;
var sK = 2;
var sQ = 3;
var sJ = 4;
var sT = 5;
var s9 = 6;
var s8 = 7;
var s7 = 8;
var s6 = 9;
var s5 = 10;
var s4 = 11;
var s3 = 12;
var s2 = 13;

// var allCards = ['cA', 'dA', 'hA', 'sA', 'cK', 'dK', 'hK', 'sK', 'cQ', 'dQ', 'hQ', 'sQ', 'cJ', 'dJ', 'hJ', 'sJ', 'cT', 'dT', 'hT', 'sT', 'c9', 'd9', 'h9', 's9', 'c8', 'd8', 'h8', 's8', 'c7', 'd7', 'h7', 's7', 'c6', 'd6', 'h6', 's6', 'c5', 'd5', 'h5', 's5', 'c4', 'd4', 'h4', 's4', 'c3', 'd3', 'h3', 's3', 'c2', 'd2', 'h2', 's2'];

function deal() {
    var allCards = ['aAc', 'aAd', 'aAh', 'aAs', 'bKc', 'bKd', 'bKh', 'bKs', 'cQc', 'cQd', 'cQh', 'cQs', 'dJc', 'dJd', 'dJh', 'dJs', 'eTc', 'eTd', 'eTh', 'eTs', 'f9c', 'f9d', 'f9h', 'f9s', 'g8c', 'g8d', 'g8h', 'g8s', 'h7c', 'h7d', 'h7h', 'h7s', 'i6c', 'i6d', 'i6h', 'i6s', 'j5c', 'j5d', 'j5h', 'j5s', 'k4c', 'k4d', 'k4h', 'k4s', 'l3c', 'l3d', 'l3h', 'l3s', 'm2c', 'm2d', 'm2h', 'm2s'];
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
            fiveCardHand.push(cardString.slice(0, 19));
            i++;
        };
        console.log(fiveCardHand);
        return combos;
    };

    getCombos(hand);
};

deal();