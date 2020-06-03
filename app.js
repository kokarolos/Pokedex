
const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;


const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetchUrl = url + id;
    const res = await fetch(fetchUrl);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}
fetchPokemons();

function createPokemonCard(pokemon) {

    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokemonId= pokemon.id;
    const pokemonName= pokemon.name;

    const pokeInnerHtml =
    '<div class = "img-container">'+
    '<img src = "https://pokeres.bastionbot.org/images/pokemon/'+pokemonId + '.png"'+
    '</div>'+pokemonName;
    

    pokemonEl.innerHTML = pokeInnerHtml;

    poke_container.appendChild(pokemonEl);
}


