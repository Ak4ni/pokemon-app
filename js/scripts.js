//Pokedex Application

let pokemonRepository = (function() {
  //added IIFE function
  let pokemonList = [ 
      { name: "Venusaur", type: [ 'Grass', 'Poison' ], height : "2", weight: "100" },
      { name: "Meganium", type: ['Grass' ], height: "2", weight: "101" },
      { name: "Exeggutor", type: ['Grass' , 'Psychic'], height: "2", weight: "120"},
      { name: "Charizard", type: ['Fire', 'Flying'], height: "2", weight: "91"},
      { name: "Ninetales", type: ['Fire'], height: "1", weight: "20"},
      { name: "Arcanine", type: ['Fire'], height: "2", weight: "155"},
      { name: "Golduck", type: ['Water'], height: "2", weight: "77"},
      { name: "Poliwrarh", type: ['Water', 'Fighting'], height: "1", weight: "54"},
      { name: "Gyarados", type: ['Water' , 'Flying'], height: "7", weight: "235"},
      { name: "Nidoking", type: ['Ground', 'Poison'], height: "1", weight: "62"},
      { name: "Sandslash", type: ['Ground'], height: "1", weight: "30"},
      { name: "Rhydon", type: ['Ground', 'Rock'], height: "2", weight: "120"},
      { name: "Graveler", type: ['Ground','Rock'], height: "1", weight: "105"}
  ];

  //for adding to pokedex entry { name: '', type: ['' , ''], height: , weight: }, or { name: '', type: [''], height: , weight: }, 
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonRepository.push(pokemon);
    } else {
      console.log("pokemon is not correct")
    }
  }
  function getAll() {
      return pokemonList;
    }
    
  function add(item) {
      return pokemonList.push(item);
  }

   function showDetails(pokemon){
     console.log(pokemon.name);
    }

  function addListitem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("poke-button");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
      getAll: getAll,
      add: add,
      addListitem:addListitem
  };
  }());
 
  let newPokemon = 
  { name:'Venomoth', 
  type:['Bug', 'Poison'], height:'2', weight:'13'};
  pokemonRepository.add(newPokemon);

  console.log(pokemonRepository.getAll()); 
  
    pokemonRepository.getAll().forEach(function(pokemon) {
     pokemonRepository.addListitem(pokemon);
    })

  