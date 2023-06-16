// script.js

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const diceImage1 = `images/dice${randomNumber1}.png`;
const diceImage2 = `images/dice${randomNumber2}.png`;

const leftImgElement = document.querySelector('.img1');
leftImgElement.src = diceImage1;

const rightImgElement = document.querySelector('.img2');
rightImgElement.src = diceImage2;

const h1Element = document.querySelector('h1.font');

if (randomNumber1 > randomNumber2) {
  h1Element.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  h1Element.textContent = "Player 2 Wins!";
} else {
  h1Element.textContent = "It's a Draw!";
}
