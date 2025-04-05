let cards = [
    { id: 1, image: 'image1.png' },
    { id: 1, image: 'image1.png' },

    // Добавить все карты по аналогии

];

cards = shuffle(cards);
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;
    card.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = card;
        return;
    }
    secondCard = card;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.id === secondCard.dataset.id;
    isMatch ? disableCards() : unflipCards();
}


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function checkWin() {
    if (document.querySelectorAll('.card.flip').length === cards.length) {
        setTimeout(() => {
            alert('Поздравляем! Вы нашли все пары!');
            resetGame();
        }, 500);
    }
}

function resetGame() {
    document.getElementById('game').innerHTML = '';
    cards = shuffle(cards);
    renderCards(cards);
}