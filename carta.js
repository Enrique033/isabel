const p = document.getElementById("text");
const text = p.textContent;   // 👈 IMPORTANTE
p.textContent = "";

let i = 0;

const interval = setInterval(() => {
  if (i < text.length) {
    p.textContent += text[i];
    i++;
  } else {
    clearInterval(interval);
  }
}, 25);

// p.innerText = "";
// ...

const signature = document.getElementById("signature");
const sigText = signature.textContent;
signature.textContent = "";

setTimeout(() => {
  let i = 0;
  signature.style.opacity = 1;

  const sigInterval = setInterval(() => {
    if (i < sigText.length) {
      signature.textContent += sigText[i];
      i++;
    } else {
      clearInterval(sigInterval);
    }
  }, 120);
}, 15800); // aparece después de la carta
