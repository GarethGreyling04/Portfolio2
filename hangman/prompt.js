
// Create an array of words
var words = [
"guitar",
"fridge",
"monitor",
"jacket"
];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
var remainingLetters = word.length;
// The game loop
while (remainingLetters > 0) {
    //user can inpute lower and caps
    
//words= words.toLowercase();


// Show the player their progress
alert(answerArray.join(" "));
// Get a guess from the player
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
// Exit the game loop
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
// Update the game state with the guesss
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
             answerArray[j] = guess;
             remainingLetters--;
              }
         }
   }

// The end of the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
