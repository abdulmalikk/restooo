import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const drawerToggler = document.querySelector('#drawertoggler');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawer = document.querySelector('.drawer');

drawerToggler.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  drawerOverlay.style.display = 'block';
  event.stopPropagation();
});

drawerOverlay.addEventListener('click', function () {
  drawer.classList.remove('open');
  this.style.display = 'none';
});
