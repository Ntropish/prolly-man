import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import type { QueryClient } from '@tanstack/react-query'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col gap-4 overflow-y-hidden flex-1 relative">
          <SidebarTrigger className="absolute top-2 left-2" />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  ),
})
