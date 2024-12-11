//FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//DOM ELEMENTS
//Forms
const formElm = document.getElementById('form')
//Form Elements
const timerElm = document.getElementById('timer')
const pElm = document.getElementById('p')
const randomGroupElm = document.getElementById('random-group')
const randomElm = document.getElementsByClassName('random')
const inputGroupElm = document.getElementById('input-group')
//Form Fields
const userImputsElm = document.getElementsByClassName('user-imputs')

//DOM Events
/* Visualizzare in pagina 5 numeri casuali */
const randomNumbers = []

for (let i = 0; i < randomElm.length; i++) {
    const randomValue = getRndInteger(1, 100)
    randomElm[i].innerHTML = randomValue
    randomNumbers.push(randomValue)
  }

/* Partenza timer */
let seconds = 5

const intervalID = setInterval(() =>{
    if(seconds === -1){
        clearInterval(intervalID)
        timerElm.innerHTML = "Tempo Scaduto"
        pElm.innerHTML = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
        randomGroupElm.classList.add("d-none")
        inputGroupElm.classList.remove("d-none")
    } else{
        timerElm.innerHTML = seconds
    }

    seconds--
}, 1000)

/* Confrontare quali e quanti numeri corrispondono */ 

