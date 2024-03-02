

let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
  if (state == false) {
    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});

let lyricsText = [
  { text:"Guess there's something about it", duration: 3000},
  { text:"That I can't explain", duration: 3000},
  { text:"We could see other people", duration: 2800},
   { text:"But it's never the same", duration: 3200},
   { text:"You could be in Toronto", duration: 3500},
   { text:"And I could be in L.A", duration: 3000},
    { text:"And we could wait too long", duration: 2800},
    { text:"But it's never too late", duration: 3000},
   { text:"And if twenty years went by without you", duration: 3000},
    { text:"I'd know our feelings wouldn't change", duration: 3500},
    { text:"We've got that", duration: 2800},
    { text:"different kind of love", duration: 2800},
    { text:"That's stronger than the both of us", duration: 2800},
    { text:"No matter what", duration: 2500},
    { text:"We've got that different kind of love", duration: 3000},
   { text:"We've got that", duration: 2500},
   { text:"We don't have to talk", duration: 2500},
   { text:"To know this love will never stop", duration: 3000},
   { text:"No matter what", duration: 2500},
   "We've got that different kind of love",
  // Add more lyrics lines as needed
];


let currentLineIndex = 0;
let lyricsElement = document.querySelector(".lyrics");
let audio = document.getElementById("myAudio");

let intervalId;

audio.addEventListener("play", () => {
  currentLineIndex = 0;
  displayNextLine();
});

audio.addEventListener("pause", () => {
  clearInterval(intervalId);
  lyricsElement.innerHTML = ""; // Clear lyrics when paused
});

function displayNextLine() {
  if (currentLineIndex < lyricsText.length) {
    let line = lyricsText[currentLineIndex];
    lyricsElement.innerHTML = line.text;
    currentLineIndex++;
    intervalId = setTimeout(displayNextLine, line.duration);
  } else {
    lyricsElement.innerHTML = ""; // Clear lyrics when all lines are displayed
  }
}
