function renderPokemonToPage(pokemons) {
  document.querySelector("#pokemon-container").innerHTML = "";
  pokemons.forEach(renderSinglePokemonToPage);
}
function renderSinglePokemonToPage(pokemon) {
  let container = document.querySelector("#pokemon-container");
  container.innerHTML += `<div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
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
function handlePokemonContainerClick(e) {
  console.log(e.target.dataset.id);
  if (e.target.dataset.id) {
    console.log("pokemon id: ", e.target.dataset.id);
    const poke = POKEMON.find(p => p.id == e.target.dataset.id);
    if (e.target.src == poke.sprites.front) {
      e.target.src = poke.sprites.back;
    } else {
      e.target.src = poke.sprites.front;
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // console.log(POKEMON);
  renderPokemonToPage(POKEMON);

  // select search bar
  let searchBar = document.querySelector("#pokemon-search-input");
  //add an event to the search bar
  searchBar.addEventListener("input", function(e) {
    let filteredPokes = POKEMON.filter(function(pokemon) {
      return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    renderPokemonToPage(filteredPokes);
  });

  let pokeContainer = document.querySelector("#pokemon-container");
  pokeContainer.addEventListener("click", handlePokemonContainerClick);
});
