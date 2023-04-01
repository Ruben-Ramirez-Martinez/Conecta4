const restarGame = (
  hideElementContent,
  playAgainButtom,
  emptyGameBoard,
  chips,
  restartPlayerTurn,
  playerTurnImage
) => {
  hideElementContent(playAgainButtom);
  emptyGameBoard(chips);
  restartPlayerTurn(playerTurnImage);

  return [false, "red", [0, 0, 0, 0, 0, 0, 0], ""];
};

export { restarGame };
