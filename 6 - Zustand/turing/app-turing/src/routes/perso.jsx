import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/perso')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/perso"!</div>
}
