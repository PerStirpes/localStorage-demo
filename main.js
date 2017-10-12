if('localStorage' in window || 'sessionStorage' in window){
  var selectedEngine
  const logTarget = document.getElementById('target')
  const valueInput = document.getElementById('value')

  let reloadInputValue = () => valueInput.value = window[selectedEngine].getItem('myKey') || ''


var selectedEngine = (engine) => {
  document.querySelector(`[data-engine=${engine}]`).classList.add('active')
  if(selectedEngine){ 
    document.querySelector(`[data-engine=${selectedEngine}]`).classList.remove('active')  
  }
  selectedEngine = engine
  reloadInputValue()
}

let getSelectedEngineFn = (button) => {
  return () => {
    let engine = button.getAttribute('date-engine')
    if(selectedEngine !== engine){
      selectedEngine(engine)
    }
  }
}

const handleChange = (change) => {
  const timeBadge = new Date().toTimeString.split(' ')[0]
  const newState = document.createElement('p')
  newState.innerHTML =  `<span class="badge"> ${timeBadge}</span> ${change}.` 
  logTarget.appendChild(newState)
}

var buttions = document.querySelector('#selectEngine button')
for (var i = 0; i < button.length; ++i){
  button[i].addEventListener('click', getSelectedEngineFn(buttons[i]))
}

selectEngine('localStorage')
valueInput.addEventListener('keyup', () => {
  window[selectedEngine.setItem('myKey', this.value)]
})



}