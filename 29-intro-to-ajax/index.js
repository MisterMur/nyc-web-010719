// nothing

const button = document.querySelector('#click-button')

button.addEventListener("click", function(){
  console.log('clicked me :)')
})

console.log("%c starting", "color :purple")
// function sleep(n) {
//   let i = 0
//   while(i < (12 ** 8) * n) {
//     i++
//   }
// }



// sleep(15)
// console.log("%c woke up stay WOKE", "color :purple")
//
// 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
//
// 'https://dog.ceo/api/breeds/image/random'
// 'https://dog.ceo/api/breeds/image/random/4'

// how do we make requests in JS?

// Asynch Javascript AND XML

console.log("%c BEFORE THE FETCH", "color :purple")

function one() {
  two()
}

function two() {
  console.log('ha IM 2, the best')
}
one()


fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', {method: "GET"} )
  .then(function(promisedData) {
    return promisedData.json()
  })
  .then(function(parsedJSON) {
    console.log(parsedJSON)
    // HAVE DATA :)

    //  CREATE SOME HTML <p>

    // USE THE DATA INSIDE HTML

    // APPEND THAT DATA
  })

console.log("%c AFTER THE FETCH", "color :red")





















// DONE.


















//
// fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', { method: "GET"} )
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(ronQuote){
//
//     const quotesContainer = document.querySelector('#quotes')
//     quotesContainer.innerHTML += `
//       <p> ${ronQuote}</p>
//     `
//
//   })

// console.log(' this is DEFINITELY AFTER THE FETCH')






//
//
//
// const pokemonURL = "http://localhost:3000"
// fetch(pokemonURL, {
//   method: "POST",
//   headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//   body: JSON.stringify({
//           "height": 10,
//           "weight": 130,
//           "id": 2,
//           "name": "ivysaur",
//           "abilities": ["overgrow", "chlorophyll"],
//           "moves": [],
//           "stats": [
//             {
//               "value": 80,
//               "name": "special-defense"
//             },
//             {
//               "value": 80,
//               "name": "special-attack"
//             },
//             {
//               "value": 63,
//               "name": "defense"
//             },
//             {
//               "value": 62,
//               "name": "attack"
//             },
//             {
//               "value": 60,
//               "name": "speed"
//             },
//             {
//               "value": 60,
//               "name": "hp"
//             }
//           ],
//           "types": ["grass", "poison"],
//           "sprites": {
//             "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//             "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//           }
//         })
//       })
//   .then(r = > r.json())
//   .then(// logic)
