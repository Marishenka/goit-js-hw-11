import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImg } from './js/pixabay-api';
import { ShowGLR, ClearGallery, ShowErrorMessage } from './js/render-functions';

export const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const waitMsg = document.querySelector('.wait-msg');

form.addEventListener('submit', e => {
  e.preventDefault();

  let searchName = input.value.trim();

  if (!searchName) {
    iziToast.show({
      backgroundColor: 'rgba(239, 64, 64, 1)',
      messageColor: `rgba(255, 255, 255, 1)`,
      close: `true`,
      position: 'topRight',
      title: 'Error',
      titleColor: '#fff',
      titleSize: '16px',
      message: 'Input search string',
    });
    return;
  }

  waitMsg.innerHTML =
    '"Wait, the image is loaded" <span class="loader"></span>';

  getImg(searchName)
    .then(response => {
      if (response.data.hits.length === 0) {
        ShowErrorMessage();
      } else {
        ShowGLR(response.data.hits);
      }
    })
    .catch(error => {
      waitMsg.textContent = 'Ups ...';
      console.error(error);
    })
    .finally(() => {
      waitMsg.textContent = '';
    });

  form.reset();
});
