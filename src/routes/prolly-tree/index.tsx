import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prolly-tree/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/prolly-tree/"!</div>
}
