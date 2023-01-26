import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);

const galleryMarktUp = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, galleryMarktUp);
galleryContainer.addEventListener(`click`, onImgClick);


function createGalleryCard(galleryItems) {
return galleryItems.map(({preview,original,description})=> {
    return     ` <div class="gallery__item">
   <a class="gallery__link" href="${preview}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`
    }).join(``);     
}


function onImgClick(event) {
    if (event.target.nodeName !== `IMG`) {
        return;
    }
    
    //cancels img download
    event.preventDefault();     
   
     //create modal popup
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280">`);
    instance.show()
}
  



