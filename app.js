//An Array of puns
const puns = [
  "Can February March? No, but April May.",
  "Need an ark to save two of every animal? I noah guy.",
  "My grandpa has the heart of the lion and a lifetime ban from the zoo.",
  "I lost my mood ring and I don’t know how to feel about it!",
  "A cross-eyed teacher couldn’t control his pupils.",
  "There was a kidnapping at school yesterday. Don’t worry, though – he woke up!",
  "What do you call an alligator in a vest? An investigator.",
  "What’s the difference between a hippo and a zippo? One is really heavy and the other is a little lighter!",
  "I just found out that I’m color blind. The news came completely out of the green!",
  "People that can't distinguish between etymology and entomology bug me in ways I cannot put into words",
  "Q: What’s the best thing about Switzerland? A: Well, the flag is a big plus.",
  "Why can’t you run through a campground? You can only ran, because it’s past tents.",
  "I saw an ad for burial plots, but that’s the last thing I need.",
  "Did you hear about the silk worm race? It ended in a tie.",
  "I got fired from the calendar factory, just for taking a day off.",
  "Clones are people two.",
  "I wanted to learn how to drive a stick shift, but I couldn’t find a manual.",
  "I put up a high-voltage electric fence around my house. My neighbor is dead against it.",
  "What are windmills’ favorite genre of music? They’re big metal fans.",
  "The past, present, and future walk into a bar. It was tense.",
  "Shopping centers, you’ve seen one, you’ve seen the mall.",
  "My ceiling isn’t the best, but it’s up there.",
  "I love whiteboards. They’re re-markable.",
  "I tried to make a belt out of watches. It was a waist of time.",
];

//Set "joke" as empty to later be redefined
let joke = "";

//function to pick a random pun
function randomiser() {
  random = puns[Math.floor(Math.random() * puns.length)];
  joke = random;

  //grabbing the element from the HTML and setting it's text = to "joke"
  let randomJoke = document.getElementById("jokeEl");
  randomJoke.textContent = joke;
}

//invoking the function
randomiser();
