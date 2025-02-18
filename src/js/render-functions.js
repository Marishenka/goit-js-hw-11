import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;
const gallery = document.querySelector('.gallery');

export function ShowGLR(arrPict) {
  gallery.innerHTML = '';

  const markup = arrPict
    .map(
      image =>
        `<li class="gallery-item">
            <a class='gallery-link' href="${image.largeImageURL}">
              <img class="li-img"
              src="${image.webformatURL}" 
              alt="${image.tags}"/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</td></tr>
                    <tr><td>${image.likes}</td><td>${image.views}</td><td>${image.comments}</td><td>${image.downloads}</td></tr>
                </table>
              </div>
            </a>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function ClearGallery() {
  gallery.innerHTML = '';
}

export function ShowErrorMessage() {
  ClearGallery();
  iziToast.show({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'white',
    backgroundColor: '#EF4040',
  });
}
