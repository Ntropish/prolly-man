import { TreeInterface } from '@/components/TreeInterface'
import { Toaster } from '@/components/ui/sonner'
import { useProllyStore } from '@/useProllyStore'
import { createFileRoute } from '@tanstack/react-router'
import { TreeDeciduous } from 'lucide-react'

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

      {/* HEADER */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b">
        <div className="flex items-center gap-2 ml-11">
          <TreeDeciduous className="h-8 w-8 text-muted-foreground" />
          <h1 className="text-3xl font-light tracking-tight text-muted-foreground">
            PBT
          </h1>
        </div>
      </header>

      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {tree && <TreeInterface treeState={tree} />}
      </div>
    </div>
  )
}
