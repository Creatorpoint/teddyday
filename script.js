const lines = [
  "Aaj Teddy Day hai 🧸",
  "Aur ek baat dil se kehni thi 😳",
  "Tum mili toh life thodi zyada cute ho gayi 🥺",
  "Main thoda pagal hoon…",
  "Par tumhare liye bilkul serious hoon ❤️"
];

let i = 0;

const story = document.getElementById("story");
const nextBtn = document.getElementById("nextBtn");
const proposal = document.getElementById("proposal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const music = document.getElementById("music");

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
  music.volume = 0.7;
  music.play();   // 🎶 AUTO PLAY ON YES

  confetti({
    particleCount: 300,
    spread: 140,
    origin: { y: 0.6 }
  });

  result.innerHTML =
    "🎉 YAYYYY 😍💖<br>" +
    "Tumne YES bol diya 🥹<br>" +
    "Ab tum meri ho 💍";

  proposal.style.display = "none";
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random()*80 + "%";
  noBtn.style.left = Math.random()*80 + "%";
};
