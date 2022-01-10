const headerUI = document.querySelector('#page-header');
const headerOptionsUI = document.querySelector('#header-options');
const oneBlincLogoUI = document.querySelector('#oneblinc-logo');
const toggleMenuBtnUI = document.querySelector('#toggle-menu');
const closeIconUI = document.querySelector('#close-icon');
const hamburguerIconUI = document.querySelector('#hamburguer-icon');

let scrolled = false;

document.addEventListener(
  'scroll',
  e => {
    if (window.scrollY > 120) {
      if (!scrolled) {
        scrolled = true;
        headerUI.classList.remove('top-page');
        headerUI.classList.add('sticky');
        oneBlincLogoUI.src = 'assets/oneblinc-logo-light.png';
      }
    } else {
      if (scrolled) {
        scrolled = false;
        headerUI.classList.add('top-page');
        headerUI.classList.remove('sticky');

        if (
          headerUI.classList.contains('secondary') &&
          !headerUI.classList.contains('open-menu')
        ) {
          oneBlincLogoUI.src = 'assets/oneblinc-logo-dark.png';
        } else {
          oneBlincLogoUI.src = 'assets/oneblinc-logo-light.png';
        }
      }
    }
  },
  { passive: true }
);

function toggleHeader() {
  closeIconUI.classList.toggle('hidden');
  hamburguerIconUI.classList.toggle('hidden');
  headerUI.classList.toggle('open-menu');
  headerOptionsUI.classList.toggle('show');

  if (
    headerUI.classList.contains('secondary') &&
    !headerUI.classList.contains('open-menu') &&
    !headerUI.classList.contains('sticky')
  ) {
    oneBlincLogoUI.src = 'assets/oneblinc-logo-dark.png';
  } else if (headerUI.classList.contains('open-menu')) {
    oneBlincLogoUI.src = 'assets/oneblinc-logo-light.png';
  }
}
