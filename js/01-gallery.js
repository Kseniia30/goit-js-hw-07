import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector(".gallery");
const createMarkup = createImagesMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", createMarkup);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
    const source = e.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <div >
        <a style="color:#fff; cursor:pointer">Escape</a>
        <br>
        <img src="${source}"width="621" height="414">
        
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})
instance.show();
};

galleryList.addEventListener("click", onContainerClick);
