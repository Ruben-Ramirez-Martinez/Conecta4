const markWinnerChips = (chips, winnerChips) => winnerChips.forEach(winnerChip => chips[winnerChip].classList.add('win-chips'));

const getWinnerChips = (chipPosition, nextChip, chips) => {

    const winnerChips = [];

    let newChipPosition = chipPosition;

    winnerChips.push(newChipPosition)

    while (winnerChips.length < 4) {

        winnerChips.push(newChipPosition +=nextChip);
    }

    markWinnerChips(chips, winnerChips);
};

const checkBottomChip = (chipPosition, chips, playerTurn) => {
    let connectedChips = 1;
    let newChipPosition = chipPosition;

    while ((newChipPosition >= 1 && newChipPosition != 6 && newChipPosition != 12 && newChipPosition != 18 && newChipPosition != 24 && newChipPosition != 30 && newChipPosition != 36 && chips[newChipPosition - 1].className.includes(playerTurn) && connectedChips < 4)) {
        ++connectedChips;
        newChipPosition -=1;
    }

    if (connectedChips === 4) getWinnerChips(newChipPosition, 1, chips);

    return connectedChips;
};

const checkLeftChip = (chipPosition, chips, playerTurn) => {
    let connectedChips = 1;
    let newChipPosition = chipPosition;

    while (newChipPosition >= 6 && chips[newChipPosition - 6].className.includes(playerTurn) && connectedChips < 4) {
        ++connectedChips;
        newChipPosition -=6;
    }

    if (connectedChips === 4) getWinnerChips(newChipPosition, 6, chips);

    return (connectedChips === 4) ? connectedChips : checkRightChip(newChipPosition, chips, playerTurn);
};

const checkRightChip = (chipPosition, chips, playerTurn) => {
    let connectedChips = 1;
    let newChipPosition = chipPosition;

    while (newChipPosition <= 35 && chips[newChipPosition + 6].className.includes(playerTurn) && connectedChips < 4) {
        ++connectedChips;
        newChipPosition +=6;
    }

    if (connectedChips === 4) getWinnerChips(newChipPosition, -6, chips);

    return connectedChips;
};

const checkTopLeftChip = (chipPosition, chips, playerTurn) => {
    let connectedChips = 1;
    let newChipPosition = chipPosition;

    while (newChipPosition >= 6 && newChipPosition != 11 && newChipPosition != 17 && newChipPosition != 23 && newChipPosition != 29 && newChipPosition != 35  && newChipPosition != 41 && chips[newChipPosition - 5].className.includes(playerTurn) && connectedChips < 4) {
        ++connectedChips;
        newChipPosition -=5;
    }

    if (connectedChips === 4) getWinnerChips(newChipPosition, 5, chips);

    return (connectedChips === 4) ? connectedChips : checkBottomRightChip(newChipPosition, chips, playerTurn);
};

const checkBottomRightChip = (chipPosition, chips, playerTurn) => {
    let connectedChips = 1;
    let newChipPosition = chipPosition;

    while (newChipPosition <= 35 && newChipPosition != 0 && newChipPosition != 6 && newChipPosition != 12 && newChipPosition != 18 && newChipPosition != 24 && newChipPosition != 30 && chips[newChipPosition + 5].className.includes(playerTurn) && connectedChips < 4) {
        ++connectedChips;
        newChipPosition +=5;
    }

    if (connectedChips === 4) getWinnerChips(newChipPosition, -5, chips);

    return connectedChips;
};

const checkTopRightChip = (chipPosition, chips, playerTurn) => {
    let connectedChips = 1;
    let newChipPosition = chipPosition;

    while (newChipPosition <= 34 && newChipPosition != 5 && newChipPosition != 11 && newChipPosition != 17 && newChipPosition != 23 && newChipPosition != 29 && newChipPosition != 35 && chips[newChipPosition + 7].className.includes(playerTurn) && connectedChips < 4) {
        ++connectedChips;
        newChipPosition +=7;
    }

    if (connectedChips === 4) getWinnerChips(newChipPosition, -7, chips);

    return (connectedChips === 4) ? connectedChips : checkBottomLeftChip(newChipPosition, chips, playerTurn);
};

const checkBottomLeftChip = (chipPosition, chips, playerTurn) => {
    let connectedChips = 1;
    let newChipPosition = chipPosition;

    while (newChipPosition >= 7 && newChipPosition != 12 && newChipPosition != 18 && newChipPosition != 24 && newChipPosition != 30 && newChipPosition != 36 && chips[newChipPosition - 7].className.includes(playerTurn) && connectedChips < 4) {
        ++connectedChips;
        newChipPosition -= 7;
    }

    if (connectedChips === 4) getWinnerChips(newChipPosition, 7, chips);

    return connectedChips;
};

const ckeckIfWin = (chipPosition, chips, playerTurn) => {

    if (checkLeftChip(chipPosition, chips, playerTurn) === 4) return true;
    if (checkBottomChip(chipPosition, chips, playerTurn) === 4) return true;
    if (checkTopLeftChip(chipPosition, chips, playerTurn) === 4) return true;
    if (checkTopRightChip(chipPosition, chips, playerTurn) === 4) return true;
};

const checkIfTie = (chips) => {
    let insertedChips = 0

    chips.forEach((chip) => {
       if (chip.className.includes('red')) ++insertedChips;
       if (chip.className.includes('blue')) ++insertedChips;
    })
       
    return insertedChips === 42;
}

const checkWhatIsResult = (chipPosition, chips, playerTurn) => {
    if (ckeckIfWin(chipPosition, chips, playerTurn)) return playerTurn;
    if (checkIfTie(chips)) return 'tie';
};

export { checkWhatIsResult };