import { createFileRoute } from '@tanstack/react-router'
import CategoryPage from '../components/Category.jsx'

export const Route = createFileRoute('/category/$name')({
  component: CategoryPage,
})