class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    // Método de Fisher-Yates
    if (!this.cards) {
        return undefined;
      }
      for (let m = this.cards.length - 1; m > 0; m--) {
        // Seleccionar un elemento aleatorio
        const i = Math.floor(Math.random() * (m + 1));
    
        // Intercambiar el elemento actual con el elemento seleccionado
        [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
      }
    
      return this.cards;    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked ++;
    if (card1 === card2) {
      this.pairsGuessed ++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
   return this.pairsGuessed * 2 === this.cards.length;
  }
}
