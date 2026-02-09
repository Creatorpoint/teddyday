const story = document.getElementById("story");
const nextBtn = document.getElementById("nextBtn");
const proposal = document.getElementById("proposal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const music = document.getElementById("bgMusic");

const lines = [
  "Aaj Teddy Day hai 🧸💖",
  "Aur ek teddy ke saath ek baat bhi deni thi 😳",
  "Tum mili toh life thodi zyada cute ho gayi 🥺",
  "Main serious kam… tumhare saath happy zyada hoon 😄",
  "Toh socha… dil ki baat bol hi doon 💕"
];

let i = 0;
story.innerText = lines[i];

nextBtn.onclick = () => {
  i++;
  if (i < lines.length) {
    story.innerText = lines[i];
  } else {
    nextBtn.style.display = "none";
    proposal.classList.remove("hidden");
  }
};

yesBtn.onclick = () => {
  result.innerHTML = "YAYYY 🥹💖<br>Ab officially tum meri ho 💍<br>Happy Teddy Day Sargam Jii 🧸✨";
  proposal.style.display = "none";
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random()*80 + "%";
  noBtn.style.left = Math.random()*80 + "%";
};

function toggleMusic() {
  music.paused ? music.play() : music.pause();
}
