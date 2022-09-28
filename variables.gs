const WEBHOOK = "<YOUR_WEBHOOK>";
const BUTTON_URL = "<BUTTON_URL>";
const gifsNumber = 5;
const GIFS = [
  "https://media.giphy.com/media/G7iLo8gSAwKj9xdh5t/giphy.gif",
  "https://media.giphy.com/media/2WGS9i0pKO6s2YI2t2/giphy.gif",
  "https://media.giphy.com/media/TpegB7FzEXfnWlrorG/giphy.gif",
  "https://media.giphy.com/media/3o6gaSIn4dGiY094Os/giphy-downsized-large.gif",
  "https://media.giphy.com/media/gLjD6hjRaLcFslzpvR/giphy.gif",
];
let MESSAGE = ""
function buildMessage () {
  const randomId = Math.floor(Math.random() * gifsNumber);
  MESSAGE = `<YOUR_MESSAGE> \n${GIFS[randomId]}`;
}
