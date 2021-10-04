//Poekedex application

//pokenmonList Variable

let pokemonList = [
 {name: 'charizard', height: 2, type: [ 'fire', 'flying']},
 {name: 'venusaur', height: 2, type: ['grass', 'poison']},
 {name: 'balstoise', height: 2, type: ['water']},
 {name: 'electabuzz', height: 1, type: ['electric']},
];



const maxHeight = 2;

for (let i = 0; i < pokemonList.length; i++) {
  let pokemonObject = pokemonList[i];
    console.log(`${pokemonObject.name}-${pokemonObject.height}`);
      document.write(`<p>${pokemonObject.name}</p>`);

if ( pokemonObject.height >= maxHeight ) {
   document.write(`<p>${pokemonObject.name} - Wow, that’s big!</p>`);
} else {
    document.write(`<p>${pokemonObject.name} - Thats a Pokemon!</p>`);
 }
}
 