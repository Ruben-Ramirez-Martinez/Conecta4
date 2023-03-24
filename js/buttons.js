const handlePlayAgain = (restarGame, hideElementContent, playAgainButtom, emptyGameBoard, chips, restartPlayerTurn, playerTurnImage) => restarGame(hideElementContent, playAgainButtom, emptyGameBoard, chips, restartPlayerTurn, playerTurnImage);

const handleRestartGame = (redPlayer, bluePlayer, restarGame, hideElementContent, playAgainButtom, emptyGameBoard, chips, restartPlayerTurn, playerTurnImage) => {
    redPlayer.textContent = bluePlayer.textContent = 0;
    return restarGame(hideElementContent, playAgainButtom, emptyGameBoard, chips, restartPlayerTurn, playerTurnImage);
};

const handleExitGame = (hideElementContent, connectFourGame, showElementContent, farewell) => hideElementContent(connectFourGame) + showElementContent(farewell);

export { handlePlayAgain, handleRestartGame, handleExitGame };