function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const container = document.querySelector('#boxes')
const creater = document.querySelector('[data-create]')
const destroer = document.querySelector('[data-destroy]')
const handlerCreater = ()=> {console.log('creater');}
const handlerDestroer = ()=> {console.log('destroy');}
const createBoxes=amount=>{ 
  let boxesstring = ''
let widthHeight=30
  for (let index = 0; index < amount; index+=1) {
    boxesstring+=`<div  style="background-color: ${getRandomHexColor()}; width:${widthHeight}px; 
    height:${widthHeight}px">${index+1}</div>`
    widthHeight+=10
  ;}
  return boxesstring
}

creater.addEventListener('click', handlerCreater)
destroer.addEventListener('click', handlerDestroer)
