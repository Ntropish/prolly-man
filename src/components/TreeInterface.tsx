import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

import { ScanEntries } from './treeOperations/ScanEntries'

import { type ProllyTree } from '@/useProllyStore'

import TreeManagement from './tree-management'
import { AddEntryDialog } from './treeOperations/AddEntryDialog'

interface TreeInterfaceProps {
  treeState: ProllyTree
}

export function TreeInterface({ treeState }: TreeInterfaceProps) {
  // Define default active tab, e.g., "basic"
  const defaultTab = 'scan'

  return (
    <Card className="w-full shadow-lg border flex-1 overflow-hidden h-full p-1">
      <CardHeader>
        <CardTitle className="text-xl tracking-tight flex items-center gap-2">
          <span className="px-2 py-1 rounded font-mono">
            {treeState.path.replace(/\.prly$/, '')}
          </span>
          <span className="ml-2 flex gap-2 ml-auto">
            <AddEntryDialog tree={treeState} />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 pt-2 h-full min-h-0 flex flex-col p-1">
        <Tabs
          defaultValue={defaultTab}
          className="w-full min-h-0 flex flex-col"
        >
          <TabsList className="grid w-full grid-cols-2 mb-2 grid-rows-1 h-8 ">
            <TabsTrigger value="scan">Scan</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
          </TabsList>

          <TabsContent
            value="scan"
            className="pt-2 min-h-0 flex-1 overflow-hidden min-h-0"
          >
            {treeState.tree ? (
              <ScanEntries
                key={`tree-${treeState.path}-${treeState.rootHash}`}
                currentRoot={treeState.rootHash}
                prly={treeState}
                treePath={treeState.path}
                height="400px"
                itemHeight={65}
              />
            ) : (
              <p>Tree instance not available.</p>
            )}
          </TabsContent>

          <TabsContent value="management" className="pt-4">
            <TreeManagement treeState={treeState} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
