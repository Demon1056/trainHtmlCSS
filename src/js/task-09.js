function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color')
const body = document.querySelector('body')
const span= document.querySelector('.color')
const handlerClickButton = ()=>{ 
  const realColor=getRandomHexColor()
  console.log(realColor);
  body.style.backgroundColor=realColor 
  span.textContent=realColor};
button.addEventListener('click', handlerClickButton)