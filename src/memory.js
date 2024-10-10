class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    // ... write your code here
    // Método de Fisher-Yates
    if (!cards || cards.length <2) {
      return undefined;
    } else {
      let originalOrder = [...cards]; // Copia del array original para comparación
      let isSameOrder;

      do {
        for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));  // Genera un número aleatorio entre 0 y i
          [cards[i], cards[j]] = [cards[j], cards[i]];    // Intercambia array[i] con array[j]
        }
         // Comparamos si el nuevo orden es igual al original
        isSameOrder = originalOrder.every((card, index) => card === cards[index]);
      } while (isSameOrder); // Si el orden no cambió, vuelve a mezclar

      return cards;    
    }
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
  }
}
