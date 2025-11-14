import { useState, useEffect } from 'react';

export function PokemonSearch() {

    const [status, setStatus] = useState(true);
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

        const handleSubmit = (event) => {
        event.preventDefault();
        setStatus(!status);
        console.log('ici');
        console.log('Pokémon:', pokemonName);
    }

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!pokemonName) return;
            try {
                console.log(pokemonName);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Erreur:', error);
            }
        };
        console.log(pokemonData);
        fetchPokemon();
    }, [status]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
          🔍 Recherche Pokémon
        </h1>

        <form className="flex gap-3 mb-8" onSubmit={handleSubmit}>
          <input 
            onChange={(e) => setPokemonName(e.target.value)}
            type="text" 
            placeholder="Pikachu, Ditto, Charizard..." 
            className="flex-1 px-4 py-3 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 transition-all shadow-lg"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Rechercher
          </button>
        </form>

        {pokemonData && (
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white capitalize mb-6 drop-shadow">
                {pokemonData.name}
              </h2>
              
              <div className="bg-white/30 rounded-2xl p-6 mb-6 inline-block shadow-inner">
                <img
                  src={pokemonData.sprites.front_default}
                  alt={pokemonData.name}
                  className="w-48 h-48 mx-auto drop-shadow-2xl hover:scale-110 transition-transform"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
                  <p className="text-white/80 text-sm mb-1">⚖️ Poids</p>
                  <p className="text-2xl font-bold text-white">{(pokemonData.weight / 10).toFixed(1)} kg</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
                  <p className="text-white/80 text-sm mb-1">📏 Taille</p>
                  <p className="text-2xl font-bold text-white">{(pokemonData.height / 10).toFixed(1)} m</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!pokemonData && (
          <div className="bg-white/10 backdrop-blur rounded-2xl p-12 text-center">
            <p className="text-white/70 text-lg">
              👆 Recherchez un Pokémon pour commencer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}