console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/address?=boston').then(response => {
    response.json().then((data) => {
        
    })
})


const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchInput.textContent
    fetch('http://localhost:3000/adress?=boston').then(resposne => {
        response.json().then((data) => {
            if (data.error) {
                 return messageOne.textContent= data.error
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            
             }
         })
     })
})