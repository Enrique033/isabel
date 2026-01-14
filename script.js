const screens = document.querySelectorAll(".screen");
const buttons = document.querySelectorAll("button");

let current = 0;

// EFECTO DE ESCRITURA
function typeEffect(element, speed = 40) {
  const text = element.getAttribute("data-text");
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Ejecutar en la primera pantalla
typeEffect(screens[0].querySelector(".type"));

// Navegación entre pantallas
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {

    if (btn.id === "playMusic") return;

    screens[current].classList.remove("active");
    current++;

    if (current < screens.length) {
      screens[current].classList.add("active");
      const text = screens[current].querySelector(".type");
      if (text) typeEffect(text);
    }
  });
});


// CORAZONES FLOTANDO
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 500);

// ESTRELLAS
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.5,
  alpha: Math.random(),
  speed: Math.random() * 0.02 + 0.01
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    s.alpha += s.speed;
    if (s.alpha <= 0 || s.alpha >= 1) s.speed *= -1;

    ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
