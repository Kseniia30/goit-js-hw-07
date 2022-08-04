import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener("handleClick", selectedImage())

function selectedImage(event) {
    console.log("this is me");
}

const imageList = galleryItems.map(galleryItem => {
    return `<a href="${galleryItem.original}" rel="nofollow"><img scr="${galleryItem.preview}" data-course="${galleryItem.original}" alt="${galleryItem.description}"></a>`
})

galleryList.insertAdjacentHTML("beforeend", imageList)

const links = document.querySelectorAll(".gallery a")
console.log(links);

for (const link of links) {
    console.log(link.classList);
    link.classList.add("gallery__item")
}

const images = document.querySelectorAll(".gallery__item img")
for (const image of images) {
    image.classList.add("gallery__image")
}