import { fetchAllPokemon } from "../api/AllPokemonAPI";
import { useQuery } from "@tanstack/react-query";

export function PokemonList() {
    
    const { data, error, isPending } = useQuery({
        queryKey: ["pokemonList"],
        queryFn: fetchAllPokemon
    });

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Erreur dans le chargement de la data</div>;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-8">Liste des 151 premiers Pokémon</h1>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data.data?.map((pokemon) => (
                    <li key={pokemon.name} className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center shadow-lg hover:scale-105 transition-transform">
                        <p className="text-white font-semibold capitalize">{pokemon.name}</p>
                        <img
                            src={pokemon.sprites.front_shiny}
                            alt={pokemon.name}
                            className="w-24 h-24 mx-auto drop-shadow-2xl"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}