class AppendElementAndAttributeToDocument {

    constructor(fatherElement, childElement, numberOfChilds, classToAdd, attribute, value, beforeElement) {

        this.numberOfChilds = numberOfChilds;
        this.beforeElement  = beforeElement;
        this.fatherElement  = fatherElement;
        this.childElement   = childElement;
        this.classToAdd     = classToAdd;
        this.attribute      = attribute;
        this.value          = value;
    };

    appendChildElementAndAttribute() {

        for (let i = 0; i < this.numberOfChilds; i++) {
            const childElement  = document.createElement(this.childElement);
            const fatherElement = document.querySelector(this.fatherElement);

            if (this.classToAdd && this.classToAdd.length !== 1) childElement.className = this.classToAdd[i];
            if (this.classToAdd && this.classToAdd.length === 1) childElement.className = this.classToAdd[0];
            if (this.attribute === 'src') (childElement.src = this.value[0]) + (childElement.alt = this.value[1]);
            if (this.attribute === 'textContent') childElement.textContent = this.value[i];
            fatherElement.appendChild(childElement);
        };
    };

    insertBeforeElement() {
        for (let i = 0; i < this.numberOfChilds; i++) {
            const childElement  = document.createElement(this.childElement);
            const beforeElement = document.querySelector(this.beforeElement);
            childElement.className = this.classToAdd;
            document.querySelector(this.fatherElement).insertBefore(childElement, beforeElement);
        };
    };
};

const appendElementsToDocument = () => {
    new AppendElementAndAttributeToDocument('body', 'main', 1, 'connect-container', '', '', 'script').insertBeforeElement();
    new AppendElementAndAttributeToDocument('main', 'section', 2, ['connect-four-game', 'farewell-container display-none']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('section', 'div', 3, ['score-container', 'connect', 'keypad-container']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.score-container', 'div', 2, ['player-points red', 'player-points blue']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.red', 'p', 2, '', 'textContent', ['Red', 0]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.blue', 'p', 2, '', 'textContent', ['Blue', 0]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.score-container', 'span', 1, ['feedback']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.score-container', 'button', 1, ['play-again display-none'], 'textContent', ['Play Again']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'div', 6, ['chip column-one'], 'textContent', [0, 1, 2, 3, 4, 5]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'div', 6, ['chip column-two'], 'textContent', [6, 7, 8, 9, 10, 11]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'div', 6, ['chip column-three'], 'textContent', [12, 13, 14, 15, 16, 17]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'div', 6, ['chip column-four'], 'textContent', [18, 19, 20, 21, 22, 23]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'div', 6, ['chip column-five'], 'textContent', [24, 25, 26, 27, 28, 29]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'div', 6, ['chip column-six'], 'textContent', [30, 31, 32, 33, 34, 35]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'div', 6, ['chip column-seven'], 'textContent', [36, 37, 38, 39, 40, 41]).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.connect', 'img', 1, ['board'], 'src', ['./images/conecta4.WebP', 'Image of connect four board']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.keypad-container', 'div', 2, ['player-turn', 'button-container']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.player-turn', 'p', 1, '', 'textContent', ['PLAYER TURN:']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.player-turn', 'img', 1, ['player-turn-image'], 'src', ['./images/redchip.WebP', 'Red player turn']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.button-container', 'button', 2, ['restart', 'exit'], 'textContent', ['Restart Game', 'Exit']).appendChildElementAndAttribute();
    new AppendElementAndAttributeToDocument('.farewell-container', 'p', 1, '', 'textContent', ['Thank you very much for playing Connect4. See you soon.']).appendChildElementAndAttribute();
};

export { appendElementsToDocument };