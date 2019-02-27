//
// BlackJack
// by Eddie
//



//Card variables
let suits = ['hearts', 'clubs', 'diamonds', 'spades'],
    values = ['ace', 'king', 'queen', 'jack',
    '10', '9', '8', '7', '6',
    '5', '4', '3', '2'];

//DOM variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    startRound = document.getElementById('starting-hit-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button'),
    moneyOutput = document.getElementById('money'),
    twoDollar = document.getElementById('two-dollar-button'),
    fiveDollar = document.getElementById('five-dollar-button'),
    tenDollar = document.getElementById('ten-dollar-button'),
    twentyDollar = document.getElementById('twenty-dollar-button'),
    fiftyDollar = document.getElementById('fifty-dollar-button'),
    hundredDollar = document.getElementById('hundred-dollar-button'),
    addFunds = document.getElementById('add-funds-button'),
    allIn = document.getElementById('all-in-button'),
    coverCard = document.getElementById('cover-card');

//Graphical output arrays
let _dealerCards = [
    document.getElementById('dealerCard1'),
    document.getElementById('dealerCard2'),
    document.getElementById('dealerCard3'),
    document.getElementById('dealerCard4'),
    document.getElementById('dealerCard5'),
    document.getElementById('dealerCard6'),
    document.getElementById('dealerCard7')];


let _playerCards = [
    document.getElementById('playerCard1'),
    document.getElementById('playerCard2'),
    document.getElementById('playerCard3'),
    document.getElementById('playerCard4'),
    document.getElementById('playerCard5'),
    document.getElementById('playerCard6'),
    document.getElementById('playerCard7')];

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    blackJack = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [],
    playerWins = 0,
    playerName = "",
    playerMoney = 0,
    playerStake = 0;
playerMoney = parseInt(playerMoney);
const multiplierDouble = 2;
const multiplierTriple = 3;
cashOutput();

startRound.style.display = 'none';
hitButton.style.display = 'none';
stayButton.style.display = 'none';
twoDollar.style.display = 'none';
fiveDollar.style.display = 'none';
tenDollar.style.display = 'none';
twentyDollar.style.display = 'none';
fiftyDollar.style.display = 'none';
hundredDollar.style.display = 'none';
allIn.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function () {
    coverCard.src = "images/cover.png";
    _dealerCards[0].src = "images/blank.svg";
    _dealerCards[1].src = "images/blank.svg";
    _dealerCards[2].src = "images/blank.svg";
    _dealerCards[3].src = "images/blank.svg";
    _dealerCards[4].src = "images/blank.svg";
    _dealerCards[5].src = "images/blank.svg";
    _dealerCards[6].src = "images/blank.svg";
    _playerCards[0].src = "images/blank.svg";
    _playerCards[1].src = "images/blank.svg";
    _playerCards[2].src = "images/blank.svg";
    _playerCards[3].src = "images/blank.svg";
    _playerCards[4].src = "images/blank.svg";
    _playerCards[5].src = "images/blank.svg";
    _playerCards[6].src = "images/blank.svg";
    //showStatus();

    if (!playerName) {
        playerName = prompt("Welcome! Please enter your name!");
    }
    //if (playerMoney <= 0 && playerMoney != Number) {
    //    alert("Add some cash!");
    //}
    ////alert(playerMoney);
    cashOutput();

    //gameStarted = true;
    //twoDollar.style.display = 'inline';
    //fiveDollar.style.display = 'inline';
    //tenDollar.style.display = 'inline';
    //allIn.style.display = 'inline';


    gameOver = false;
    playerWon = false;
    blackJack = false;

    //deck = createDeck();
    //shuffleDeck(deck);
    //dealerCards = [getNextCard(), getNextCard()];
    //playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    startRound.style.display = 'inline';
    //hitButton.style.display = 'inline';
    //stayButton.style.display = 'inline';
    twoDollar.style.display = 'inline';
    fiveDollar.style.display = 'inline';
    tenDollar.style.display = 'inline';
    twentyDollar.style.display = 'inline';
    fiftyDollar.style.display = 'inline';
    hundredDollar.style.display = 'inline';
    allIn.style.display = 'inline';


    //showStatus();
    gameStarted = true;
});

addFunds.addEventListener('click', function () {
    let insertMoney = prompt("Insert cash:");
    insertMoney = Number.parseInt(insertMoney);
    if (isNaN(insertMoney) || insertMoney < 0) {
        insertMoney = 0;
    }
    playerMoney = playerMoney + insertMoney;
    cashOutput();
});

twoDollar.addEventListener('click', function () {
    if (playerMoney < 2) {
        alert("Insufficient funds!");
    }

    else {
        playerMoney = playerMoney - 2;
        playerStake = playerStake + 2;
    
        cashOutput();
    }
});

fiveDollar.addEventListener('click', function () {
    if (playerMoney < 5) {
        alert("Insufficient funds!");
    }
    else {
        playerMoney = playerMoney - 5;
        playerStake = playerStake + 5;

        cashOutput();
    }
});

tenDollar.addEventListener('click', function () {
    if (playerMoney < 10) {
        alert("Insufficient funds!");
    }
    else {
        playerMoney = playerMoney - 10;
        playerStake = playerStake + 10;

        cashOutput();
    }
});

twentyDollar.addEventListener('click', function () {
    if (playerMoney < 20) {
        alert("Insufficient funds!");
    }
    else {
        playerMoney = playerMoney - 20;
        playerStake = playerStake + 20;

        cashOutput();
    }
});

fiftyDollar.addEventListener('click', function () {
    if (playerMoney < 50) {
        alert("Insufficient funds!");
    }
    else {
        playerMoney = playerMoney - 50;
        playerStake = playerStake + 50;

        cashOutput();
    }
});

hundredDollar.addEventListener('click', function () {
    if (playerMoney < 100) {
        alert("Insufficient funds!");
    }
    else {
        playerMoney = playerMoney - 100;
        playerStake = playerStake + 100;

        cashOutput();
    }
});

allIn.addEventListener('click', function () {
    let backup = playerMoney;
    Number.parseInt(backup);
    playerMoney = playerMoney - playerMoney;
    Number.parseInt(playerStake);
    playerStake = Number.parseInt(playerStake + backup);

    cashOutput();
});

startRound.addEventListener('click', function () {

    if (playerStake == 0) {
        alert("You need to place a bet!");
    }

    else {
        gameOver = false;
        playerWon = false;
        blackJack = false;

        startRound.style.display = 'none';
        hitButton.style.display = 'inline';
        stayButton.style.display = 'inline';
        twoDollar.style.display = 'none';
        fiveDollar.style.display = 'none';
        tenDollar.style.display = 'none';
        twentyDollar.style.display = 'none';
        fiftyDollar.style.display = 'none';
        hundredDollar.style.display = 'none';
        allIn.style.display = 'none';
        deck = createDeck();
        shuffleDeck(deck);
        dealerCards = [getNextCard(), getNextCard()];
        playerCards = [getNextCard(), getNextCard()];
        
        _dealerCards[2].src = "images/blank.svg";
        _dealerCards[3].src = "images/blank.svg";
        _dealerCards[4].src = "images/blank.svg";
        _dealerCards[5].src = "images/blank.svg";
        _dealerCards[6].src = "images/blank.svg";
        _playerCards[2].src = "images/blank.svg";
        _playerCards[3].src = "images/blank.svg";
        _playerCards[4].src = "images/blank.svg";
        _playerCards[5].src = "images/blank.svg";
        _playerCards[6].src = "images/blank.svg";
        showStatus();
    }
});

hitButton.addEventListener('click', function () {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function () {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});

function cashOutput() {
    moneyOutput.innerText = "Cash: $" + playerMoney + "\n\nBet: $" + playerStake;
}


function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };            
            deck.push(card);
        }
    }    
    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return "images/" + card.value + '_of_' + card.suit + ".svg";
}

function getNextCard() {
    return deck.shift();
}

function getCardNumericValue(card) {
    switch (card.value) {
        case 'ace':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        default:
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'ace') {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
    updateScores();

    if (playerScore === 21) {
        blackJack = true;
        playerWin = true;
        gameOver = true;
        reward = playerStake * multiplierTriple;
        playerMoney = parseInt(playerMoney + reward);
        playerStake = 0;
        reward = 0;
    }

    if (gameOver) {

        while (dealerScore < playerScore
                && playerScore <= 20
                && dealerScore <= 20) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
        playerStake = 0;
    }
    else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
        reward = playerStake * multiplierDouble;
        playerMoney = parseInt(playerMoney + reward);
        playerStake = 0;
        reward = 0;
    }
    else if (playerScore === 21 && dealerScore === 21) {
        blackJack = true;
        playerWon = true;
        gameOver = true;
        reward = playerStake * multiplierTriple;
        playerMoney = parseInt(playerMoney + reward);
        playerStake = 0;
        reward = 0;
    }
    else if (gameOver) {
        if (playerScore > dealerScore) {
            playerWon = true;
            reward = playerStake * multiplierDouble;
            playerMoney = parseInt(playerMoney + reward);
            playerStake = 0;
            reward = 0;
        }
        else {
            playerWon = false;
            playerStake = 0;
        }
    }
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }

    let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
        _dealerCards[i].src = getCardString(dealerCards[i]);
    }

    let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
        _playerCards[i].src = getCardString(playerCards[i]);
    }

    updateScores();

    cashOutput();

    textArea.innerText =
        'Dealer score: ' + dealerScore + '\n\n' +
        playerName + '\'s score: ' + playerScore + '\n\n' +
        'Wins: ' + playerWins + '\n\n';    

    if (gameOver) {
        if (playerWon === true && blackJack === false) {
            playerWins++;
            textArea.innerText += "YOU WIN!";
        }
        else if (playerWon === true && blackJack === true) {
            playerWins++;
            textArea.innerText += "BLACKJACK!";
        }
        else {
            textArea.innerText += "HOUSE WINS!";
        }

        if (playerMoney <= 0 && playerStake <=0) {
            newGameButton.style.display = 'inline';
            startRound.style.display = 'none';
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
        }
        else {
            newGameButton.style.display = 'inline';
            startRound.style.display = 'none';
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
        }
    } 
}


     

