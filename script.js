// Submit button
const noteContainer = document.getElementById('card-container--note')
const thanksContainer = document.getElementById('card-container--thanks')
const submitButton = document.getElementsByClassName('main-button')

submitButton[0].addEventListener('click', () => {
    noteContainer.classList.remove('card--center')
    noteContainer.classList.add('hidden')
    thanksContainer.classList.remove('hidden')
    thanksContainer.classList.add('card-container--align')
})

// Number chosen
const allNotes = document.querySelectorAll('.number')
const noteTextZone = document.querySelector('.selected-rating')
console.log(noteTextZone)

allNotes.forEach( (note) => {
    note.addEventListener('click', () => {
        if (note === document.activeElement) {
            let numberChosen =  note.firstChild.data
            console.log(`${numberChosen}`+"est le nombre choisi")
            // Display the number in HTML
            noteTextZone.innerHTML = "You selected" +`${numberChosen}`+ "out of 5"
        }
    })
})