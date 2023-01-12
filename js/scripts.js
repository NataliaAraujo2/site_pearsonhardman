// Seleção de elementos

//Menu
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

//Ancoragem do menu
const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a ");
const allLinks = [...desktopLinks, ...mobileLinks];

//Troca de banner
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
//Mudança de tela sem referência no endereço
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 500);
}

// Mostrar Slides
function showSlides() {
  console.log(slides);

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// Eventos

//Abre
//menuBtn.addEventListener("click", (e) => {
//    menu.classList.add("menu-active");
//});

//Fecha
//closeMenuBtn.addEventListener("click", (e) => {
//    menu.classList.remove("menu-active");
//});

//Simplificação

//Abrir e Fechar menu mobile

[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

//Scroll para os links
allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

//Inicialização
showSlides();
