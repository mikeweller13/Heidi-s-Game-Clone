var Game = function(){
  this.player = prompt("What's your name?");
  this.answer = 7;

  this.play = function() {
    var guess = parseInt(prompt("Hi " + this.player + "! How many ingredients are in my french toast recipe? If you get it right, I'll give you the recipe."), 10);
    var paragraph = document.getElementsByTagName("p");
    var createParagraph = document.createElement("p");

    while (guess !== this.answer) {
      if (guess > this.answer) {
        paragraph[0].innerHTML = "Too high! Guess a lower number, " + this.player + ".";
        paragraph[0].appendChild(createParagraph);
        paragraph[1].textContent = "You guessed " + guess + ". Better luck next time.";
        guess = parseInt(prompt("Guess again..."), 10);

      } else if (guess < this.answer) {
        paragraph[0].innerHTML = "Too low! Guess a higher number, " + this.player + ".";
        paragraph[0].appendChild(createParagraph);
        paragraph[1].textContent = "You guessed " + guess + ". Better luck next time.";
        guess = parseInt(prompt("Guess again..."), 10);

      } else {
        paragraph[0].innerHTML = "C'mon " + this.player + ", that's not a number!";
        paragraph[0].appendChild(createParagraph);
        paragraph[1].textContent = "It's a good thing we're friends.";
        guess = parseInt(prompt("Guess again..."), 10);
      }
    }
    paragraph[0].innerHTML = "That's right, " + this.player + "! Let's have breakfast!";
    document.getElementById("recipe").style.display = "block";
  };
};

var game = new Game();

game.play();
