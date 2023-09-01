import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkup


function createMarkup(arr) {
    return  arr.map(({ preview, original, description }) => {
       return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join('');
    
};
  

   const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',  captionDelay: 250,});


console.log(galleryItems);
