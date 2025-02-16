import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function ShowGLR(arrPict, tagGallery) {
  const gallery = document.querySelector(tagGallery);

  const markup = arrPict
    .map(
      image =>
        `<li class="gallery-item">
            <a class='gallery-link' href="${image.largeImageURL}">
              <img class="li-img"
              src="${image.webformatURL}" 
              alt="${image.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${image.likes}</td><td>${image.views}</td><td>${image.comments}</td><td>${image.downloads}</tr>
                </table>

              
          
              
              
                </div>
              </a>
            </li>
            
    `
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', markup);

  const lightbox = new SimpleLightbox(tagGallery + ' a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}
