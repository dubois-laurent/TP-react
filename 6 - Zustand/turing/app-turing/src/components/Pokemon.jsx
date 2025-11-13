import { Route } from '../routes/pokemon.$name'

export default function PokemonPage() {
  const pokemon = Route.useLoaderData()
  const { name } = Route.useParams()

  return (
    <div>
      <h1>{name}</h1>
      <img
        src={pokemon.sprites.front_shiny}
        alt={name}
      />
      <img
        src={pokemon.sprites.front_default}
        alt={name}
      />
      <ul>
        <li>Poids : {pokemon.weight}</li>
        <li>Taille : {pokemon.height}</li>
        <li>Types : {pokemon.types.map(t => t.type.name).join(', ')}</li>
      </ul>
    </div>
  )
}