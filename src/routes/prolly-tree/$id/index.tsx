import { TreeInterface } from '@/components/TreeInterface'
import { Toaster } from '@/components/ui/sonner'
import { useProllyStore } from '@/useProllyStore'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prolly-tree/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const trees = useProllyStore((state) => state.trees)

  const tree = trees[id]
  return (
    <div className="container mx-auto p-2 sm:p-1 space-y-1 h-screen overflow-hidden flex flex-col">
      <Toaster richColors />

      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {tree && <TreeInterface treeState={tree} />}
      </div>
    </div>
  )
}
