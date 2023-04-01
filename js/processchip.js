const startProcessChip = (
  chip,
  playerTurn,
  feedback,
  insertChipColor,
  checkWhatIsResult,
  chips,
  givePointsPlayer,
  redPlayer,
  bluePlayer,
  showAndHideElementContent,
  playAgainButtom,
  changePlayerTurn,
  playerTurnImage
) => {
  insertChipColor(chip, playerTurn);
  const whatIsResult = checkWhatIsResult(+chip.innerHTML, chips, playerTurn);
  console.log(+chip.innerHTML);
  if (whatIsResult)
    givePointsPlayer(whatIsResult, feedback, redPlayer, bluePlayer) +
      showAndHideElementContent(playAgainButtom);

  return [whatIsResult, changePlayerTurn(playerTurn, playerTurnImage)];
};

export { startProcessChip };
