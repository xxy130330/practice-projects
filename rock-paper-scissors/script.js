function RockPaperScissors() {
  this.checkForWin = function() {
    var user = this.getChoice();
    var computer = this.getChoice();
    if (!user && !computer) {
      return;
    }

    if (user === "Scissors") {
      if (computer === "Paper") {
        return "Player wins: Scissors cuts paper";
      } else if (user === computer) {
        return "Both players choose scissors! Tie try again!";
      }

      return "Computer wins: Rock crushes scissors";
    } else if (user === "Rock") {
      if (computer === "Scissors") {
        return "Player wins: Rock crushes scissors";
      } else if (user === computer) {
        return "Both players choose rock! Tie try again!";
      }

      return "Computer wins: Paper covers rock";
    } else if (user === "Scissors") {
      if (computer === "Rock") {
        return "Player wins: Paper covers rock";
      } else if (user === computer) {
        return "Both players choose scissors! Tie try again";
      }

      return "Computer wins: Scissors cuts paper";
    }
  };

  this.getChoice = function() {
    var choices = ["Rock", "Paper", "Scissors"];
    var random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return choices[random];
    } else if (this.userChoice === 1) {
      return choices[random];
    } else {
      return choices[random];
    }
  };

  this.init = function() {
    console.log(this.checkForWin());
  };
  this.init();
}

var game = new RockPaperScissors();
