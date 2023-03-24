let bluePlayer,
    farewell,
    redPlayer,
    connectFourGame,
    playerTurnImage,
    columnSeven,
    columnThree,
    columnFour,
    columnFive,
    columnOne,
    columnTwo,
    columnSix,
    playAgainButtom,
    feedback,
    chips,
    restartGameButtom,
    exitButton;

const registredQuerySelectors = () => {

bluePlayer        = document.querySelector('.blue p:nth-child(2)'),
farewell          = document.querySelector('.farewell-container'),
redPlayer         = document.querySelector('.red p:nth-child(2)'),
connectFourGame   = document.querySelector('.connect-four-game'),
playerTurnImage   = document.querySelector('.player-turn-image'),
columnSeven       = document.querySelectorAll('.column-seven'),
columnThree       = document.querySelectorAll('.column-three'),
columnFour        = document.querySelectorAll('.column-four'),
columnFive        = document.querySelectorAll('.column-five'),
columnOne         = document.querySelectorAll('.column-one'),
columnTwo         = document.querySelectorAll('.column-two'),
columnSix         = document.querySelectorAll('.column-six'),
playAgainButtom   = document.querySelector('.play-again'),
feedback          = document.querySelector('.feedback'),
chips             = document.querySelectorAll('.chip'),
restartGameButtom = document.querySelector('.restart'),
exitButton        = document.querySelector('.exit');
};

export { registredQuerySelectors, columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven, playAgainButtom, feedback, chips, restartGameButtom, redPlayer, bluePlayer, playerTurnImage, connectFourGame, farewell, exitButton };