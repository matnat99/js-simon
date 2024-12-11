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
const submitterElm = document.getElementById('submitter')
//Form Fields
const userInputsElm = document.getElementsByClassName('user-imputs')

//DOM Events
/* Visualizzare in pagina 5 numeri casuali */
const randomNumbers = []

for (let i = 0; i < randomElm.length; i++) {
    const randomValue = getRndInteger(1, 100)
    randomElm[i].innerHTML = randomValue
    randomNumbers.push(randomValue)
  }

/* Partenza timer */
let seconds = 30

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

/* Estrarre i valori dagli imput utente */ 
submitterElm.addEventListener('click',(event) =>{
    event.preventDefault()
    const userNumbers = []
    let isValid = true

    for (let i = 0; i < userInputsElm.length; i++) {
        const userNumbervalue = parseInt(userInputsElm[i].value)
        if (!isNaN(userNumbervalue)) { 
            userNumbers.push(userNumbervalue)
        }
    }

    /* Confrontare quali e quanti numeri corrispondono */
    const correctNumbers = [];
    for (let i = 0; i < userNumbers.length; i++) {
        if (randomNumbers.includes(userNumbers[i])) {
            correctNumbers.push(userNumbers[i])
        }
}
const resultElm = document.getElementById('result')
resultElm.innerHTML = `Hai indovinato ${correctNumbers.length} numeri! (${correctNumbers.join(', ')})`
})




