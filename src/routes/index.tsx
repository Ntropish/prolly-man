import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <ArrowUpLeft className="h-10 w-10" />
        <p>Create a Prolly Tree to get started.</p>
      </header>
    </div>
  )
}
