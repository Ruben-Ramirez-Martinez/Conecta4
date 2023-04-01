const showFeedback = (feedback, whoWins) =>
  whoWins === "red"
    ? (feedback.textContent = "The winner is Player Red")
    : whoWins === "blue"
    ? (feedback.textContent = "The winner is Player Blue")
    : (feedback.textContent = "You have tied the game");

const givePointsPlayer = (whatIsResult, feedback, redPlayer, bluePlayer) =>
  whatIsResult === "tie"
    ? showFeedback(feedback, whatIsResult)
    : whatIsResult === "red"
    ? showFeedback(feedback, whatIsResult) + ++redPlayer.textContent
    : showFeedback(feedback, whatIsResult) + ++bluePlayer.textContent;

export { givePointsPlayer };
