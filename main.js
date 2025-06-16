window.addEventListener('DOMContentLoaded', () => {
  // Animación de inicio
  const intro = document.getElementById('intro-animation');
  const text = intro.querySelector('.intro-text');
  setTimeout(() => {
    text.style.opacity = 1;
  }, 400);
  setTimeout(() => {
    intro.classList.add('active');
  }, 1700);
  setTimeout(() => {
    intro.style.opacity = 0;
    intro.style.pointerEvents = 'none';
  }, 2400);
  setTimeout(() => {
    intro.remove();
    // Mostrar el contenido principal
    document.querySelectorAll('.hidden-after-intro').forEach(el => {
      el.classList.add('visible-after-intro');
    });
    // Ocultar solo la imagen de portada
    const portada = document.querySelector('.ocultar-despues-intro');
    if (portada) portada.classList.add('ocultar');
  }, 3000);
});
document.querySelectorAll('.ps-thumb').forEach(img => {
  img.addEventListener('click', () => {
    const viewer = document.getElementById('fullscreen-viewer');
    const fullImg = document.getElementById('fullscreen-img');
    fullImg.src = img.src;
    viewer.classList.remove('fullscreen-hidden');
  });
});

document.getElementById('fullscreen-viewer').addEventListener('click', () => {
  const viewer = document.getElementById('fullscreen-viewer');
  const fullImg = document.getElementById('fullscreen-img');
  viewer.classList.add('fullscreen-hidden');
  setTimeout(() => { fullImg.src = ''; }, 300); // Espera la transición antes de limpiar el src
});
const skillDescriptions = {
  html: "HTML5 es el lenguaje de marcado principal para crear la estructura de páginas web.",
  css: "CSS3 se utiliza para diseñar y dar estilo visual a las páginas web, incluyendo colores, fuentes y layouts.",
  js: "JavaScript permite agregar interactividad y lógica a las páginas web, como animaciones, validaciones y más.",
  git: "Git es un sistema de control de versiones que permite gestionar y colaborar en proyectos de código de manera eficiente."
};

document.querySelectorAll('.skill-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.skill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const desc = document.getElementById('skill-desc');
    desc.textContent = skillDescriptions[btn.dataset.skill] || "";
    desc.classList.add('visible');
  });
});
// Carrusel para el proyecto Space Invaders
document.querySelectorAll('.slider').forEach(slider => {
  const imgs = slider.querySelectorAll('.slider-img');
  let idx = 0;

  function showImg(i) {
    imgs.forEach((img, j) => img.classList.toggle('active', j === i));
  }

  slider.querySelector('.slider-btn.prev').addEventListener('click', () => {
    idx = (idx - 1 + imgs.length) % imgs.length;
    showImg(idx);
  });

  slider.querySelector('.slider-btn.next').addEventListener('click', () => {
    idx = (idx + 1) % imgs.length;
    showImg(idx);
  });

  // Ampliar imagen activa al hacer clic
  imgs.forEach(img => {
    img.addEventListener('click', () => {
      if (img.classList.contains('active')) {
        const viewer = document.getElementById('fullscreen-viewer');
        const fullImg = document.getElementById('fullscreen-img');
        fullImg.src = img.src;
        viewer.classList.remove('fullscreen-hidden');
      }
    });
  });
});
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});