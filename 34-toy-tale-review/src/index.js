const addBtn = document.querySelector("#new-toy-btn");
let toysUrl = "http://localhost:3000/toys";
const toyForm = document.querySelector(".container");
let addToy = false;
let toyCollection = document.querySelector("#toy-collection");
let toyInputs = document.querySelector(".add-toy-form");

document.addEventListener("DOMContentLoaded", function(e) {
  fetchToys();
});
addBtn.addEventListener("click", () => {
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = "block";
  } else {
    toyForm.style.display = "none";
  }
});
toyCollection.addEventListener("click", handleClickContainer);
toyInputs.addEventListener("submit", handleSubmitForm);

function handleClickContainer(e) {
  if (e.target.className == "like-btn") {
    updateLikes(e.target);
  }
}

function updateLikes(toyButton) {
  //fetch update likes
  updateLikesInDatabase(toyButton);
  updateLikesOnDOMOptimistic(toyButton);
}
function updateLikesOnDOMOptimistic(toyButton) {
  let number = ++toyButton.previousElementSibling.innerText.split(" ")[0];
  toyButton.previousElementSibling.innerText = `${number} Likes`;
}
function updateLikesInDatabase(toyButton) {
  let likes = parseInt(toyButton.previousElementSibling.innerText);
  likes++;
  fetch(`${toysUrl}/${toyButton.dataset.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      likes: likes
    })
  })
    .then(resp => resp.json())
    .then(updatedToy => {
      console.log("not anymore");
      //updateLikesOnDOMPessimistic(updatedToy, toyButton);
    });
}
function updateLikesOnDOMPessimistic(toy, toyButton) {
  toyButton.previousElementSibling.innerText = `${toy.likes} Likes`;
}
function handleSubmitForm(e) {
  e.preventDefault();
  let toyName = e.target.querySelector("#toy-name").value;
  let imgUrl = e.target.querySelector("#toy-image").value;
  createToy(toyName, imgUrl);
}
function createToy(name, url) {
  fetch(toysUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      image: url,
      likes: 0
    })
  })
    .then(res => res.json())
    .then(toy => renderSingleToyToPage(toy));
}
function fetchToys() {
  fetch(toysUrl)
    .then(function(resp) {
      return resp.json();
    })
    .then(toys => renderToysToPage(toys));
}
function renderToysToPage(toys) {
  toys.forEach(renderSingleToyToPage);
}
function renderSingleToyToPage(toy) {
  toyCollection.innerHTML += `
  <div class="card">
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn" data-id=${toy.id}>Like <3</button>
  </div>
  `;
}
