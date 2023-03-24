import { registredQuerySelectors, columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven, playAgainButtom, feedback, chips, restartGameButtom, redPlayer, bluePlayer, playerTurnImage, connectFourGame, farewell, exitButton } from "./queryselectors.js";
import { handlePlayAgain, handleRestartGame, handleExitGame } from "./buttons.js";
import { changePlayerTurn, restartPlayerTurn } from "./changeplayerturn.js";
import { showElementContent, hideElementContent } from "./showandhideelements.js";
import { insertChipColor, emptyGameBoard } from "./insertchips.js";
import { appendElementsToDocument } from "./appendelementstodocument.js";
import { checkWhatIsResult } from "./checkwhatisresult.js";
import { startProcessChip } from "./processchip.js";
import { givePointsPlayer } from "./gamescore.js";
import { restarGame } from "./restartgame.js";

const handleProcessChip = (chip, chipsInColumn, playerTurn, feedback) => [startProcessChip(chip, playerTurn, feedback, insertChipColor, checkWhatIsResult, chips, givePointsPlayer, redPlayer, bluePlayer, showElementContent, playAgainButtom, changePlayerTurn, playerTurnImage), ++chipsInColumn];

const startConnectFour = () => {

    let thereIsResult      = false,
        playerTurn         = 'red',
        chipsInColumnOne   = 0,
        chipsInColumnTwo   = 0,
        chipsInColumnThree = 0,
        chipsInColumnFour  = 0,
        chipsInColumnFive  = 0,
        chipsInColumnSix   = 0,
        chipsInColumnSeven = 0;

    appendElementsToDocument();
    registredQuerySelectors();

    playAgainButtom.addEventListener('click', () => [thereIsResult, playerTurn, [chipsInColumnOne, chipsInColumnTwo, chipsInColumnThree, chipsInColumnFour, chipsInColumnFive, chipsInColumnSix, chipsInColumnSeven], feedback.textContent] = handlePlayAgain(restarGame, hideElementContent, playAgainButtom, emptyGameBoard, chips, restartPlayerTurn, playerTurnImage));

    restartGameButtom.addEventListener('click', () => [thereIsResult, playerTurn, [chipsInColumnOne, chipsInColumnTwo, chipsInColumnThree, chipsInColumnFour, chipsInColumnFive, chipsInColumnSix, chipsInColumnSeven], feedback.textContent] = handleRestartGame(redPlayer, bluePlayer, restarGame, hideElementContent, playAgainButtom, emptyGameBoard, chips, restartPlayerTurn, playerTurnImage));

    exitButton.addEventListener('click', () => handleExitGame(hideElementContent, connectFourGame, showElementContent, farewell));

    columnOne.forEach((hole)   => hole.addEventListener('click', () => (!thereIsResult) ? [[thereIsResult, playerTurn], chipsInColumnOne]   = handleProcessChip(columnOne[chipsInColumnOne],     chipsInColumnOne,   playerTurn, feedback) : false));
    
    columnTwo.forEach((hole)   => hole.addEventListener('click', () => (!thereIsResult) ? [[thereIsResult, playerTurn], chipsInColumnTwo]   = handleProcessChip(columnTwo[chipsInColumnTwo],     chipsInColumnTwo,   playerTurn, feedback) : false));

    columnThree.forEach((hole) => hole.addEventListener('click', () => (!thereIsResult) ? [[thereIsResult, playerTurn], chipsInColumnThree] = handleProcessChip(columnThree[chipsInColumnThree], chipsInColumnThree, playerTurn, feedback) : false));

    columnFour.forEach((hole)  => hole.addEventListener('click', () => (!thereIsResult) ? [[thereIsResult, playerTurn], chipsInColumnFour]  = handleProcessChip(columnFour[chipsInColumnFour],   chipsInColumnFour,  playerTurn, feedback) : false));

    columnFive.forEach((hole)  => hole.addEventListener('click', () => (!thereIsResult) ? [[thereIsResult, playerTurn], chipsInColumnFive]  = handleProcessChip(columnFive[chipsInColumnFive],   chipsInColumnFive,  playerTurn, feedback) : false));

    columnSix.forEach((hole)   => hole.addEventListener('click', () => (!thereIsResult) ? [[thereIsResult, playerTurn], chipsInColumnSix]   = handleProcessChip(columnSix[chipsInColumnSix],     chipsInColumnSix,   playerTurn, feedback) : false));

    columnSeven.forEach((hole) => hole.addEventListener('click', () => (!thereIsResult) ? [[thereIsResult, playerTurn], chipsInColumnSeven] = handleProcessChip(columnSeven[chipsInColumnSeven], chipsInColumnSeven, playerTurn, feedback) : false));
};

startConnectFour();