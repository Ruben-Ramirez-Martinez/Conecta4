const insertRedChip = (chip) => chip.classList.add('red-chip');

const insertBlueChip = (chip) => chip.classList.add('blue-chip');

const insertChipColor = (chip, playerTurn) => playerTurn === 'red' ? insertRedChip(chip) : insertBlueChip(chip);

const emptyGameBoard = (chips) => chips.forEach(chip => (chip.classList.remove('red-chip')) + (chip.classList.remove('blue-chip')) + (chip.classList.remove('win-chips')));


export { insertChipColor, emptyGameBoard };