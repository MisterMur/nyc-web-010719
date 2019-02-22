let allPokemons = []
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/pokemon")
  .then(resp => resp.json())
  .then(pokemons => {
    allPokemons = pokemons
    renderPokemonsToPage(allPokemons);
  })

  let input = document.querySelector("#pokemon-search-input");
  input.addEventListener("input", filterPokemon);
  const pokeContainer = document.querySelector("#pokemon-container");

  pokeContainer.addEventListener("click", function(e) {
    console.log(e.target)
    if (e.target.dataset.action == "flip") {
      const pokemon = allPokemons.find(p => p.id == e.target.dataset.id);
      if (e.target.src === pokemon.sprites.front) {
        e.target.src = pokemon.sprites.back;
      } else {
        e.target.src = pokemon.sprites.front;
      }
    } else if (e.target.dataset.action == "edit") {
      //grab the form
      let form = document.querySelector('#form-div')
      let pokemon = allPokemons.find(p => p.id == e.target.dataset.id)
      console.log(pokemon)
      form.innerHTML = `<form class="form" id="edit-pokemon-form" class="" action="pokemon/${pokemon.id}" method="patch">
        <input type="hidden" id="poke-id" value="${pokemon.id}" />
        <label for="name">NAME: </label>
        <input id="poke-name" type="text" name="name" value="${pokemon.name}">

        <label for="front-sprite">Front Image: </label>
        <input id="poke-front-sprite" type="text" name="front-sprite" value="${pokemon.sprites.front}">

        <label for="back-sprite">Back Sprite: </label>
        <input id="poke-back-sprite" type="text" name="back-sprite" value="${pokemon.sprites.back}">
        <button type="submit" name="button">Create That Pokemon!</button>
      </form>`

      form.addEventListener('submit', handleEditPokemon)
      //change the html
    }
  });

  const newPokeForm = document.querySelector('#new-pokemon-form')
  newPokeForm.addEventListener("submit", (e) => {
  	e.preventDefault()
  	const pokeName = newPokeForm.querySelector("#new-poke-name").value
  	const pokeFront = newPokeForm.querySelector("#new-poke-front-sprite").value
  	const pokeBack = newPokeForm.querySelector("#new-poke-back-sprite").value
  	fetch("http://localhost:3000/pokemon/", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json",
  			"Accept": "application/json"
  		},
  		body: JSON.stringify({
  			"name": pokeName,
  			"sprites": {
  				"front": pokeFront,
  				"back": pokeBack
  			}
  		})
  	})
  	.then(function(r) {
  		return r.json()
  	})
  	.then(function(newPokemonObj) {
  		console.log(newPokemonObj)
  		allPokemons.push(newPokemonObj)
  		renderPokemonsToPage(allPokemons)
  	})
  })
});


function handleEditPokemon(e){
  e.preventDefault()
  let name = e.target.querySelector('#poke-name').value
  let front = e.target.querySelector('#poke-front-sprite').value
  let back = e.target.querySelector('#poke-back-sprite').value
  let id = e.target.querySelector('#poke-id').value
  let data = {
    name: name,
    sprites: {
      front: front,
      back: back
    }
  }

  fetch(`http://localhost:3000/pokemon/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": 'application/json',
      "Accepts": 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(updatedPokemon => {
    allPokemons = allPokemons.map(pokemon => {
      if (pokemon.id === updatedPokemon.id) {
        return updatedPokemon
      } else {
        return pokemon
      }
    })
    renderPokemonsToPage(allPokemons)
  })

}
function renderPokemonsToPage(pokemons) {
  const pokeContainer = document.querySelector("#pokemon-container");
  pokeContainer.innerHTML = "";
  pokemons.forEach(p => renderSinglePokemonToPage(p))
}
function renderSinglePokemonToPage(pokemon) {
  const pokeContainer = document.querySelector("#pokemon-container");
  pokeContainer.innerHTML += `<div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text" data-action="edit" data-id=${pokemon.id}>${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${
          pokemon.id
        }" data-action="flip" class="toggle-sprite" src="${
    pokemon.sprites.front
  }">
      </div>
    </div>
  </div>`;
}
function filterPokemon(e) {
  console.log(e.target.value);

  const filteredPokes = allPokemons.filter(function(poke) {
    return poke.name.includes(e.target.value);
  });

  console.log(filteredPokes);
  renderPokemonsToPage(filteredPokes);
}
