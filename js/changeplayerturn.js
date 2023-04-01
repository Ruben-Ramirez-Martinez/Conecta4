const changePlayerTurn = (playerTurn, playerTurnImage) => {
  if (playerTurn === "red") {
    playerTurnImage.src = "./images/bluechip.WebP";
    playerTurnImage.alt = "Blue player turn";
    return (playerTurn = "blue");
  }

  if (playerTurn === "blue") {
    playerTurnImage.src = "./images/redchip.WebP";
    playerTurnImage.alt = "Red player turn";
    return (playerTurn = "red");
  }
};

const restartPlayerTurn = (playerTurnImage) =>
  (playerTurnImage.src = "./images/redchip.WebP") +
  (playerTurnImage.alt = "Red player turn");

export { changePlayerTurn, restartPlayerTurn };
