const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'
const dogsContainer = document.querySelector('.dogs-container')
const dogForm = document.querySelector('.dog-form')

console.log(dogsContainer)
fetch(BASE_URL)
    .then(parseJSON)
    .then(dogs => {
        dogs.map(createDogCard)
    })
function parseJSON(response) {
    return response.json()
}
function createDogCard(dog) {
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
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'DELETE'
    deleteButton.addEventListener('click', () => {
        console.log("event.target", event.target.parentNode)
        fetch(`${BASE_URL}/${dog.id}`, {
            method: 'DELETE'
        }).then(event.target.parentNode.remove())
    })

    const editDogForm = document.createElement('form')
    editDogForm.className = 'form-group'
    editDogForm.innerHTML = `
                <label for="age">Age:</label>
                <input type="number" id="${dog.id}" name="age" placeholder="Age" />
                <button type="submit" class="btn btn-primary"> Submit </button>
            `

    editDogForm.addEventListener('submit', () => {
        event.preventDefault()
        editDog(dog.id)
    })
    dogCard.append(editDogForm, deleteButton)
    dogsContainer.appendChild(dogCard)
}
function editDog(id) {
    const age = document.getElementById(`${id}`).value
    console.log(age)

    fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ age })
    })
}

dogForm.addEventListener('submit', () => {
    event.preventDefault()
    const formData = new FormData(dogForm)

    const name = formData.get('name')
    const breed = formData.get('breed')
    const image = formData.get('image')
    const age = formData.get('age')

    createDogCard({ name, breed, image, age })

    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, breed, image, age })
    }).then(parseJSON)
        .then(console.log)
        .then(dogForm.reset())


})

