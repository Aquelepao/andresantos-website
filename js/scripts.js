// Script Smooth Scrolling
document.querySelector('.fa-angle-double-down').addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('.about');
  target.scroll({
    behavior: 'smooth'
  });
});


// Script para controlar o estilo da navbar ao dar scroll
const navbar = document.getElementById('navbar');
const navbarLinks = document.querySelectorAll('.nav-link');

let scrolled = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    if (!scrolled) {
      navbar.classList.add('scrolled');
      scrolled = true;
    }
  } else {
    if (scrolled) {
      navbar.classList.remove('scrolled');
      scrolled = false;
    }
  }
});


//Script Navbar-active
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".navbar-nav a.nav-link");

  // Função para verificar se mais de 50% de uma seção está visível no dispositivo
  function isSectionMoreThan50PercentInView(section) {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
  }

  // Função para destacar o menu ativo
  function highlightActiveMenuItem() {
    menuLinks.forEach((link) => {
      const sectionId = link.getAttribute("href").substring(1); // Remove o #
      const section = document.getElementById(sectionId);

      if (section && isSectionMoreThan50PercentInView(section)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", highlightActiveMenuItem);
  window.addEventListener("scroll", highlightActiveMenuItem);
});


// Script para alterar entre o dark mode e o light mode
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;

// Verifica se o utilizador já escolheu o dark mode antes
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

// Se o dark mode estiver ativado, atualiza a página com a classe apropriada
if (isDarkModeEnabled) {
  body.classList.add('dark-mode');
  darkModeSwitch.checked = true; // Certifica-se de que a caixa de seleção corresponda ao estado atual
}

darkModeSwitch.addEventListener('change', () => {
  if (darkModeSwitch.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Armazena a preferência do utilizador
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Armazena a preferência do utilizador
  }
});


// Script classe "pop-up"
// Seleciona todos os elementos com a classe "open-popup"
const openPopupElements = document.querySelectorAll('.open-popup');

// Função para abrir a pop-up
function openPopup(popupId) {
  // Seleciona a pop-up correspondente
  const popup = document.getElementById(popupId);
  
  // Abre a pop-up
  popup.style.display = 'block';
  
  // Bloqueia a barra horizontal
  document.body.style.overflow = 'hidden';

  // Adiciona um evento de clique fora da pop-up para fechá-la
  document.addEventListener('click', (event) => {
    if (event.target === popup) {
      closePopup(popupId);
    }
  });

  // Adiciona um evento de pressionar a tecla "ESC" para fechar a pop-up
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopup(popupId);
    }
  });
}

// Função para fechar a pop-up
function closePopup(popupId) {
  // Seleciona a pop-up correspondente
  const popup = document.getElementById(popupId);
  
  // Fecha a pop-up
  popup.style.display = 'none';
  
  // Restaura a barra horizontal
  document.body.style.overflow = 'auto';

  // Remove os eventos de clique fora da pop-up e pressionar a tecla "ESC"
  document.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', closePopup);
}

// Adiciona um evento de clique para cada elemento "open-popup"
openPopupElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Obtem o valor do atributo "data-popup"
    const popupId = element.getAttribute('data-popup');
    openPopup(popupId);
  });
});

// Fechar a pop-up quando o botão de fechar for pressionado
const closePopupElements = document.querySelectorAll('.close-popup');
closePopupElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Encontra o elemento janela pop-up
    const popup = element.closest('.popup');
    
    // Fecha a pop-up
    popup.style.display = 'none';
    
    // Restaura a barra horizontal
    document.body.style.overflow = 'auto';
  });
});

