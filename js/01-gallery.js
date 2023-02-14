import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const markUp = galleryItems
    .map(
        (item) =>
            `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
       data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", markUp);
gallery.addEventListener("click", oneImgContenerClick);

function oneImgContenerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const selectedImage = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

    instance.show();

    gallery.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            instance.close();
        }
    });
}