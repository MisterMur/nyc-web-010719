document.addEventListener('DOMContentLoaded', () => {
	let allPokemon = []
	const pokemonContainer = document.getElementById("pokemon-container")
	const searchBar = document.getElementById("pokemon-search-input")


	function fetchPokemon(){
		fetch("http://localhost:3000/pokemon", {method: "GET", mode: 'no-cors'})
		.then(     function(response) {
			// debugger;
			 console.log(response.json())
			// return response.json()
		})
		// .then(    (data) => {
		// 	   allPokemon = data
		// 		 console.log('here')
		// 	   showAllPokemon(data)
		// })
	}

// allPokemon


// CREATE A NEW POKEMON

// 1. Listen to the "submit" form
const newPokeForm = document.querySelector('#new-pokemon-form')
	//GRAB THAT FORM

	// 2. Grab all the inputs and save it into a variable

newPokeForm.addEventListener("submit", (e) => {
	e.preventDefault()
	// console.log(e.target)
	const pokeName = newPokeForm.querySelector("#new-poke-name").value
	const pokeFront = newPokeForm.querySelector("#new-poke-front-sprite").value
	const pokeBack = newPokeForm.querySelector("#new-poke-back-sprite").value


// HERE OUTSIDE FETCH and THENS
// updated the dom

// OPTIMISITIC

	// console.log(pokeName, pokeFront, pokeBack)

// FETCH WILL WRITE TO DB
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
		// 1. UPDATING THE DB ✅ this is done by the fetch
		// 2. UPDATE THE DOM
		// 3. UPDATE THE LOCAL VARIABLES
		allPokemon.push(newPokemonObj)
		showAllPokemon(allPokemon)
		 // INSIDE THE FETCH THEN
		 // IF I UPDATE THE DOM AFTER THE DATABSE IS UPDATED\
		 // PESSIMISTICALLY RENDERING

	})

// ALSO OPTIMISITC

})



	function showAllPokemon(pokemons){
		pokemonContainer.innerHTML = pokemons.map(renderSinglePokemon).join('')
	}


	pokemonContainer.addEventListener("click", (e) => {
		if (e.target.tagName === "IMG") {
			const foundPokemon = allPokemon.find(function(pokemon) {
				return pokemon.id === parseInt(e.target.dataset.id)
			})

			if (e.target.src === foundPokemon.sprites.front) {
				e.target.src = foundPokemon.sprites.back
			} else {
				e.target.src = foundPokemon.sprites.front
			}
		}

	})

	searchBar.addEventListener("input", (e) => {
		const filteredPokemon = allPokemon.filter((pokemon) => {
			return pokemon.name.includes(e.target.value)
		})
		showAllPokemon(filteredPokemon)
	})

	function renderSinglePokemon(pokemon) {
		return `
			<div data-id="${pokemon.id}"class="pokemon-container">
			<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
					<h1 class="center-text">${pokemon.name}</h1>
					<div style="width:239px;margin:auto">
						<div style="width:96px;margin:auto">
							<img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
						</div>

					</div>
				</div>
			</div>
		`
	}

	// Make a pokemon editable
		// Add an edit button
	// the buttons dont do nuffin
	// make the buttons work
	 	//  make the edit button LISTEN for 'click'
		// gotta get that button first!

		// add (append) a new edit form to the pokemon card

		// need that new edit form to do something
		//  👂 LISTEN for 'submit' of THE BRAND NEW EDIT FORM I JUST MADE
	// grab those inputs!
// NO TO FULL PAGE RELOAD! e.preventDefault()
// fetch req WITH a patch 🙌


	fetchPokemon()
})

// here is when .then will fire
