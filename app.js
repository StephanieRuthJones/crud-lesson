const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'
const dogsContainer = document.querySelector('.dogs-container')
console.log(dogsContainer)
fetch(BASE_URL)
    .then(response => response.json())
    .then(dogs => {
        dogs.map(dog => {
            const dogCard = document.createElement('div')
            dogCard.className = 'card'
            dogCard.innerHTML = `
                <img src=${dog.image} class="card-img-top" alt=${dog.name}>
                <div class="card-body">
                    <h5 class="card-title">${dog.name}</h5>
                    <p class="card-text">Breed: ${dog.breed}</p>
                    <p class="card-text">Age: ${dog.age}</p>
                </div>
            `
            dogsContainer.appendChild(dogCard)


        })
    })