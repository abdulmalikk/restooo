import 'regenerator-runtime'; /* for async await transpile */
import data from '../DATA.json';
import '../styles/main.css';
import '../styles/responsive.css';

const drawerToggler = document.querySelector('#drawertoggler');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawer = document.querySelector('.drawer');

drawerToggler.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  drawerOverlay.classList.toggle('open');
  event.stopPropagation();
});

drawerOverlay.addEventListener('click', function () {
  drawer.classList.remove('open');
  this.classList.remove('open');
});

document.addEventListener('keydown', ({ key }) => {
  if (key === 'Escape') {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
  };
});

const listRestoElm = document.querySelector('.list-resto-items');
const listResto = data.restaurants;
listResto.forEach((restaurant) => {
  const truncatedDesc = restaurant.description.substring(125, length);
  listRestoElm.innerHTML += `
    <div class="card">
      <div class="card-rating">★ ${restaurant.rating}</div>
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" width="100%">
      <div class="card-body">
        <h1 class="card-location">Lokasi : ${restaurant.city}</h1>
        <h1 class="card-title">${restaurant.name}</h1>
        <p class="card-desc">${truncatedDesc} . . .</p>
      </div>
      <a href="#" class="btn-card-detail">Lihat detail</a>
    </div>
  `;
});
