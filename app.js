const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'
const dogsContainer = document.querySelector('.dogs-container')

fetch(BASE_URL)
    .then(response => response.json())
    .then(dogs => {
        dogs.map(dog => {
            

        })
    })