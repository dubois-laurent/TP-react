import { createFileRoute } from '@tanstack/react-router'
import PokemonSearchPage from '../pages/PokemonSearchPage'

export const Route = createFileRoute('/pokemon')({
  component: PokemonSearchPage,
})
