
const poke_container = document.getElementById('poke_container');
const pokemons_number = 500;
const colors = {
    fire : '#FDDFDF',
    grass : '#DEFDE0',
    electric : '#FCF7DE',
    water : '#DEF3FD',
    ground : '#F3e7da',
    rock : '#d5d5d4',
    fairy : '#fceaff',
    poison : '#98d7a4',
    bug : '#f8d5a3',
    dragon : '#97b3e6',
    psychic : '#eaeda1',
    flying : '#F5F5F5',
    fighting : '#E6E0D4',
    normal : '#F5F5F5'
};

const main_types = Object.keys(colors);


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
    const poke_types = pokemon.types.map(el => el.type.name);
    const type =  main_types.find(
        type => poke_types.indexOf(type) > -1
        );

    const pokeInnerHtml ='<div class = "img-container">'+
    '<img src="https://pokeres.bastionbot.org/images/pokemon/'+pokemonId + '.png"'+
    '</div> '+
    '<div class = "info">'+
    '<span class ="number">#'+ pokemonId +'</span>'+
    '<h3 class="name">' + pokemonName + '</h3>' +
    '<small class = "type">Type: <span>' + type + '</span></small>'+
    '</div>'
    
    

    pokemonEl.innerHTML = pokeInnerHtml;

    poke_container.appendChild(pokemonEl);
}


