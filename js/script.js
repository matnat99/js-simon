//FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//DOM ELEMENTS
//Forms
const formElm = document.getElementById('form')
//Components
const timerElm = document.getElementById('timer')
const randomGroupElm = document.getElementById('random-group')
const randomElm = document.getElementsByClassName('random')
const inputGroupElm = document.getElementById('input-group')
//Fields
const userImputsElm = document.getElementsByClassName('user-imputs')

//DOM Events
/* Visualizzare in pagina 5 numeri casuali */
for (let i = 0; i < randomElm.length; i++) {
    randomElm[i].innerHTML = getRndInteger(1, 100);
  }