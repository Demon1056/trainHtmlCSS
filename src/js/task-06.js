const area = document.getElementById('validation-input')

const blurHandler=()=>area.classList.add(area.value.length>area.dataset.length?'invalid':'valid')
area.addEventListener('blur', blurHandler)
