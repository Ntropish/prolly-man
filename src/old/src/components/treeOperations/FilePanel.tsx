import { type TreeConfigOptions } from 'prolly-gunna'

import { TreeInfoPanel } from './TreeInfoPanel'

interface JsonlFileLoaderProps {
  treeConfig: TreeConfigOptions | null
  rootHash: string | null
}

export const ProllyFilePanel: React.FC<JsonlFileLoaderProps> = ({
  treeConfig,
  rootHash,
}) => {
  return (
    <div className="space-y-2 flex flex-col gap-2">
      <TreeInfoPanel
        treeState={{
          rootHash: rootHash,
          treeConfig: treeConfig,
        }}
      />
    </div>
  )
}
