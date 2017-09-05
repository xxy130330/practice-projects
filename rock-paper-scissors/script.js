function RockPaperScissors() {

  this.choices = ["rock", "paper", "scissors"];
  this.user = null;
  this.computer = null;


  this.askUserChoice = function() {
    console.log("Make a choice, rock, paper or scissors?");
  };

  this.submitUserChoice = function (choice) {
    if (this.choices.indexOf(choice) !== -1) {
      this.user = choice;
      return "You have chosen " + choice;
    } else {
      return "Invalid choice. Choose rock, paper or scissors";
    }
  };

  this.checkForWin = function() {
    var user = this.user;
    var computer = this.computer;

    if (user === null) {
      return "User still needs to make a choice";
    }

    if (user === "scissors") {
      if (computer === "paper") {
        return "Player wins: Scissors cuts paper";
      } else if (user === computer) {
        return "Both players choose scissors! Tie try again!";
      }

      return "Computer wins: Rock crushes scissors";
    } else if (user === "rock") {
      if (computer === "scissors") {
        return "Player wins: Rock crushes scissors";
      } else if (user === computer) {
        return "Both players choose rock! Tie try again!";
      }

      return "Computer wins: Paper covers rock";
    } else if (user === "scissors") {
      if (computer === "rock") {
        return "Player wins: Paper covers rock";
      } else if (user === computer) {
        return "Both players choose scissors! Tie try again";
      }

      return "Computer wins: Scissors cuts paper";
    }
  };

  this.getComputerChoice = function() {
    var random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return this.choices[random];
    } else if (random === 1) {
      return this.choices[random];
    } else {
      return this.choices[random];
    }
  };

  this.init = function() {
    this.computer = this.getComputerChoice();
    this.askUserChoice();
  };

  this.reset = function() {
    this.computer = this.getComputerChoice();
    this.user = null;
    this.askUserChoice();
  }

  this.init();
}

var game = new RockPaperScissors();
