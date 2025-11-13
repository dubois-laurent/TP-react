import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex')({
  loader: async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du Pokédex')
    }
    return response.json()
  },
  component: RouteComponent,
})

function RouteComponent() {
  const pokedex = Route.useLoaderData()

  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokedex.results.map((pokemon) => (
          <a href={`/pokemon/${pokemon.name}`} key={pokemon.name}><li>{pokemon.name}</li></a>
        ))}
      </ul>
    </div>
  )
}