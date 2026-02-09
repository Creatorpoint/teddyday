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

// 🎵 CREATE AUDIO VIA JS (BEST METHOD)
const music = new Audio("https://files.catbox.moe/f8c2jr.m4a");
music.volume = 0.8;

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
  // 🎶 FORCE PLAY
  music.currentTime = 0;
  music.play().catch(() => {});

  // 🎉 FORCE POPPER
  confetti({
    particleCount: 400,
    spread: 160,
    startVelocity: 45,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 300,
      spread: 120,
      origin: { y: 0.4 }
    });
  }, 400);

  result.innerHTML = `
    🌸 YAYYYY 😍💖 🌸<br>
    Tumne YES bol diya 🥹✨<br>
    Ab tum meri ho 💍
  `;

  proposal.style.display = "none";
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
};
