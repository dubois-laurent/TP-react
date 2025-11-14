

export const fetchAllPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );
  console.log(pokemonDetails);
  return pokemonDetails;
};