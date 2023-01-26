import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryContainer = document.querySelector(`.gallery`);
const galleryMarktUp = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, galleryMarktUp);
galleryContainer.addEventListener(`mousedown`, onImgClick);


function createGalleryCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"   src="${preview}"  alt="${description}" />
</a>`;
  }).join(``);
}

function onImgClick(event) {
     if (event.target.nodeName !== `IMG`) {
        return;
    }
    
    //cancels img download
    event.preventDefault(); 

  new SimpleLightbox('.gallery a', {
        captions: true,   
        captionsData: `alt`,
        captionPosition: 'bottom',
        captionDelay: 250,
   
    });
 
}