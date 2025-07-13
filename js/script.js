document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');
  const loginBox = document.getElementById('loginBox');
  const welcomeScreen = document.getElementById('welcomeScreen');

  const validUsers = [
    "nayeli",
    "mi ojitos de uva",
    "miojitosdeuva",
    "minay",
    "mi nay",
    "nayeli gabriela cante ramirez",
    "nay"
  ];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();

    const isValidUser = validUsers.includes(username);

    if (!isValidUser) {
      message.style.color = '#e63946';
      message.innerHTML = '❗ Solo el amor de mi vida puede ingresar ❤️';
      return;
    }

    if (password === '04072025') {
      message.style.color = '#28a745';
      message.textContent = '🎉 ¡Bienvenida amor!';
      loginBox.style.display = 'none';
      welcomeScreen.style.display = 'block';
    } else {
      message.style.color = '#e63946';
      message.innerHTML = '❗ Pista: fecha de inicio de novios ❤️';
    }
  });

  const registerBtn = document.getElementById('registerBtn');
  registerBtn.addEventListener('click', () => {
    message.style.color = '#b51717';
    message.innerHTML = '🚫 No necesito perras 💅<br>💘 El amor de mi vida ya tiene su usuario y contraseña 💍';
  });

  // Forzar música
  document.addEventListener('click', () => {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
      music.play().catch(() => {});
    }
  });

  // Encuesta
  const slider = document.getElementById("ratingSlider");
  const ratingValue = document.getElementById("ratingValue");
  const sendRatingBtn = document.getElementById("sendRatingBtn");

  slider.addEventListener("input", () => {
    ratingValue.textContent = slider.value;
  });

  sendRatingBtn.addEventListener("click", () => {
    const score = slider.value;
    let message = "";

    if (score === "1") {
      message = "Votación fue 1 😭 pero igual te amo 💔";
    } else {
      message = `Hola mi amor 😍 te califico con un ${score}/10 como mi novio 💖 porque eres lo mejor que me ha pasado 😘✨`;
    }

    const encodedMessage = encodeURIComponent(message);
    const phone = "573026782036";
    const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  });

  // Mostrar imagen de regalo
  const giftBtn = document.getElementById('giftBtn');
  const giftContainer = document.getElementById('giftContainer');

  giftBtn.addEventListener('click', () => {
    giftContainer.style.display = 'block';
    giftBtn.style.display = 'none';
  });
});
