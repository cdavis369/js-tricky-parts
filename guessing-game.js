function guessingGame() {
  let guesses = 0;
  const target = Math.floor(Math.random() * 100);
  let won = false;

  return function game(guess) {
    if (won) {
      return "The game is over, you already won!";
    }

    guesses++;
    if (guess === target) {
      won = true;
      return `You win! You found ${target} in ${guesses} guesses.`;
    } else if (guess < target) {
      return `${guess} is too low!`;
    } else if (guess > target) {
      return `${guess} is too high!`;
    }
  };
}

module.exports = { guessingGame };
