//Pokedex Application

let pokemonRepository = (function () { 
  //pokemon List
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //This code checks if pokemon is a object'
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }


  function getAll() {
    return pokemonList;
  }
  
  function addListItem(pokemon) {
    //assing the list pokemons to html
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let container = document.createElement('div');
    let button = document.createElement("button");
    button.innerText = pokemon.name;

    //adds class button for css styling
    container.classList.add("poke-button")
    button.classList.add("name");

    //append children
    container.appendChild(button);
    listpokemon.appendChild(container);
    pokemonList.appendChild(listpokemon);
   
   
   // add onclick listiner
    onclickEventListener(button, pokemon);
  }
  function onclickEventListener(element, object) {
    element.addEventListener('click', function () {
      showDetails(object);
    });
  }

  // This code will fetch info from json'
  function loadList() {
    
    return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    
    .then(function (json) {
     
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
 
  }


  //This code will fetch details about pokemos like: img, height, type, weight.
   function loadDetails(pokemon) {
    
    let url = pokemon.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = details.types;
    })
    .catch(function (e) {
    
      console.error(e);
    });
}

function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

  function showModal(pokemon) {
    // Clear all existing modal content
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    modalTitle.empty();
    modalBody.empty();

    // Create new content
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" style="width:50%"> alt=""');
    imageElement.attr('src', pokemon.imageUrl);
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + ' m' + '</p>');
    let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + ' kg' + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);

    $('#exampleModalLive').modal();
  }

  //back to the top
  let mybutton = document.getElementById('btn-back-to-top');

  //when user scroll down from the top of the document, show button.
  window.onscroll = function () {
    scrollFunction();
  };

 function scrollFunction() {
   if(
     document.body.scrollTop > 20 || 
     document.documentElement.scrollTop > 20 
   ) {
     mybutton.style.display = 'block';
   } else {
     mybutton.style.display = 'none';
   }
 }

 //button click goes up
 mybutton.addEventListener('click', backToTop);
 

 function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   }
   
   return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
  });
  });
  let pokemonSearchBar = document.querySelector('#search-input');

  pokemonSearchBar.addEventListener('input', function() {
  let pokeItem = document.querySelectorAll('li');
  let filter = pokemonSearchBar.value.toUpperCase();
  
  pokeItem.forEach(function(pokemon){
  if (pokemon.innerText.toUpperCase().indexOf(filter) === 0) {
  pokemon.style.display = 'block';
  } else {
  pokemon.style.display = 'none';
  }
  });
  });