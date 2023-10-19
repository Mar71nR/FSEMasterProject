function setup() {
  createCanvas(400, 400);
  
    // Get a random element from an array using the random(Array) syntax
let words = ['imminent', 'distance', 'handsome', 'toys', 'sparkle','sleep', 'addition', 'unsightly', 'chicken', 'hulking', 'pig' ,'abandoned'];
let word = random(words); // select random word
text(word, 10, 50); // draw the word
describe(`word displayed at random. Either imminent, distance, handsome, toys, sparkle,sleep, addition, unsightly, chicken, hulking, pig, or abandoned`);
  
}

