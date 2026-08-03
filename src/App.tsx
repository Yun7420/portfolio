import { Content } from './content'
import { SiteFooter } from './footer'
import { Header } from './header'

function App() {
  return (
    <div className="min-h-svh bg-surface text-zinc-200">
      <Header />
      <Content />
      <SiteFooter />
    </div>
  )
}

export default App
