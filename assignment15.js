
function rps(player1, player2) {
    if (player1 == "r") {
      if (player2 == "r") {
        return "Tie";
      } else if (player2 == "p") {
        return "Paper beats rock. Player 2 wins.";
      } else if (player2 == "s") {
        return "Rock beats scissors. Player 1 wins.";
      } else {
        return "Player 2 made an invalid selection.";
      }
    } else if (player1 == "p") {
      if (player2 == "r") {
        return "Paper beats rock. Player 1 wins.";
      } else if (player2 == "p") {
        return "Tie";
      } else if (player2 == "s") {
        return "Scissors beat paper. Player 2 wins.";
      } else {
        return "Player 2 made an invalid selection.";
      }
    } else if (player1 == "s") {
      if (player2 == "r") {
        return "Rock beats scissors. Player 2 wins.";
      } else if (player2 == " P") {
        return "Scissors beats paper. Player 1 wins.";
      } else if (player2 == "s ") {
        return "Tie";
      } else {
        return "Player 2 made an invalid selection.";
      }
    } else {
      return "Player 1 made an invalid selection.";
    }
  }

  function test(name, expected, actual) {
    if (expected === actual) {
      console.log(
        name +
          ": " +
          "\nTest passed. Expected: " +
          expected +
          " ,is equal to Actual: " +
          actual +
          "."
      );
    } else {
      console.log(
        name +
          ": " +
          "\nTest failed. Expected: " +
          expected +
          " ,is not equal to Actual: " +
          actual +
          "."
      );
    }
  }

  // TEST 1: Player 1: rock; player 2: rock

  test("rock, rock", "Tie", "Tie");

  /*rock, rock: 
  Test passed. Expected: Tie is equal to Actual: Tie.*/

  // TEST 2: Player 1: rock; player 2: paper

  test(
    "rock, paper",
    "Paper beats rock. Player 2 wins.",
    "Player 2 made an invalid selection."
  );

  /*
  rock, paper: 
  Test failed. Expected: Paper beats rock. Player 2 wins. is not equal to Actual: Player 2 made an invalid selection
  */

  // TEST 3: Player 1: rock; player 2: scissors

  test(
    "rock, scissors",
    "Rock beats scissors. Player 1 wins.",
    "Rock beats scissors. Player 1 wins."
  );

  /*
  rock, scissors: 
  Test passed. Expected: Rock beats scissors. Player 1 wins. is equal to Actual: Rock beats scissors. Player 1 wins
  */

  // TEST 4: Player 1: paper; player 2: rock

  test(
    "paper, rock",
    "Paper beats rock. Player 1 wins.",
    "Paper beats rock. Player 2 wins"
  );

  /*
  paper, rock: 
  Test failed. Expected: Paper beats rock. Player 1 wins. is not equal to Actual: Paper beats rock. Player 2 wins.
  */

  // TEST 5: Player 1: paper; player 2: paper

  test("paper, paper",
  "Tie",
  "Tie");

  /*
  paper, paper: 
  Test passed. Expected: Tie is equal to Actual: Tie.
  */

  // TEST 6: Player 1: paper; player 2: scissors

  test("paper, scissors",
  "Scissors beats paper. Player 2 wins.",
  "Player 2 made an invalid selection");

  /*
  paper, scissors: 
  Test failed. Expected: Scissors beats paper. Player 2 wins. is not equal to Actual: Player 2 made an invalid selection.
  */

  // TEST 7: Player 1: scissors; player 2: rock

  test("scissors, rock",
  "Rock beats scissors. Player 2 wins.",
  "Rock beats scissors. Player 2 wins.");

  /*
  scissors, rock: 
  Test passed. Expected: Rock beats scissors. Player 2 wins. is equal to Actual: Rock beats scissors. Player 2 wins.
  */

  // TEST 8: Player 2: scissors; player 2: paper

  test("scissors, paper",
  "Scissors beats paper. Player 1 wins.",
  "Player 2 made an invalid selection");

  /*
  scissors, paper: 
  Test failed. Expected: Scissors beats paper. Player 1 wins. is not equal to Actual: Player 2 made an invalid selection
  */

  // TEST 9: Player 2: scissors; player 2: scissors

  test("scissors, scissors",
  "Tie",
  "Player 2 made an invalid selection");
  /*
  scissors, scissors: 
  Test failed. Expected: Tie is not equal to Actual: Player 2 made an invalid selection.
  */ 