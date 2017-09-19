/**
 * @constructor RockPaperScissors
 */

function RockPaperScissors() {
  /**
   * Define properties
   * possibleChoices - property that is an array of choices @type {Array}
   * userChoice - property with our user choice @type {String}
   * computerChoice - property with our computer choice @type {String}
   */
  this.possibleChoices = ["rock", "paper", "scissors"];
  this.userChoice = null;
  this.computerChoice = null;

  /**
   * getComputerChoice - randomly gets a number from 0-2 and will return a choice based on that index
   * @return {String}
   */
  this.getComputerChoice = function() {
    var random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return this.possibleChoices[random];
    } else if (random === 1) {
      return this.possibleChoices[random];
    } else {
      return this.possibleChoices[random];
    }
  };
  
  /**
   * askUserChoice - function when called will log to our console to choose "rock, paper, or scissors"
   */
  this.askUserChoice = function() {
    console.log("Make a choice, rock, paper or scissors?");
  };

  /**
   * submitUserChoice - function when called will verify the submitted choice is valid
   * @return {String}
   */
  this.submitUserChoice = function (choice) {
    if (this.possibleChoices.indexOf(choice) !== -1) {
      this.userChoice = choice;
      return "You have chosen " + choice;
    } else {
      return "Invalid choice. Choose rock, paper or scissors";
    }
  };

  /**
   * init - assigns a value to our computer choice and logs out to the user to submit their choice
   */
  this.init = function() {
    this.computerChoice = this.getComputerChoice();
    this.askUserChoice();
  };
  
  /**
   * reset - reassigns a value to our computer choice, resets user choice and relog to the user to submit their choice
   */
  this.reset = function() {
    this.computerChoice = this.getComputerChoice();
    this.userChoice = null;
    this.askUserChoice();
  }

  /**
   * checkForWin - function to compare the random computer choice with the user submitted choice
   * @return {String}
   */
  this.checkForWin = function() {
    var user = this.userChoice;
    var computer = this.computerChoice;

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

  this.init();
}

/**
 * Create a new game based off our constructor function
 */
var game = new RockPaperScissors();
