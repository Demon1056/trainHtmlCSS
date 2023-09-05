const shur = document.getElementById('font-size-control')
const text = document.getElementById('text')
const handlerInput = ()=>text.style.fontSize=`${shur.value}px`
shur.addEventListener('input', handlerInput)
