export function getCardData() {
  const colors = decideColor();
  const words = getWords();
  return colors.map(function (card, i) {
    return { color: card, word: words[i] };
  });
}

export function getWords() {
  return [
    "fiets",
    "regen",
    "wolk",
    "rood",
    "taal",
    "muis",
    "water",
    "oceaan",
    "verdriet",
    "klimaat",
    "oog",
    "tafel",
    "kunst",
    "maastricht",
    "concept",
    "paard",
    "rond",
    "doos",
    "speaker",
    "viool",
    "alpen",
    "sindey",
    "wijn",
    "vos",
    "bier",
  ];
}

function decideColor() {
  // const amount = {
  //   blue: 9,
  //   red: 8,
  //   black: 1,
  //   empty: 7,
  // };
  const colors = [
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "black",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ];

  return shuffleArray(colors);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
