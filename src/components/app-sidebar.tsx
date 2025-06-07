import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useProllyStore } from '@/useProllyStore'
import { Button } from './ui/button'
import { useRef, type ChangeEvent } from 'react'
import { useState } from 'react'
import { toast } from 'sonner'
import { PTree } from 'prolly-gunna'
import { PlusCircle } from 'lucide-react'
import { Label } from '@radix-ui/react-label'
import { Loader2, FileUp, TreeDeciduous } from 'lucide-react'
import { Input } from './ui/input'
import { TreeMenu } from './tree-menu'
import { Link, useLocation, useNavigate } from '@tanstack/react-router'

export function AppSidebar() {
  const trees = useProllyStore((s) => s.trees)
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  const navigate = useNavigate()

  const [working, setWorking] = useState<'create' | 'load' | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function createNewTree() {
    console.log('createNewTree')
    setWorking('create')
    try {
      console.log('createNewTree 2')
      const id = await useProllyStore.getState().createNewTree()
      console.log('createNewTree 3')
      toast.success(`Created "${id}" (unsaved)`)
      console.log('navigate', id)
      navigate({ to: `/prolly-tree/$id`, params: { id } })
    } catch (err: any) {
      toast.error(`New tree failed: ${err.message ?? 'Unknown'}`)
    } finally {
      setWorking(null)
    }
  }

  async function updloadTreeFromFile(file: File) {
    setWorking('load')
    try {
      const bytes = new Uint8Array(await file.arrayBuffer())
      const tree = await PTree.loadTreeFromFileBytes(bytes)
      const path = file.name

      const id = await useProllyStore.getState().createNewTree({
        tree,
        path,
      })

      toast.success(`Loaded "${file.name}"`)
      navigate({ to: `/${id}` })
    } catch (err: any) {
      toast.error(`Load failed: ${err.message ?? 'Unknown'}`)
    } finally {
      setWorking(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  function onFileChosen(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (f) updloadTreeFromFile(f)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        {/* HEADER */}
        <div className="flex gap-2 flex-wrap items-center">
          <div className="flex items-center gap-2 mr-auto">
            <TreeDeciduous className="h-8 w-8 text-muted-foreground" />
            <h1 className="text-3xl font-light tracking-tight text-muted-foreground">
              PBT
            </h1>
          </div>
          <Button
            size="sm"
            onClick={createNewTree}
            disabled={working === 'create'}
            variant="ghost"
            title="New Tree"
          >
            {working === 'create' ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <PlusCircle className="mr-2 h-4 w-4 text-green-500" />
            )}
          </Button>

          <Label htmlFor="file-upload" className="cursor-pointer">
            <Button
              asChild
              size="sm"
              disabled={working === 'load'}
              variant="ghost"
              title="Import"
            >
              <span>
                {working === 'load' ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <FileUp className="mr-2 h-4 w-4" />
                )}
              </span>
            </Button>
          </Label>
          <Input
            id="file-upload"
            ref={fileInputRef}
            type="file"
            accept=".prly,.prollytree,.prolly"
            className="hidden"
            onChange={onFileChosen}
            disabled={working === 'load'}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="list-none">
          {Object.entries(trees)
            .sort((a, b) => a[1].path.localeCompare(b[1].path))
            .map(([id, tree]) => (
              <SidebarMenuItem key={id}>
                <div className="flex flex-row">
                  <SidebarMenuButton asChild isActive={pathname === `/${id}`}>
                    <Link
                      to={`/prolly-tree/$id`}
                      params={{ id }}
                      className="flex justify-between"
                    >
                      <span className="text-xs text-overflow-ellipsis overflow-hidden font-mono">
                        {tree.path.replace(/\.prly$/, '')}
                      </span>
                      {tree.rootHash !== tree.lastSavedRootHash && '*'}
                    </Link>
                  </SidebarMenuButton>
                  <div className="flex justify-end">
                    <TreeMenu prly={tree} treePath={tree.path} />
                  </div>
                </div>
              </SidebarMenuItem>
            ))}
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
