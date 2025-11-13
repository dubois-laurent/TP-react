import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/perso" className="[&.active]:font-bold">
        Perso
      </Link>
      <Link to="/pokemon/$name" className="[&.active]:font-bold">
        POKEMON SEARCH
      </Link>
      <Link to="/pokedex" className="[&.active]:font-bold">
        POKEDEX
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })