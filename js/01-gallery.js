import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkup


function createMarkup(arr) {
    return  arr.map(({ preview, original, description }) => {
       return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
    
  };


galleryEl.addEventListener('click', openOriginalImg)
let instance

function openOriginalImg(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
   return
  }
  
   const urlOriginal = event.target.dataset.source;
   instance = basicLightbox.create(`
    <img src ="${urlOriginal}" width="800" height="600">
`)
 instance.show()
  }


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    instance.close();
  }
});

console.log(galleryItems);