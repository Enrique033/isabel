const memories = document.querySelectorAll(".memory");

memories.forEach((m, i) => {
  setTimeout(() => {
    m.classList.add("show");
  }, i * 400);
});

setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = "14px";
  heart.style.opacity = "0.6";
  heart.style.animation = "float 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 1500);
