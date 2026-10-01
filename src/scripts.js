const entradapokemon = document.getElementById("nome");
const botao = document.getElementById("verificar");
const url = "https://pokeapi.co/api/v2/pokemon/";
let api;
let pokemonjson;
let pokemon;
let tagimagem;

async function pokemondados() {
    let nomepokemon = entradapokemon.value; 
    api = url + nomepokemon;
    console.log(api);

    pokemonjson = await fetch(api);
    pokemon = await pokemonjson.json();
    console.log(pokemon);

    tagimagem = document.querySelector("img");
    tagimagem.src = pokemon.sprites.front_default;
    document.getElementById("pokemonnome").textContent = pokemon.name;
};

botao.addEventListener("click", pokemondados);