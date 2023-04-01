import {
  registredQuerySelectors,
  columnOne,
  columnTwo,
  columnThree,
  columnFour,
  columnFive,
  columnSix,
  columnSeven,
  playAgainButtom,
  feedback,
  chips,
  restartGameButtom,
  redPlayer,
  bluePlayer,
  playerTurnImage,
  connectFourGame,
  farewell,
  exitButton,
} from "./queryselectors.js";
import {
  handlePlayAgain,
  handleRestartGame,
  handleExitGame,
} from "./buttons.js";
import { changePlayerTurn, restartPlayerTurn } from "./changeplayerturn.js";
import {
  showElementContent,
  hideElementContent,
} from "./showandhideelements.js";
import { insertChipColor, emptyGameBoard } from "./insertchips.js";
import { appendElementsToDocument } from "./appendelementstodocument.js";
import { checkWhatIsResult } from "./checkwhatisresult.js";
import { startProcessChip } from "./processchip.js";
import { givePointsPlayer } from "./gamescore.js";
import { restarGame } from "./restartgame.js";

const handleProcessChip = (chip, chipsInColumn, playerTurn, feedback) => [
  startProcessChip(
    chip,
    playerTurn,
    feedback,
    insertChipColor,
    checkWhatIsResult,
    chips,
    givePointsPlayer,
    redPlayer,
    bluePlayer,
    showElementContent,
    playAgainButtom,
    changePlayerTurn,
    playerTurnImage
  ),
  ++chipsInColumn,
];

const startConnectFour = () => {
  let thereIsResult = false,
    playerTurn = "red",
    chipsInColumnOne = 0,
    chipsInColumnTwo = 0,
    chipsInColumnThree = 0,
    chipsInColumnFour = 0,
    chipsInColumnFive = 0,
    chipsInColumnSix = 0,
    chipsInColumnSeven = 0;

  appendElementsToDocument();
  registredQuerySelectors();

  const checkIfPlaying = (column, chipsInColumn) => {
    if (!thereIsResult)
      [[thereIsResult, playerTurn], chipsInColumn] = handleProcessChip(
        column[chipsInColumn],
        chipsInColumn,
        playerTurn,
        feedback
      );
    if (!thereIsResult) return chipsInColumn;
  };

  playAgainButtom.addEventListener(
    "click",
    () =>
      ([
        thereIsResult,
        playerTurn,
        [
          chipsInColumnOne,
          chipsInColumnTwo,
          chipsInColumnThree,
          chipsInColumnFour,
          chipsInColumnFive,
          chipsInColumnSix,
          chipsInColumnSeven,
        ],
        feedback.textContent,
      ] = handlePlayAgain(
        restarGame,
        hideElementContent,
        playAgainButtom,
        emptyGameBoard,
        chips,
        restartPlayerTurn,
        playerTurnImage
      ))
  );

  restartGameButtom.addEventListener(
    "click",
    () =>
      ([
        thereIsResult,
        playerTurn,
        [
          chipsInColumnOne,
          chipsInColumnTwo,
          chipsInColumnThree,
          chipsInColumnFour,
          chipsInColumnFive,
          chipsInColumnSix,
          chipsInColumnSeven,
        ],
        feedback.textContent,
      ] = handleRestartGame(
        redPlayer,
        bluePlayer,
        restarGame,
        hideElementContent,
        playAgainButtom,
        emptyGameBoard,
        chips,
        restartPlayerTurn,
        playerTurnImage
      ))
  );

  exitButton.addEventListener("click", () =>
    handleExitGame(
      hideElementContent,
      connectFourGame,
      showElementContent,
      farewell
    )
  );

  columnOne.forEach((hole) =>
    hole.addEventListener(
      "click",
      () => (chipsInColumnOne = checkIfPlaying(columnOne, chipsInColumnOne))
    )
  );

  columnTwo.forEach((hole) =>
    hole.addEventListener(
      "click",
      () => (chipsInColumnTwo = checkIfPlaying(columnTwo, chipsInColumnTwo))
    )
  );

  columnThree.forEach((hole) =>
    hole.addEventListener(
      "click",
      () =>
        (chipsInColumnThree = checkIfPlaying(columnThree, chipsInColumnThree))
    )
  );

  columnFour.forEach((hole) =>
    hole.addEventListener(
      "click",
      () => (chipsInColumnFour = checkIfPlaying(columnFour, chipsInColumnFour))
    )
  );

  columnFive.forEach((hole) =>
    hole.addEventListener(
      "click",
      () => (chipsInColumnFive = checkIfPlaying(columnFive, chipsInColumnFive))
    )
  );

  columnSix.forEach((hole) =>
    hole.addEventListener(
      "click",
      () => (chipsInColumnSix = checkIfPlaying(columnSix, chipsInColumnSix))
    )
  );

  columnSeven.forEach((hole) =>
    hole.addEventListener(
      "click",
      () =>
        (chipsInColumnSeven = checkIfPlaying(columnSeven, chipsInColumnSeven))
    )
  );
};

startConnectFour();
