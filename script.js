function move(btn){
  btn.style.position = "absolute";
  btn.style.left = Math.random()*80 + "%";
  btn.style.top = Math.random()*80 + "%";
}

function yes(){
  document.getElementById("msg").innerHTML =
    "YAYYY 🥳💖 Mujhe pata tha tum YES hi bologi 😘";
}
