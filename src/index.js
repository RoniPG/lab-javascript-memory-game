const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let timeoutId = null;
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if (!timeoutId) {

        card.classList.add('turned');

        memoryGame.pickedCards.push(card);
        console.log(memoryGame.pickedCards.length);

        if (memoryGame.pickedCards.length === 2) {
          const check = memoryGame.checkIfPair(
            memoryGame.pickedCards[0].getAttribute('data-card-name'),
            memoryGame.pickedCards[1].getAttribute('data-card-name')
          );

          const pairsClicked = document.getElementById('pairs-clicked');
          pairsClicked.innerHTML = '';
          const numberOfPairsClicked = memoryGame.pairsClicked;
          const pairsClickedTextNode = document.createTextNode(`${numberOfPairsClicked}`);
          pairsClicked.appendChild(pairsClickedTextNode);

          if (!check) {
            timeoutId = setTimeout(() => {
              timeoutId = null;
              console.log(memoryGame.pickedCards[0]);
              console.log(memoryGame.pickedCards[1]);

              memoryGame.pickedCards[0].classList.toggle('turned');
              memoryGame.pickedCards[1].classList.toggle('turned');

              memoryGame.pickedCards = [];
            }, 1_500);

          } else {
            memoryGame.pickedCards = [];
          }

          const pairsGuessed = document.getElementById('pairs-guessed');
          pairsGuessed.innerHTML = '';
          const numberOfpairsGuessed = memoryGame.pairsGuessed;
          const pairsGuessedTextNode = document.createTextNode(`${numberOfpairsGuessed}`);
          pairsGuessed.appendChild(pairsGuessedTextNode);

        }
        const isFinished = memoryGame.checkIfFinished();
        if (isFinished) {
          alert('You won!!!');
        }
      }
    });
  });
});
