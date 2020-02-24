set up HTML file with boilerplate code
* connect styles.css and app.js
* copy and paste bootstrap link tag into HTML head: <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
* add a <main> section to your HTML file with a class of dogs-container


Fetch dogs from backend and display as cards on frontend
* URL to fetch from: 'https:dogs-backend.herokuapp.com/dogs'
* bootstrap dog card:

```<div class="card">
     <img src="..." class="card-img-top" alt="...">
     <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
 </div>
 ```

create an HTML form (for bootstrap styled form, see line 26)in your index.html file that takes in: 
* a dog's name, breed, image url, and age
* add POST functionality to HTML form
* optimistically render the new dog

```
<form class="dog-form">
        <div class="form-group">
            <label for="name">Dog Name:</label>
            <input type="text" name="name" placeholder="Rex" />
        </div>
        <div class="form-group">
            <label for="breed">Dog Breed:</label>
            <input type="text" name="breed" placeholder="Greyhound" />
        </div>
        <div class="form-group">
            <label for="image">Image URL:</label>
            <input type="text" name="image" placeholder="Image URL" />
        </div>
        <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" name="age" placeholder="Age" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
```

add a delete button to each dog card that:
* pessimistically renders the delete action
* DELETEs dog from the backend

create a form on each dog card that UPDATEs the dog's information

```html
<form class="form-group">
    <label for="age">Age:</label>
    <input type="number" id=${dog.id} name="age" placeholder="Age" />
    <button type="submit" class="btn btn-primary"> Submit </button>
</form>
```
