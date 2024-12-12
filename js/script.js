//DOM ELEMENTS
//Forms
const formElm = document.getElementById('form')
//Form Elements
const timerElm = document.getElementById('timer')
const pElm = document.getElementById('p')
const randomGroupElm = document.getElementById('random-group')
const randomElm = document.querySelectorAll('.random')
const inputGroupElm = document.getElementById('input-group')
const submitterElm = document.getElementById('submitter')
//Form Fields
const userInputsElm = document.getElementsByClassName('user-imputs')

//DOM Events
// Visualizzare in pagina 5 numeri casuali
const randomNumbers = []

while(randomNumbers.length < 5){
    const randomValue = getRndInteger(1, 100)
    if(!randomNumbers.includes(randomValue)){
        randomNumbers.push(randomValue)
    }
}

for(let i = 0; i < randomNumbers.length; i++){
    randomElm[i].innerHTML = randomNumbers[i]
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

/* Estrarre i valori dagli input utente */ 
submitterElm.addEventListener('click', (event) =>{
    event.preventDefault()
    const userNumbers = []

    for (let i = 0; i < userInputsElm.length; i++) {
        const userNumberValue = parseInt(userInputsElm[i].value)
        if (!isNaN(userNumberValue) && !userNumbers.includes(userNumberValue)) { 
            userNumbers.push(userNumberValue)
        }
    }

    /* Confrontare quali e quanti numeri corrispondono */
    const correctNumbers = []
    for (let i = 0; i < userNumbers.length; i++) {
        if (randomNumbers.includes(userNumbers[i]) && !correctNumbers.includes(userNumbers[i])) {
            correctNumbers.push(userNumbers[i])
        }
    }
    const resultElm = document.getElementById('result')
    resultElm.innerHTML = `Hai indovinato ${correctNumbers.length} numeri! (${correctNumbers.join(', ')})`
})