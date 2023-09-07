import { galleryItems } from './gallery-items.js';
// Change code below this line






const container = document.querySelector('.gallery')
const makeGalery = galleryItems.map(({ preview, original, description})=>`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join(' ')
const makeInstance = (a)=> basicLightbox.create(`
<img src="${a}">`)
container.innerHTML=makeGalery
const myBode = document.querySelector('body')
// const hadlerEsc = (podiya) =>{console.log(event.target, podiya)
// };

const handlerClick = (e)=>{e.preventDefault() 
    const inc = makeInstance(e.target.dataset.source)
    inc.show()
myBode.addEventListener('keydown', (e)=> { 
    if (e.code !=='Escape'){return}inc.close(console.log('delete listaber'))})
// hadlerEsc (inc)
};
 
container.addEventListener('click', handlerClick);

